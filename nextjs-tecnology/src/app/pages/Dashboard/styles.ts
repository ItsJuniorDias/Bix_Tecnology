import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  /* height: 35px; */
  background-color: #ecedef;
  min-height: 100svh;
  padding-top: 24px;
`;

export const Text = styled.h5`
  font-family: var(--font-nunito-medium);
  padding-left: 0;
  margin: 0;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.01em;
  list-style-position: inside;
  padding-left: 16px;
`;

export const Content = styled.div`
  background-color: #dddddd;
  width: 80%;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  padding-left: 16px;
  /* padding-bottom: 26px; */
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
