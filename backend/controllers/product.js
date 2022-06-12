const { response } = require("express");
const { pg_pool } = require("../db/database");
const errors = require("../common/error");

const getProducts = async (req, res = response, done) => {
	try {

		var query = `SELECT p.* from product p INNER JOIN brand b ON b.BRAND_ID = p.BRAND_ID`;

		let name = req.body.name.toLowerCase();
		if(name != undefined && name.length >= 4) {
			query += ` WHERE (lower(p.product_name) LIKE '%${name}%' OR lower(b.brand_name) LIKE '%${name}%')`
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

const getProductId = async (req, res = response) => {
	try {
		let id = req.params.id;
		var query = `SELECT * from product p where p.prod_id = ${id}`;
		const records = await pg_pool.query(query);
		 if (records.rows.length > 0) {
			return res.status(200).json({
				ok: true,
				result: records.rows
			}); 
		} else {
			return res.status(404).json({
				ok: false,
				message: errors.PRODUCT_NOT_FOUND,
			});
		}
	} catch (error) {
		return res.status(500).json({
			ok: false,
			message: errors.UNEXPECTED_ERROR,
		});
	}
};

const compareProducts = async (req, res = response) => {
	try {
		const { prod_ids } = req.body;

		if(prod_ids.length != 2)  {
			let err = `bad input: products_ids.lenght MUST be equal to 2`;
			console.log(err)
			return res.status(500).json({
				ok: false,
				message: err,
			});
		}

		var query = `SELECT * FROM product_ingredient WHERE prod_id IN (${prod_ids}) AND main = 't'`;
		var records = await pg_pool.query(query);
		if(records.rows.length > 1) {

			let pi1 = records.rows[0];
			let pi2 = records.rows[1];
			if (pi1.prod_id < pi2.prod_id) {
				pi1 = records.rows[1]; 
				pi2 = records.rows[0];
			}

			query = `SELECT * FROM ingredient_ingredient ii WHERE ii.ingr1_id = ${pi1.ingr_id} AND ii.ingr2_id = ${pi2.ingr_id} ORDER BY abs(ii.compatibility_points)`;
			records = await pg_pool.query(query);

			if (records.rows.length >= 1) {

				let score = records.rows[0].compatibility_points;
				return res.status(200).json({
					prod_ids: [pi1.prod_id, pi2.prod_id], 
					ok:  score >= 0 ? true : false,
					main_reason: records.rows[0].rel_desc
				});
			} else {
				return res.status(404).json({
					ok: false,
					message: errors.RELATION_NOT_FOUND
				});
			}
		} else {
			return res.status(404).json({
				ok: false,
				message: errors.PRODUCT_NOT_FOUND
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

module.exports = {
		getProductId,
		getProducts, 
		compareProducts
	};
	