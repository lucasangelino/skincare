const { response } = require("express");
const { pg_pool } = require("../db/database");
var errors = require("../common/error");

const getIngredients = async (req, res = response, done) => {
  try {
    var query = 'SELECT * from ingredient';
    const records = await pg_pool.query(query);
    return res.json({
      ok: true,
      result: records
    });  
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
    return res.json({
      ok: true,
      result: records
    }); 
  } catch (error) {
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

    var query = `SELECT p.PROD_ID, p.PRODUCT_NAME, pc.CAT_ID `;
    if((ingredients != undefined && ingredients.length > 0)) {
      query = query.concat(`, sum(ii.compatibility_points)`);
    }
    query = query.concat(`FROM product p `);
    query = query.concat(`INNER JOIN product_category pc ON pc.PROD_ID = p.PROD_ID  `);
    if((ingredients != undefined && ingredients.length > 0)) {
      query = query.concat(`INNER JOIN product_ingredient pi ON pi.PROD_ID = p.PROD_ID AND pi.MAIN='t' `);
      query = query.concat(`INNER JOIN INGREDIENT_INGREDIENT ii ON ((ii.INGR1_ID IN (${ingredients}) AND ii.INGR2_ID = pi.INGR_ID) OR (ii.INGR2_ID IN (${ingredients}) AND ii.INGR1_ID = pi.INGR_ID)) `);
    }
    query = query.concat(`GROUP BY p.PROD_ID, p.PRODUCT_NAME, pc.CAT_ID`)

    const records = await pg_pool.query(query);
    records.rows.forEach(p => {
      if(p.cat_id in categories && categories[p.cat_id]) {
        categories[p.cat_id] = categories[p.cat_id].concat({
          name: p.product_name,
          main_ingredient_: p.ingr_id,
          compatibility: p.sum
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
    getIngredientOverview
  };
  