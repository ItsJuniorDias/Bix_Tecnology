import React from "react";
import Search from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

import { Container, Filter, Text, Input, Content } from "./styles";

export const Header = () => {
  return (
    <>
      <Content>
        <Container>
          <Search
            sx={{
              color: "#81858d",
            }}
          />

          <Input placeholder="Pesquisar ordens..." />
        </Container>

        <Filter onClick={() => console.log("CLIQUEI")}>
          <FilterListIcon
            sx={{
              color: "#81858d",
            }}
          />
          <Text>Filtro</Text>
        </Filter>
      </Content>
    </>
  );
};
