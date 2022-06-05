const { response } = require("express");
const { pg_pool } = require("../db/database");
var errors = require("../common/error");
const { query } = require("express");

const getProducts = async (req, res = response, done) => {
  try {
    var query = `SELECT * from product`;
    const records = await pg_pool.query(query);
    return res.json({
      ok: true,
      result: records
    });   
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: errors.UNEXPECTED_ERROR,
    });
  }
};

const getProductId = async (req, res = response, done) => {
  try {
    let id = req.params.id;
    var query = `SELECT * from product where product_id = ${id}`
    const records = await pg_pool.query(query);
    if(records.rows.length > 0) {
      return res.json({
        ok: true,
        result: records.rows[0]
      }); 
    } else {
      return res.status(404).json({
        ok: false,
        message: errors.INGR_NOT_FOUND
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: errors.UNEXPECTED_ERROR,
    });
  }
};

module.exports = {
    getProductId,
    getProducts
  };
  