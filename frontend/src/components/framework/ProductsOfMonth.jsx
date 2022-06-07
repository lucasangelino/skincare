import React from "react";
import {
    Box,
    VStack,
    HStack,
    Heading,

} from "@chakra-ui/react";

import ProductOfMonth from './ProductOfMonth'

export default function ProductsOfMonth() {
    return (
        <Box
              bgGradient='linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)'
              borderRadius={10}
              padding={4}
              maxW={{base: '328px', sm: '100%'}}
            >
              <Box overflow='scroll' overflowY={'auto'} className='popularCarousel'>
                <VStack>
                  <Heading size={'md'}>Boxes del mes</Heading>
                  <HStack spacing={10} padding={10}>
                    <ProductOfMonth />
                    <ProductOfMonth />
                    <ProductOfMonth />
                    <ProductOfMonth />
                    <ProductOfMonth />
                    <ProductOfMonth />
                    <ProductOfMonth />
                    <ProductOfMonth />
                  </HStack>
                </VStack>
              </Box>
            </Box>
    )
}