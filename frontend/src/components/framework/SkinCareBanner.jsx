import React from 'react';
import {
    Box,
    HStack,
    VStack,
    Text,
    Image,
    Heading,
    Wrap,
} from '@chakra-ui/react';

export default function SkinCareBanner() {
    return (
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
    )
}