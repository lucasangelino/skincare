import React from "react";
import {
  Stack,
  Checkbox,
  Heading,
  Grid,
  GridItem,
  VStack,
  Text,
  Box,
  Container,
  Button,
  HStack,
  Badge,
} from "@chakra-ui/react";

export function RutineMaker() {
  const [showExfoliante, setShowExfoliante] = React.useState(false);
  const [showHumectante, setShowHumectante] = React.useState(true);
  const [showLimpiador, setShowLimpiador] = React.useState(true);
  const [showProtector, setShowProtector] = React.useState(false);
  const [showSerum, setShowSerum] = React.useState(true);
  const [showAntiage, setShowAntiage] = React.useState(false);
  const [showImperfecciones, setShowImperfecciones] = React.useState(false);

  React.useEffect(() => {
    getRutine();
  }, []);

  const getRutine = async () => {
    const response = await fetch("http://localhost:8080/ingredient/overview", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userId: "1",
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <Container maxWidth="6xl" centerContent>
        <Box border={"1px solid #E2AFBE"} borderRadius={10} padding={5}>
          Debajo veras todas las categorias de productos que te podemos ofrecer.
          Dentro de cada una veras los diferentes productos en una escala de
          color. Elige todos los productos{" "}
          <Badge variant="outline" colorScheme="green">
            verdes
          </Badge>{" "}
          para asegurarte la máxima compatibilidad. Los productos que sean{" "}
          <Badge variant="outline" colorScheme="yellow">
            amarillos
          </Badge>{" "}
          possen una compatibilidad aceptable, es decir que funcionaran pero no
          podrás sacar el máximo poder. Por ultimo, evita los productos{" "}
          <Badge variant="outline" colorScheme="red">
            rojos
          </Badge>{" "}
          ya que podrían neutralizar la efectividad de tu rutina.
        </Box>
        <Heading>Selecciona tus categorias</Heading>
        <Stack spacing={5} direction="row" marginTop={10}>
          <Checkbox
            colorScheme="pink"
            onChange={() => setShowExfoliante(!showExfoliante)}
          >
            Exfoliante
          </Checkbox>
          <Checkbox
            colorScheme="pink"
            defaultChecked
            onChange={() => setShowHumectante(!showHumectante)}
          >
            Humectante
          </Checkbox>
          <Checkbox
            colorScheme="pink"
            defaultChecked
            onChange={() => setShowSerum(!showSerum)}
          >
            Serum
          </Checkbox>
          <Checkbox
            colorScheme="pink"
            defaultChecked
            onChange={() => setShowLimpiador(!showLimpiador)}
          >
            Limpiador
          </Checkbox>
          <Checkbox
            colorScheme="pink"
            onChange={() => setShowProtector(!showProtector)}
          >
            Protector Solar
          </Checkbox>
          <Checkbox
            colorScheme="pink"
            onChange={() => setShowAntiage(!showAntiage)}
          >
            Antiage
          </Checkbox>
          <Checkbox
            colorScheme="pink"
            onChange={() => setShowImperfecciones(!showImperfecciones)}
          >
            Anti imperfecciones
          </Checkbox>
        </Stack>

        <Grid
          templateColumns="repeat(8, 1fr)"
          gap={2}
          marginTop={10}
          minH={"500px"}
        >
          {/* Exfoliante */}
          <GridItem
            colSpan={1}
            bgColor={"#E2AFBE"}
            height={"100%"}
            textAlign="center"
            hidden={!showExfoliante}
            width={"200px"}
            borderRadius={10}
            padding={2}
          >
            <Heading size={"md"}>Exfoliante</Heading>
            <VStack margin={2}>
              <Box bgColor={"green.400"} borderRadius={2} width={"100%"}>
                <Text>Chronos Exfoliante Antiseñales</Text>
              </Box>

              <Box bgColor={"yellow.400"} borderRadius={2} width={"100%"}>
                <Text>Sérum facial con pha</Text>
              </Box>

              <Box bgColor={"red.400"} borderRadius={2} width={"100%"}>
                <Text>Sérum facial con niacinamida</Text>
              </Box>
            </VStack>
          </GridItem>
          {/* Humectante */}
          <GridItem
            colSpan={1}
            bgColor={"#E2AFBE"}
            height={"100%"}
            textAlign="center"
            hidden={!showHumectante}
            width={"200px"}
            borderRadius={10}
            padding={2}
          >
            <Heading size={"md"}>Humectante</Heading>
            <VStack margin={2}>
              <Box bgColor={"green.400"} borderRadius={2} width={"100%"}>
                <Text>Chronos Creme De Dia Para Rosto Pele Seca A Normal</Text>
              </Box>
            </VStack>
          </GridItem>
          {/* Serum */}
          <GridItem
            colSpan={1}
            bgColor={"#E2AFBE"}
            height={"100%"}
            textAlign="center"
            hidden={!showSerum}
            width={"200px"}
            borderRadius={10}
            padding={2}
          >
            <Heading size={"md"}>Serum</Heading>
            <VStack margin={2}>
              <Box bgColor={"green.400"} borderRadius={2} width={"100%"}>
                <Text>Sérum facial con pha</Text>
              </Box>

              <Box bgColor={"green.400"} borderRadius={2} width={"100%"}>
                <Text>Sérum facial con niacinamida</Text>
              </Box>
              <Box bgColor={"yellow.400"} borderRadius={2} width={"100%"}>
                <Text>Serum Vitamina C</Text>
              </Box>
              <Box bgColor={"yellow.400"} borderRadius={2} width={"100%"}>
                <Text>Serum Ácido Hialurónico</Text>
              </Box>
              <Box bgColor={"yellow.400"} borderRadius={2} width={"100%"}>
                <Text>Fine Fairness Brightening Serum</Text>
              </Box>
              <Box bgColor={"red.400"} borderRadius={2} width={"100%"}>
                <Text>TÓNICO EXFOLIANTE MA</Text>
              </Box>
              <Box bgColor={"red.400"} borderRadius={2} width={"100%"}>
                <Text>BOOSTER VIT-C/FERÚLICO</Text>
              </Box>
            </VStack>
          </GridItem>
          {/* Limpiador */}
          <GridItem
            colSpan={1}
            bgColor={"#E2AFBE"}
            height={"100%"}
            textAlign="center"
            hidden={!showLimpiador}
            width={"200px"}
            borderRadius={10}
            padding={2}
          >
            <Heading size={"md"}>Limpiador</Heading>
            <VStack margin={2}>
              <Box bgColor={"green.400"} borderRadius={2} width={"100%"}>
                <Text>Cleansing Cream</Text>
              </Box>

              <Box bgColor={"red.400"} borderRadius={2} width={"100%"}>
                <Text>Effaclear limpiador facial</Text>
              </Box>
            </VStack>
          </GridItem>
          {/* Protector Solar */}
          <GridItem
            colSpan={1}
            bgColor={"#E2AFBE"}
            height={"100%"}
            textAlign="center"
            hidden={!showProtector}
            width={"200px"}
            borderRadius={10}
            padding={2}
          >
            <Heading size={"md"}>Protector Solar</Heading>
            <VStack margin={2}>
              <Box bgColor={"green.400"} borderRadius={2} width={"100%"}>
                <Text>Protector Solar 50 FPS Ultra Mate</Text>
              </Box>

              <Box bgColor={"green.400"} borderRadius={2} width={"100%"}>
                <Text>UV Face Soothing Sensitive Cream Spf50+</Text>
              </Box>

              <Box bgColor={"yellow.400"} borderRadius={2} width={"100%"}>
                <Text>Sun Fresh Derm Care FPS70</Text>
              </Box>
            </VStack>
          </GridItem>
          {/* Antiage */}
          <GridItem
            colSpan={1}
            bgColor={"#E2AFBE"}
            height={"100%"}
            textAlign="center"
            hidden={!showAntiage}
            width={"200px"}
            borderRadius={10}
            padding={2}
          >
            <Heading size={"md"}>Antiage</Heading>
            <VStack margin={2}>
              <Box bgColor={"green.400"} borderRadius={2} width={"100%"}>
                <Text>Chronos Firmeza Y Radiancia +45</Text>
              </Box>
              <Box bgColor={"green.400"} borderRadius={2} width={"100%"}>
                <Text>Chronos Gel Crema Antiseñales +45</Text>
              </Box>
              <Box bgColor={"red.400"} borderRadius={2} width={"100%"}>
                <Text>Reparador Anti-señales</Text>
              </Box>
            </VStack>
          </GridItem>
          {/* Anti imperfecciones */}
          <GridItem
            colSpan={1}
            bgColor={"#E2AFBE"}
            height={"100%"}
            textAlign="center"
            hidden={!showImperfecciones}
            width={"200px"}
            borderRadius={10}
            padding={2}
          >
            <Heading size={"md"}>Anti Imperfecciones</Heading>
            <VStack margin={2}>
              <Box bgColor={"green.400"} borderRadius={2} width={"100%"}>
                <Text>Tratamiento Antiimperfecciones Vichy</Text>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
        <Button marginTop={10} bgColor={"#E2AFBE"}>
          Crear rutina
        </Button>
      </Container>
    </>
  );
}
