import * as React from "react";
import {
  Grid,
  GridItem,
  Container,
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Form({ onSubmit }) {
  const [keyword, setKeyword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ keyword });
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
    console.log(keyword);
  };

  return (
    <Box width={"100%"}>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement
            borderRadius={3}
            bgColor={"#11AAE1"}
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type="tel"
            placeholder="Protector Solar"
            onChange={handleChange}
            paddingLeft={12}
          />
        </InputGroup>
      </form>
    </Box>
  );
}

export default React.memo(Form);
