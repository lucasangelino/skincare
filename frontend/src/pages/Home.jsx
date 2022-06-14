import * as React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import SkinCareBanner from "../components/framework/SkinCareBanner";
import ProductsSearchBanner from "../components/framework/ProductSearchBanner";
import RutinesBanner from "../components/framework/RutinesBanner";
import ProductsOfMonth from "../components/framework/ProductsOfMonth";
import PopularProducts from "../components/framework/PopularProducts";

export function Home() {
  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <SkinCareBanner />
        </GridItem>
        <GridItem colSpan={1}>
          <ProductsSearchBanner />
        </GridItem>
        {/* <GridItem colSpan={1}>
          <RutinesBanner />
        </GridItem> */}
        <GridItem colSpan={{ base: 1, sm: 3, md: 3 }}>
          <ProductsOfMonth />
        </GridItem>
      </Grid>
    </>
  );
}
