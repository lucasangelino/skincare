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
	Image,
} from "@chakra-ui/react";

export function RutineMaker() {
	const [showExfoliante, setShowExfoliante] = React.useState(false);
	const [showHumectante, setShowHumectante] = React.useState(true);
	const [showLimpiador, setShowLimpiador] = React.useState(true);
	const [showProtector, setShowProtector] = React.useState(true);
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
						onChange={() => setShowLimpiador(!showLimpiador)}
					>
						Limpiador
					</Checkbox>
					<Checkbox
						colorScheme="pink"
						defaultChecked
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
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"green.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://incidecoder-content.storage.googleapis.com/96c14112-d790-4f94-a45a-8ba4e05b7253/products/natura-chronos-60-noite/natura-chronos-60-noite_front_photo_300x300@2x.webp' />
								<Text>Chronos 60+ Noche</Text>
							</Box>
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"green.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/ngn/ngn11122/v/6.jpg' />
								<Text>Serum Clarificante de Neutrogena</Text>
							</Box>
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"yellow.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://cdn.shopify.com/s/files/1/0073/0808/3298/products/IMG_0110_2_600x_082ac8e2-d415-4cd0-aa7c-599ff5a3916c_600x.jpg?v=1652704141' />
								<Text>Booster Vitamina C + Acido Ferúlico</Text>
							</Box>
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"red.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://cdn.shopify.com/s/files/1/0073/0808/3298/products/IMG_9793_F_600x.jpg?v=1638283808' />
								<Text>Tónico Exfoliante c/ Ácido Mandélico</Text>
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
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"green.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://incidecoder-content.storage.googleapis.com/6e219ddc-6cfa-401e-aa05-5b73ed9b648f/products/natura-creme-de-dia-para-rosto-pele-seca-a-normal/natura-creme-de-dia-para-rosto-pele-seca-a-normal_front_photo_300x300@2x.webp' />
								<Text>Chronos Crema de Dia</Text>
							</Box>
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"green.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://farmacityar.vteximg.com.br/arquivos/ids/220438-1000-1000/225138_serum-facial-eucerin-dermpure-oil-control-x-40-ml_imagen-1.jpg?v=637831373584570000' />
								<Text>Serum Antiacne Eucerin</Text>
							</Box>
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"yellow.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://farmacityar.vteximg.com.br/arquivos/ids/166592-600-600/115857_gel-crema-hidratante-acniben-ts-repair-x-40-ml_imagen-1.jpg?v=636670341862070000' />
								<Text>Gel Crema Acniben Repair</Text>
							</Box>
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"red.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://farmacityar.vteximg.com.br/arquivos/ids/222275-600-600/215136_crema-facial-antioxidante-avene-dia-x-30-ml_imagen-2.jpg?v=637877052309300000' />
								<Text>Crema Facial Antioxidante Avene</Text>
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
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"green.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://farmacityar.vteximg.com.br/arquivos/ids/203655-600-600/200398_eucerin-dermopure-oil-control-gel-limpiador-200398_imagen-1.png?v=637375919984070000' />
								<Text>Gel Limpiador Dermopure</Text>
							</Box>


							<Box boxShadow='dark-lg' rounded='sm' bgColor={"yellow.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://cdn.shopify.com/s/files/1/0073/0808/3298/products/IMG_0099_600x_51cfa6d9-5d6f-4065-8570-d9890c922346_600x.jpg?v=1636555670' />
								<Text>Limpiador c/ Ácido Citrico</Text>
							</Box>

							<Box boxShadow='dark-lg' rounded='sm' bgColor={"yellow.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://farmacityar.vteximg.com.br/arquivos/ids/220428-600-600/221613_serum-facial-eucerin-hyaluron-filler-pore-minimizer-x-30-ml_imagen-1.jpg?v=637831323302070000' />
								<Text>Sérum Facial Ultraligero Eucerin</Text>
							</Box>
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"red.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://farmacityar.vteximg.com.br/arquivos/ids/220364-600-600/216552_espuma-micelar-eucerin-dermatoclean-x-150-ml_imagen-1.jpg?v=637831184640730000' />
								<Text>Espuma Micelar de Limpieza Dermatoclean</Text>
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

							<Box boxShadow='dark-lg' rounded='sm' bgColor={"green.400"} width={"100%"} >
								<Image
									boxSize={"300px"}
									borderRadius='full'
									src='https://incidecoder-content.storage.googleapis.com/79b47541-1f67-448e-b6c3-3b4b4d58859b/products/nivea-sun-uv-face-soothing-sensitive-cream-spf50/nivea-sun-uv-face-soothing-sensitive-cream-spf50_front_photo_300x300@2x.webp' />
								<Text>Protector UV FPS50+ </Text>
							</Box>

							<Box boxShadow='dark-lg' rounded='sm' bgColor={"green.400"} width={"100%"} >
								<Image
									boxSize={"300px"}
									borderRadius='full'
									src='https://http2.mlstatic.com/D_NQ_NP_2X_610977-MLA29556228697_032019-F.webp' />
								<Text>Protector UV FPS70+ de Neutrogena</Text>
							</Box>

							<Box boxShadow='dark-lg' rounded='sm' bgColor={"yellow.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://farmacityar.vteximg.com.br/arquivos/ids/183183-600-600/135868_protector-fps-50-con-vitamina-e-resistente-al-agua-x-250-ml_imagen-1.jpg?v=636831510820470000' />
								<Text>Dermaglós Protector Solar FPS 50</Text>
							</Box>

							<Box boxShadow='dark-lg' rounded='sm' bgColor={"yellow.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://incidecoder-content.storage.googleapis.com/89fc38ae-c2be-45fa-8ad6-a5fe30597094/products/natura-chronos-firmeza-y-radiancia-45/natura-chronos-firmeza-y-radiancia-45_front_photo_300x300@1x.webp' />
								<Text>Chronos Firmeza Radiancia +45</Text>
							</Box>

							<Box boxShadow='dark-lg' rounded='sm' bgColor={"red.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://incidecoder-content.storage.googleapis.com/76234890-7da5-4ee6-abba-1aaa840614a1/products/natura-chrono-60-dia/natura-chrono-60-dia_front_photo_300x300@2x.webp ' />
								<Text>Chronos 60+ Dia</Text>
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
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"green.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://farmacityar.vteximg.com.br/arquivos/ids/198157-600-600/215779_serum-antiedad-la-roche-posay-retinol-b3-x-30-ml_imagen-1.jpg?v=637243677263470000' />
								<Text>Serum Antiedad</Text>
							</Box>
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"green.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://farmacityar.vteximg.com.br/arquivos/ids/199810-600-600/137988_fluido-antiedad-redermic-hyalu-c-piel-normal-a-mixta-x-40-ml_imagen-1.jpg?v=637280183648970000' />
								<Text>Crema Antiedad La Roche-Posay</Text>
							</Box>
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"yellow.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://incidecoder-content.storage.googleapis.com/afcd6e30-6b6c-4e94-b7c7-dc8ab9dab046/products/natura-chronos-exfoliante-antisenales/natura-chronos-exfoliante-antisenales_front_photo_300x300@2x.webp' />
								<Text>Chronos Crema Humectante Antiage</Text>
							</Box>
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"yellow.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://farmacityar.vteximg.com.br/arquivos/ids/220934-600-600/216308_crema-facial-antiedad-isdin-glicoisdin-8-_-x-50-ml_imagen-1.jpg?v=637841595169630000' />
								<Text>Crema Facial Antiedad Isdin</Text>
							</Box>
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"red.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://farmacityar.vteximg.com.br/arquivos/ids/222275-600-600/215136_crema-facial-antioxidante-avene-dia-x-30-ml_imagen-2.jpg?v=637877052309300000' />
								<Text>Crema Facial Antioxidante Avene</Text>
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
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"green.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://pedidosfarma.vteximg.com.br/arquivos/ids/177751-300-300/Vansame-Gs-Tratamiento-De-Pieles-Acneicas-Gel-30g-.jpg?v=637396009208000000' />
								<Text>Tratamiento Antiacne de Vansame</Text>
							</Box>
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"yellow.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://farmacityar.vteximg.com.br/arquivos/ids/190900-1000-1000/206597_serum-efecto-peeling-eucerin-hyaluron-filler-noche-x-30-ml_imagen-1.jpg?v=637080383060800000' />
								<Text>Sérum Efecto Peeling Noche Eucerin</Text>
							</Box>
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"yellow.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://farmacityar.vteximg.com.br/arquivos/ids/222281-600-600/215138_crema-contorno-de-ojos-antioxidante-avene-alisadora-x-15-ml_imagen-2.jpg?v=637877127953230000' />
								<Text>Crema Contorno de Ojos Antioxidante Avene</Text>
							</Box>
							<Box boxShadow='dark-lg' rounded='sm' bgColor={"red.400"} width={"100%"} >
								<Image
									borderRadius='full'
									src='https://incidecoder-content.storage.googleapis.com/afcd6e30-6b6c-4e94-b7c7-dc8ab9dab046/products/natura-chronos-exfoliante-antisenales/natura-chronos-exfoliante-antisenales_front_photo_300x300@2x.webp' />
								<Text>Chronos Exfoliante Antiseñales </Text>
							</Box>
						</VStack>
					</GridItem>
				</Grid>
				<Button marginTop={10} colorScheme={"blue"}>
					Crear rutina
				</Button>
			</Container>
		</>
	);
}
