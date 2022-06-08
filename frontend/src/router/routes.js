import { Home } from "../pages/Home";
import { ProductsCompatibility } from "../pages/ProductsCompatibility";

const routes = Object.freeze([
  {
    path: "/",
    component: Home,
    isProtected: true,
  },
  {
    path: "/productsCompatibility",
    component: ProductsCompatibility,
    isProtected: true,
  },
]);

export default routes;
