import React from "react";
import { Text, Box, Heading, Button } from "@chakra-ui/react";

export default function RutinesBanner() {
    return (
        <Box height={'100%'} padding={10} borderRadius={10} bgColor={'darkgoldenrod'}>
            <Heading size={'md'} color='#fff'>Mis rutinas</Heading>
            <Text fontSize={'md'} color='#fff'>
                Parece que no tienes rutinas creadas, ¿Quieres crear una?
            </Text>
            <Button>Crear Rutina</Button>
        </Box>
    )
}