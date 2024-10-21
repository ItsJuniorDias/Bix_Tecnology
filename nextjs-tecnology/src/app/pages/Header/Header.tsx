import React, { useState } from "react";
import Search from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

import { Container, Filter, Text, Input, Content } from "./styles";

interface HeaderProps {
  value: string;
  onChange: (item: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Header = ({ value, onChange }: HeaderProps) => {
  return (
    <>
      <Content>
        <Container>
          <Search
            sx={{
              color: "#81858d",
            }}
          />

          <Input
            value={value}
            type="text"
            onChange={(props) => onChange(props)}
            placeholder="Pesquisar ordens..."
          />
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
