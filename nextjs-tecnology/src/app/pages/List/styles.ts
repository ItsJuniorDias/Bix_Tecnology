import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 80svh;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  margin-left: 330px;
  margin-top: 64px;
  margin-bottom: 32px;
  padding: 24px;
  padding-right: 32px;
  border-radius: 16px;
  padding-left: 32px;
`;

export const Content = styled.li`
  width: 100%;
  height: 32px;
  background-color: red;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
`;

export const ListItem = styled.li`
  width: 100%;
  height: 32px;
  background-color: red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
`;

export const Text = styled.h5`
  /* color: #dddddd; */
`;

export const ListContent = styled.div`
  width: 100%,
  height: 100svg;
`;
