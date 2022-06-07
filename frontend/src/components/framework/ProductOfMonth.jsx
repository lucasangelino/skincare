import React from 'react'
import {
    Box,
    VStack,
    HStack,
    Text,
    Image,
    Wrap,
    WrapItem,
    Heading,
} from '@chakra-ui/react'

export default function ProductOfMonth() {
    return (
        <Box
                      bgColor="#fff"
                      padding={2}
                      width={200}  
                      borderRadius={10}                
                    >
                      <VStack spacing={2} justify='center' align={'center'}>
                      <Text as='u' fontSize={12}
                        align='center'
                      >
                        Hidratante Neutrogena Hydro Boost
                      </Text>
                      <Image
                        height={90}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9kgSsqP_GGkHLY287QQd21hMR_d2qUDCSjQ&usqp=CAU" alt="Hidratante Neutrogena Hydro Boost" 
                      />
                      <HStack sapcing={2}>
                        <Wrap>
                          <WrapItem>
                            <Box bgColor={'#785DD1'} padding={1} borderRadius={50}>
                              <Text fontSize={10}>Hidratante</Text>
                            </Box>
                          </WrapItem>
                          <WrapItem>
                            <Box bgColor={'#785DD1'} padding={1} borderRadius={50}>
                              <Text fontSize={10}>Piel Grasa</Text>
                            </Box>
                          </WrapItem>
                        </Wrap>
                      </HStack>
                      </VStack>
                    </Box>
    )
}