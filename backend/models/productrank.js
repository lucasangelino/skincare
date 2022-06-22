class ProductRank {

    constructor() {
        this.cat_id = null
        this.prod_id = null;
        this.product_name = null;
        this.main_ingredient = null;
        this.compatibility_points = null;
    }

    getCategoryId() {
        return this.cat_id;
    }

    getProductId() {
        return this.prod_id;
    }

    getProductName() {
        return this.product_name;
    }

    getMainIngredient() {
        return this.main_ingredient;
    }

    getCompatibilityPoints() {
        return this.compatibility_points;
    }

    static compare(a,b) {
        if(a.compatibility_points < b.compatibility_points) {
            return 1;
        }
        if(a.compatibility_points > b.compatibility_points) {
            return -1;
        }
    
        return 0;
    }
}



module.exports = ProductRank;
