const ProductRank = require("../../models/productrank");

class ProductRankBuilder {

  constructor() {
    this.entity = new ProductRank();
  }

  setCategoryId(id) {
    this.entity.cat_id = id;
    return this;
  }

  setProductId(id) {
    this.entity.prod_id = id;
    return this;
  }

  setProductName(product_name) {
    this.entity.product_name = product_name;
    return this;
  }

  setMainIngredient(main_ingredient) {
    this.entity.main_ingredient = main_ingredient;
    return this;
  }

  setCompatibilityPoints(compatibility_points) {
    this.entity.compatibility_points = compatibility_points;
    return this;
  }

  build() {
    return this.entity;
  }
}

module.exports = ProductRankBuilder;
