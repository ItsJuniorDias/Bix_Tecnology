import styled from "styled-components";

export const Container = styled.div`
  width: 25%;
  height: 100svh;
  background-color: #ecedef;
  padding-top: 24px;
`;

export const Text = styled.h5`
  background-color: #dddddd;
  width: 80%;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  margin-right: 24px;
  border-color: #dddddd;
  border-width: 0px;
  border-radius: 8px;
  &:hover {
    background-color: #ffffff;
  }
`;

export const Content = styled.div`
  background-color: #dddddd;
  width: 80%;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 16px;
  border-color: #dddddd;
  border-width: 0px;
  border-radius: 8px;
  &:hover {
    background-color: #ffffff;
  }
`;
