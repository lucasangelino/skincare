import React from "react";
import {
    Box,
    VStack,
    HStack,
    Text,
    Image,
    Wrap,
    WrapItem,

} from "@chakra-ui/react";

export default function ProductsOfMonth() {
    return (
        <Box
              bgGradient='linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)'
              borderRadius={10}
              padding={4}
            >
              <Box>
                <VStack>
                  <Text>Productos del mes</Text>
                  <HStack spacing={10}>
                    // Product Card 1
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

                    // Product Card 2
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

                    // Product Card 3
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
                  </HStack>
                </VStack>
              </Box>
            </Box>
    )
}