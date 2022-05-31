import * as React from "react";
import { Box, Grid, GridItem, Center, VStack, Input, InputGroup, InputRightAddon, HStack, Text, Image, Wrap, WrapItem, Heading } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'

export function Home() {
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <GridItem colSpan={1}>
            <Box
              height={'full'}
              bgColor="gray.500"
              borderRadius={10}
              bgGradient='linear-gradient(294deg, #4158D0 0%, #C850C0 68%, #FFCC70 100%)'
            >
              <HStack>
                <Box width={'50%'} overflow='hidden'>
                  <Image 
                    src='./lady-doctor.png'
                    alt='doctor'
                    height={'280px'}
                    objectFit='cover'
                  />
                </Box>
                <Box width={'50%'} padding={5}>
                  <Text color='white'>Queremos ser tus aliados a la hora de cuidar tu piel</Text>
                  <Heading color='white'>
                    Somos SkinCare App
                  </Heading>
                </Box>
              </HStack>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box marginBottom={2} borderRadius={10}>
              <InputGroup>
                <Input placeholder='Buscador de Productos' size='md' />
                <InputRightAddon children={<SearchIcon />} />
              </InputGroup>
            </Box>
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
          </GridItem>
          {/* <GridItem colSpan={3}>
            <Box bgColor="gray.200" height={200} borderRadius={10}>
              <VStack
                spacing={4}
                align="center"
              ></VStack>
            </Box>
          </GridItem> */}
        </Grid>
    </>
  );
}
