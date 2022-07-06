import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Select,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export default function SkinTypeModal({ openModal, closeModal, isModalOpen }) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cuál es tu tipo de piel?</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Stack spacing={5} direction="column">
                <Checkbox colorScheme="pink">Seca</Checkbox>
                <Checkbox colorScheme="pink">Grasa</Checkbox>
                <Checkbox colorScheme="pink">Rosasea</Checkbox>
                <Checkbox colorScheme="pink">Mixta</Checkbox>
                <Checkbox colorScheme="pink">Sensible</Checkbox>
                <Checkbox colorScheme="pink">Escamosa</Checkbox>
                <Checkbox colorScheme="pink">Con Lunares</Checkbox>
              </Stack>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Cuál es tu objetivo?</FormLabel>
              <Stack spacing={3}>
                <Select size="md">
                  <option>Crear / Mejorar rutina</option>
                  <option>Comprar productos</option>
                  <option>Obtener información</option>
                  <option>Revisar Compatibilidad</option>
                </Select>
              </Stack>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="pink" mr={3} onClick={closeModal}>
              Save
            </Button>
            <Button onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
