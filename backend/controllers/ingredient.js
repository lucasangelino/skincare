const { response } = require("express");
const { pg_pool } = require("../db/database");
const errors = require("../common/error");

const getIngredients = async (req, res = response, done) => {
	try {
		var query = `SELECT * from ingredient i`;

		let name = req.body.name.toLowerCase();
		if(name != undefined && name.length >= 4) {
			query += ` WHERE (lower(i.friendly_name) LIKE '%${name}%' OR lower(i.ingr_name) LIKE '%${name}%')`
		}

		const records = await pg_pool.query(query);
		if (records.rows.length > 0) {
			return res.status(200).json({
				ok: true,
				result: records.rows
			}); 
		} else {
			return res.status(404).json({
				ok: false,
				message: errors.INGR_NOT_FOUND,
			});
		}

	} catch (error) {
		return res.status(500).json({
			ok: false,
			message: errors.UNEXPECTED_ERROR,
		});
	}
};

const getIngredientId = async (req, res = response, done) => {
	try {
		let id = req.params.id;
		var query = `SELECT * from ingredient where ingr_id = ${id}`;
		const records = await pg_pool.query(query);

		if (records.rows.length > 0) {
			return res.status(200).json({
				ok: true,
				result: records.rows[0]
			}); 
		} else {
			return res.status(404).json({
				ok: false,
				message: errors.INGR_NOT_FOUND,
			});
		}
	} catch (error) {
		return res.status(500).json({
			ok: false,
			message: errors.UNEXPECTED_ERROR,
		});
	}
};

const compareIngredients = async (req, res = response) => {
	try {
		const { ingredient_ids } = req.body;

		if(ingredient_ids.length != 2)  {
			let err = `bad input: ingredients_ids.lenght MUST be equal to 2`;
			console.log(err)
			return res.status(500).json({
				ok: false,
				message: err,
			});
		}

		let ingr1 = ingredient_ids[0];
		let ingr2 = ingredient_ids[1];

		if (ingr1 < ingr2) {
			ingr1 = ingredient_ids[1],
			ingr2 = ingredient_ids[0];
		}


		query = `SELECT * FROM ingredient_ingredient ii WHERE ii.ingr1_id = ${ingr1} AND ii.ingr2_id = ${ingr2} ORDER BY abs(ii.compatibility_points)`;
		records = await pg_pool.query(query);

		if (records.rows.length >= 1) {

			let score = records.rows[0].compatibility_points;
			return res.status(200).json({
				ingredient_ids: [ingr1, ingr2], 
				ok:  score >= 0 ? true : false,
				main_reason: records.rows[0].rel_desc
			});
		} else {
			return res.status(404).json({
				ok: false,
				message: errors.RELATION_NOT_FOUND
			});
		}

	} catch (error) {
		console.log(error)
		return res.status(500).json({
			ok: false,
			message: errors.UNEXPECTED_ERROR,
		});
	}
};

const getIngredientOverview = async (req, res = response, done) => {
	try {
		const { selected_checkbox, ingredients } = req.body;

		// Response wrapper
			/*{
				"1": [   ],
				"2": [   ]
			}*/ 
		var categories = {};
		selected_checkbox.forEach(c => {
			categories[c] = []
		});

		if(selected_checkbox.length == 0) {
			for(let i = 1; i <= 8; i++) {
				categories[i] = []
			}
		}

		var query = `SELECT p.PROD_ID, p.PRODUCT_NAME, pc.CAT_ID, pi.INGR_ID `;
		if((ingredients != undefined && ingredients.length > 0)) {
			query = query.concat(`, sum(ii.compatibility_points)`);
		}
		query = query.concat(`FROM product p `);
		query = query.concat(`INNER JOIN product_category pc ON pc.PROD_ID = p.PROD_ID  `);
		query = query.concat(`INNER JOIN product_ingredient pi ON pi.PROD_ID = p.PROD_ID AND pi.MAIN='t' `);
		if((ingredients != undefined && ingredients.length > 0)) {
			query = query.concat(`INNER JOIN INGREDIENT_INGREDIENT ii ON ((ii.INGR1_ID IN (${ingredients}) AND ii.INGR2_ID = pi.INGR_ID) OR (ii.INGR2_ID IN (${ingredients}) AND ii.INGR1_ID = pi.INGR_ID)) `);
		}
		query = query.concat(`GROUP BY p.PROD_ID, p.PRODUCT_NAME, pc.CAT_ID, pi.INGR_ID`)

		const records = await pg_pool.query(query);
		records.rows.forEach(record => {
			if(record.cat_id in categories) {
				categories[record.cat_id] = categories[record.cat_id].concat({
					prod_id: record.prod_id,
					prod_name: record.product_name,
					main_ingredient: record.ingr_id,
					compatibility: record.sum
				})
			}
		});

		res.status(200).json({
			ok: true,
			result: categories
		});
	} catch (error) {
		console.log(error)
		res.status(500).json({
			ok: false,
			message: errors.UNEXPECTED_ERROR,
		});
	}
};

module.exports = {
		getIngredientId,
		getIngredients,
		compareIngredients,
		getIngredientOverview
	};
	