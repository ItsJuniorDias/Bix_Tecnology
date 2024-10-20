import React, { useState } from "react";

import { Button } from "../../components";

import {
  Container,
  Content,
  Text,
  ListContent,
  ListItemContent,
  ListItemDate,
  ListItemIndustry,
  TruncatedH5,
  ListItemAmount,
  ListItemState,
  ListItemTransaction,
  ListItemCurrency,
  TextIndustry,
  TextDate,
  TextAmount,
  TextTransaction,
  ContentButton,
} from "./styles";

import { mockJson } from "../../data";

const MAX_LENGTH = 15;

export const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockJson.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(mockJson.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <Container>
        <Content>
          <Text>Conta</Text>
          <TextIndustry>Industria</TextIndustry>
          <TextDate>Data</TextDate>
          <TextAmount>Quantia</TextAmount>
          <TextTransaction>Tipo de transação</TextTransaction>
          <Text>Moeda</Text>
          <Text>Estado</Text>
        </Content>

        <ListContent>
          <ListItemContent>
            <ul>
              {currentItems.map((item, index) => {
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
              {currentItems.map((item, index) => {
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
              {currentItems.map((item, index) => {
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

          <ListItemAmount>
            <ul>
              {currentItems.map((item, index) => {
                const formattedAmount = (item.amount / 100)
                  .toFixed(2)
                  .replace(".", ",");

                return (
                  <li key={index}>
                    <TruncatedH5>{formattedAmount}</TruncatedH5>
                  </li>
                );
              })}
            </ul>
          </ListItemAmount>

          <ListItemTransaction>
            <ul>
              {currentItems.map((item, index) => (
                <li key={index}>
                  <TruncatedH5>{item.transaction_type}</TruncatedH5>
                </li>
              ))}
            </ul>
          </ListItemTransaction>

          <ListItemCurrency>
            <ul>
              {currentItems.map((item, index) => (
                <li key={index}>
                  <TruncatedH5>{item.currency}</TruncatedH5>
                </li>
              ))}
            </ul>
          </ListItemCurrency>

          <ListItemState>
            <ul>
              {currentItems.map((item, index) => {
                return (
                  <li key={index}>
                    <TruncatedH5>{item.state}</TruncatedH5>
                  </li>
                );
              })}
            </ul>
          </ListItemState>
        </ListContent>

        <ContentButton>
          <Button
            onClick={handlePrevious}
            text="Anterior"
            isIcon
            disabled={currentPage === 1}
          />

          <Button
            onClick={handleNext}
            text="Próximo"
            disabled={currentPage === totalPages}
          />
        </ContentButton>
      </Container>
    </>
  );
};
