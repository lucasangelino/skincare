import * as React from "react";
import {
  Container,
  Box,
  HStack,
  Input,
  Button,
  Text,
  Heading,
  Center,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Form from "../components/framework/Form";
import CompatibilityLoader from "../components/framework/ProductCompatibilityLoader";

export function ProductsCompatibility() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isResult, setIsResult] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [result, setResult] = React.useState([]);
  const [product1, setProduct1] = React.useState("");
  const [product2, setProduct2] = React.useState("");

  const handleSubmit = React.useCallback(() => {
    // compare();
    setIsLoading(true);
    const interval = setInterval(() => {
      setIsLoading(false);
      setIsResult(true);
    }, 2500);
  }, []);

  const compare = async (product1, product2) => {
    const response = await fetch(`http://localhost:8080/product/compare`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_ids: [product1, product2],
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  const handleProduct1Change = React.useCallback((event) => {
    setProduct1(event.target.value);
  });

  const handleProduct2Change = React.useCallback((event) => {
    setProduct2(event.target.value);
  }, []);

  return (
    <>
      <Container maxW="6xl" centerContent>
        <Heading marginBottom={10}>Compatibilidad entre Productos</Heading>
        <HStack spacing={0} width="80%" marginBottom={10}>
          <Input
            placeholder="Producto"
            size="md"
            borderLeftRadius={100}
            onChange={handleProduct1Change}
          />
          <Input
            placeholder="Producto"
            size="md"
            borderRightRadius={100}
            onChange={handleProduct2Change}
          />
        </HStack>
        <Button
          bgColor="#E2AFBE"
          width={"60%"}
          marginBottom={10}
          onClick={handleSubmit}
        >
          Revisar
        </Button>

        {isLoading && (
          <Center width={"100%"} my={10}>
            <CompatibilityLoader />
          </Center>
        )}

        {isResult && (
          <>
            <Box
              padding={10}
              width="80%"
              marginBottom={5}
              border="1px"
              borderRadius={10}
            >
              <HStack justify={"space-between"} spacing={10}>
                <Box
                  display={"flex"}
                  flexDirection="column"
                  alignItems="center"
                >
                  <Heading size="lg" marginBottom={5}>
                    Vitamina C
                  </Heading>
                  <Text>
                    La Vitamina C es un poderoso antioxidante que trabaja estimulando la producción de colageno en tu piel.
                    También ayuda a lugar contra finas arrugas, le da brillo y provee muchos beneficios más. Los expertos del Skincare 
                    también lo proclaman como uno de los mejores ingredientes antiage que podrías utilizar.
                  </Text>
                </Box>

                <Box
                  display={"flex"}
                  flexDirection="column"
                  alignItems="center"
                >
                  <Heading size="lg" marginBottom={5}>
                    Retinol
                  </Heading>
                  <Text>
                    El Retinol, comunmente llamado Vitamina A, es una vitamina soluble en grasa, es un exfoliante remarcable
                    ya que puede ser utilizado en pieles secas sin dañarla, siempre en cuando no se use en exceso, dejando tu piel radiante.
                  </Text>
                </Box>
              </HStack>
            </Box>

            <Heading color="green" marginBottom={3}>
              Productos compatibles
            </Heading>
            <Text color="#065c06" padding={2} borderRadius={2} my={10}>
              Estos ingredientes son compatibles quimicamente. Puedes
              combinarlos en tus rutinas
            </Text>

            <Button bgColor="#E2AFBE" width={"60%"} marginBottom={10}>
              <RouterLink to={"/tienda"} width={"100%"}>
                Comprar
              </RouterLink>
            </Button>
          </>
        )}
      </Container>
    </>
  );
}
