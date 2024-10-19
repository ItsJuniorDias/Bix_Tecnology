import React from "react";
import Search from "@mui/icons-material/Search";
import { Container, Text, Input } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Search
        sx={{
          color: "#81858d",
        }}
      />

      <Input placeholder="Pesquisar ordens..." />
    </Container>
  );
};
