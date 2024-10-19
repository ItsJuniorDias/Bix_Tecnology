import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import React from "react";

import { Container, Text, Content } from "./styles";

export const Dashboard = () => {
  return (
    <Container>
      <Content onClick={() => console.log("CLIQUEI")}>
        <HomeIcon
          sx={{
            color: "#81858d",
          }}
        />
        <Text>Home</Text>
      </Content>

      <Content onClick={() => console.log("CLIQUEI")}>
        <AssignmentIcon
          sx={{
            color: "#81858d",
          }}
        />

        <Text>Orders</Text>
      </Content>
    </Container>
  );
};
