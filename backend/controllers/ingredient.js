const { response } = require("express");
const { pg_pool } = require("../db/database");
const errors = require("../common/error");
const ProductRankBuilder = require("../helpers/builder/productrank");
const ProductRank = require("../models/productrank");

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
		const { selected_checkbox, used, ingredients } = req.body;

		// Response wrapper
			/*{
				"1": [   ],
				"2": [   ]
			}*/ 
		var result_wrapper = [];

		var categories_to_display = [];
		if(selected_checkbox == undefined || selected_checkbox.length == 0) {
			for(let i = 1; i <= 8; i++) {
				result_wrapper[i] = []
				categories_to_display[i-1] = i;
			}
		} else {
			if (used != undefined) { 
				categories_to_display = selected_checkbox.filter(c => !used.includes(c));
			}
			for(let i = 0; i <= categories_to_display.length; i++) {
				result_wrapper[categories_to_display[i]] = []
			}
		}

		if (result_wrapper.length == 0) {
			return res.status(504).json({
				ok: false,
				message: "Bad Request! Ya se usaron todas las categorias."
			});
		}

		var query = `SELECT p.PROD_ID, p.PRODUCT_NAME, pc.CAT_ID, pi.INGR_ID `;
		if((ingredients != undefined && ingredients.length > 0)) {
			query = query.concat(`, sum(ii.compatibility_points) `);
		}
		query = query.concat(`FROM product p `);
		query = query.concat(`INNER JOIN product_category pc ON pc.PROD_ID = p.PROD_ID AND pc.cat_id IN (${categories_to_display}) `);
		query = query.concat(`INNER JOIN product_ingredient pi ON pi.PROD_ID = p.PROD_ID AND pi.MAIN='t' `);
		if((ingredients != undefined && ingredients.length > 0)) {
			query = query.concat(`INNER JOIN INGREDIENT_INGREDIENT ii ON ((ii.INGR1_ID IN (${ingredients}) AND ii.INGR2_ID = pi.INGR_ID) OR (ii.INGR2_ID IN (${ingredients}) AND ii.INGR1_ID = pi.INGR_ID)) `);
		}
		query = query.concat(`GROUP BY p.PROD_ID, p.PRODUCT_NAME, pc.CAT_ID, pi.INGR_ID`)

		const records = await pg_pool.query(query);
		let rows = records.rows;

		let product_rank_result = [];
		rows.forEach(function callback(value, index) {

			let product_rank = new ProductRankBuilder()
			.setCategoryId(value.cat_id)
			.setProductId(value.prod_id)
			.setProductName(value.product_name)
			.setMainIngredient(value.ingr_id)
			.setCompatibilityPoints(value.sum)
			.build();

			product_rank_result = product_rank_result.concat(product_rank);		
		}); 

		product_rank_result.forEach(product_rank => {
			if(product_rank.getCategoryId() in result_wrapper) {
				result_wrapper[product_rank.getCategoryId()] = result_wrapper[product_rank.getCategoryId()].concat(product_rank)
			}
		});

		// categories
		for (let c = 0; c < result_wrapper.length; c++) {
			// product ranks per category
			if (result_wrapper[c] !== undefined) { 
				result_wrapper[c].sort( ProductRank.compare )
			}
		}
	
		res.status(200).json({
			ok: true,
			result: result_wrapper
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
	