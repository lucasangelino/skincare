import * as React from "react";
import {
  Container,
  Box,
  HStack,
  Input,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import Form from "../components/framework/Form";
import CompatibilityLoader from "../components/framework/ProductCompatibilityLoader";

export function ProductsCompatibility() {
  const [isResult, setIsResult] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  
  const handleSubmit = React.useCallback(() => {
    setIsLoading(true);
    const interval = setInterval(() => {
      setIsResult(true);
      setIsLoading(false);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container maxW="6xl" centerContent>
        <Heading marginBottom={10}>Compatibilidad entre Ingredientes</Heading>
        <HStack spacing={0} width='80%' marginBottom={10}>
          <Input placeholder='Ingrediente' size='md' borderLeftRadius={100} />
          <Input placeholder='Ingrediente' size='md' borderRightRadius={100} />
        </HStack>
        <Button colorScheme='blue' width={'60%'} marginBottom={10} onClick={handleSubmit}>Revisar</Button>

        {
          isLoading && (
            <Box width={'500px'}>
              <CompatibilityLoader />
            </Box>
          )
        }
        
        {
          isResult && (
            <>
            <Box padding={10} width='80%' marginBottom={5} border='1px' borderRadius={10}>
              <HStack justify={'space-between'} spacing={10}>
                <Box display={'flex'} flexDirection='column' alignItems='center' >
                  <Heading size='lg' marginBottom={5}>Cloruro</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente eligendi laudantium. Maxime blanditiis quisquam totam 
                  </Text>
                </Box>

                <Box display={'flex'} flexDirection='column' alignItems='center'>
                  <Heading size='lg' marginBottom={5}>Serum</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente eligendi laudantium. Maxime blanditiis quisquam totam 
                  </Text>
                </Box>
              </HStack>
            </Box>
            <Heading color='green' marginBottom={3}>Ingredientes compatibles 100%</Heading>
            <Text color='#065c06' padding={2} borderRadius={2}>
              Estos ingredientes son compatibles quimicamente. Puedes combinarlos en tus rutinas
            </Text>
        </>
          )
        }
      </Container>
    </>
  );
}
