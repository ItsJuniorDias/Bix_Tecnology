import React from "react";

import { Container, Content, Text, ListContent } from "./styles";
import { mockJson } from "../../data";

interface Item {
  date: number;
  amount: string;
  transaction_type?: string;
  currency?: string;
  account?: string;
  industry?: string;
  state?: string;
}

export const List = () => {
  const renferItrem = (item: Item): React.ReactNode => (
    <li key={item.date}>
      <h2>{item.amount}</h2>
    </li>
  );

  return (
    <Container>
      <Content>
        <Text>Data</Text>
        <Text>Quantia</Text>
        <Text>Tipo de transação</Text>
        <Text>Conta</Text>
        <Text>Moeda</Text>
        <Text>Estad o</Text>
      </Content>

      <ListContent>
        {/* <ul>
          {mockJson.map((item, index) => (
            <li key={index}>
              <h5>{item.}</h5>
            </li>
          ))}
        </ul> */}
        ``
        <ul>
          {mockJson.map((item, index) => (
            <li key={index}>
              <h5>{item.industry}</h5>
            </li>
          ))}
        </ul>
        <ul>
          {mockJson.map((item, index) => (
            <li key={index}>
              <h5>{item.amount}</h5>
            </li>
          ))}
        </ul>
        <ul>
          {mockJson.map((item, index) => (
            <li key={index}>
              <h5>{item.currency}</h5>
            </li>
          ))}
        </ul>
        <ul>
          {mockJson.map((item, index) => (
            <li key={index}>
              {/* Safely access item properties */}
              <h5>{item.currency}</h5>
              {/* {item.transaction_type && <p>Type: {item.transaction_type}</p>} */}
              {/* Render other properties as needed */}
            </li>
          ))}
        </ul>
      </ListContent>
    </Container>
  );
};
