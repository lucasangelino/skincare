import * as React from "react";
import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";

import SkinCareBanner from "../components/framework/SkinCareBanner";
import ProductsSearchBanner from "../components/framework/ProductSearchBanner";
import RutinesBanner from "../components/framework/RutinesBanner";
import ProductsOfMonth from "../components/framework/ProductsOfMonth";
import PopularProducts from "../components/framework/PopularProducts";
import SkinTypeModal from "../components/framework/SkinTypeModal";

export function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    const isFirstOpen = !window.localStorage.getItem("hasUser");
    if (isFirstOpen) onOpen();
    window.localStorage.setItem("hasUser", true);
  }, []);

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
          <ProductsSearchBanner />
        </GridItem>
        <GridItem colSpan={2}>
          <RutinesBanner />
        </GridItem>
        <GridItem colSpan={{ base: 1, sm: 3, md: 3 }}>
          <ProductsOfMonth />
        </GridItem>
      </Grid>
      <SkinTypeModal
        openModal={onOpen}
        isModalOpen={isOpen}
        closeModal={onClose}
      />
    </>
  );
}
