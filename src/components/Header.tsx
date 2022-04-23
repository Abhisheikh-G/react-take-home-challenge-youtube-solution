import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = ({ children }) => {
  return (
    <Box
      position="static"
      fontSize="large"
      borderBottomWidth="1px"
      boxShadow="md"
      p={5}
      color="blue.400"
      height="4rem"
      mb={8}
    >
      {children}
    </Box>
  );
};

export default Header;
