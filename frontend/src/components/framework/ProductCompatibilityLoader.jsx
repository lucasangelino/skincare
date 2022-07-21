import React from "react";
import { Spinner } from "@chakra-ui/react";

const CompatibilityLoader = (props) => (
  <Spinner
    thickness="4px"
    speed="0.65s"
    emptyColor="gray.200"
    color="#e2afbe"
    size="xl"
  />
);

export default CompatibilityLoader;
