import React from "react";
import { format } from "date-fns";

import {
  Container,
  Content,
  Text,
  ListContent,
  ListItemContent,
  ListItemDate,
  ListItemIndustry,
  TruncatedH5,
} from "./styles";

import { mockJson } from "../../data";

const MAX_LENGTH = 15;

export const List = () => {
  // const renderItem = (item: Item): React.ReactNode => (
  //   <li key={item.date}>
  //     <h2>{item.amount}</h2>
  //   </li>
  // );

  return (
    <Container>
      <Content>
        <Text>Conta</Text>
        <Text>Industria</Text>
        <Text>Data</Text>
        <Text>Quantia</Text>
        <Text>Tipo de transação</Text>
        <Text>Moeda</Text>
        <Text>Estado</Text>
      </Content>

      <ListContent>
        <ListItemContent>
          <ul>
            {mockJson.map((item, index) => {
              const truncatedText =
                item?.account?.length > MAX_LENGTH
                  ? item?.account?.substring(0, MAX_LENGTH) + "..."
                  : item?.account;

              return (
                <li key={index}>
                  <TruncatedH5>{truncatedText}</TruncatedH5>
                </li>
              );
            })}
          </ul>
        </ListItemContent>

        <ListItemIndustry>
          <ul>
            {mockJson.map((item, index) => {
              const truncatedText =
                item?.industry?.length > MAX_LENGTH
                  ? item?.industry?.substring(0, MAX_LENGTH) + "..."
                  : item?.industry;

              return (
                <li key={index}>
                  <TruncatedH5>{truncatedText}</TruncatedH5>
                </li>
              );
            })}
          </ul>
        </ListItemIndustry>

        <ListItemDate>
          <ul>
            {mockJson.map((item, index) => {
              const timestampString = item.date;
              const dateObject = new Date(Number(timestampString));

              const converterNewDate = new Date(dateObject).toDateString();

              return (
                <li key={index}>
                  <TruncatedH5>{converterNewDate}</TruncatedH5>
                </li>
              );
            })}
          </ul>
        </ListItemDate>

        {/* <ul>
          {mockJson.map((item, index) => (
            <li key={index}>
              <h5>{item.amount}</h5>
            </li>
          ))}
        </ul>

        <ul>
          {mockJson.map((item, index) => (
            <li key={index}>
              <h5>{item.state}</h5>
            </li>
          ))}
        </ul>

        <ul>
          {mockJson.map((item, index) => (
            <li key={index}>
              <h5>{item.currency}</h5>
            </li>
          ))}
        </ul> */}
      </ListContent>
    </Container>
  );
};
