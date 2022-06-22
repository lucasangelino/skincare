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
  const [isLoading, setIsLoading] = React.useState(false);
  const [isResult, setIsResult] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [result, setResult] = React.useState([]);
  const [product1, setProduct1] = React.useState("");
  const [product2, setProduct2] = React.useState("");

  const handleSubmit = React.useCallback(() => {
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
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        capture="environment"
      />
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
          colorScheme="blue"
          width={"60%"}
          marginBottom={10}
          onClick={handleSubmit}
        >
          Revisar
        </Button>

        {isLoading && (
          <Box width={"500px"}>
            <CompatibilityLoader />
          </Box>
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
                    Vitamin C is a powerful antioxidant that works to stimulate
                    collagen production in your skin. It also fights fine lines,
                    brightens your complexion, and provides a host of other
                    benefits. Skincare experts also tout it as one of the best
                    anti-aging ingredients you could ever use.
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
                    Retinol, also called vitamin A1, is a fat-soluble vitamin in
                    the vitamin A family[1] found in food and used as a dietary
                    supplement.
                  </Text>
                </Box>
              </HStack>
            </Box>
            <Heading color="green" marginBottom={3}>
              Productos compatibles
            </Heading>
            <Text color="#065c06" padding={2} borderRadius={2}>
              Estos ingredientes son compatibles quimicamente. Puedes
              combinarlos en tus rutinas
            </Text>
          </>
        )}
      </Container>
    </>
  );
}
