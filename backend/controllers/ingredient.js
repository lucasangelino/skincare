const { response } = require("express");
const { pg_pool } = require("../db/database");
var errors = require("../common/error");

const getIngredients = async (req, res = response, done) => {
  try {
    pg_pool.connect(function (err, client, done) {
        var query = 'SELECT * from ingredient'
        client.query(query, function (err, result) {
          return res.json({
            ok: true,
            result: result.rows
          });         
        })
    }); 
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: errors.ERROR,
    });
  }
};

const getIngredientId = async (req, res = response, done) => {
  let id = req.params.id;
  try {
    pg_pool.connect(function (err, client, done) {
        var query = `SELECT * from ingredient where ingr_id = ${id}`
        client.query(query, function (err, result) {
          if(result.rows.length > 0) {
            console.log('Got {{result.row[0]}}', result.rows[0])
            return res.json({
              ok: true,
              result: result.rows[0]
            }); 
          } else {
            return res.status(404).json({
              ok: false,
              message: errors.NOT_FOUND
            });
          }
            
        })
    }); 
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: errors.ERROR,
    });
  }
};


const getIngredientOverview = async (req, res = response, done) => {
  let id = req.params.id;
  try {
    pg_pool.connect(function (err, client, done) {
        var query = `SELECT from ingredient_ingredient where ingr1_id = ${id} OR ingr2_id = ${id}`
        return res.json({
          ok: true,
          result: result.rows[0]
        });
    }); 
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: errors.ERROR,
    });
  }
};

module.exports = {
    getIngredientId,
    getIngredients,
    getIngredientOverview
  };
  