import React from 'react'
import { Box, Heading, VStack, Text } from '@chakra-ui/react';

export default function PopularProducts() {
    return (
        <Box border={'1px'} borderRadius={10} padding={2}>
            <VStack>
                <Heading size='md'>Productos mas buscados</Heading>
                <Text fontSize={'lg'}>Producto 1</Text>
                <Text fontSize={'lg'}>Producto 2</Text>
                <Text fontSize={'lg'}>Producto 3</Text>
                <Text fontSize={'lg'}>Producto 4</Text>
                <Text fontSize={'lg'}>Producto 5</Text>
                <Text fontSize={'lg'}>Producto 6</Text>
            </VStack>
        </Box>
    )
}