import *  as React from 'react'
import { Container, HStack, Box, VStack, Text } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Layout({ children }) {
  return (
    <Container maxW='container.xl'>
        <HStack spacing={0}>
            <Box width={'30%'} h={'100vh'}>
                <VStack>
                    <HStack w={'100%'} p={2} direction={'row'} justify={'space-between'}>
                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        <HamburgerIcon w={8} h={8} color="red.500" />
                    </HStack>
                    <Input placeholder='Search chat' />
                    <Divider />
                    <VStack w={'100%'}>
                        <HStack w={'100%'} p={2} direction={'row'} >
                            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                            <Text>Christian Nwamba</Text>

                        </HStack>
                    </VStack>
                </VStack>
            </Box>
            <Box width={'70%'} h={'100vh'}></Box>
        </HStack>
      {/* {children} */}
    </Container>
  )
}
