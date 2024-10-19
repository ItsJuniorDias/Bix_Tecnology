import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  height: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  margin-top: -688px;
  display: flex;
  justify-content: space-between;
  padding-left: 64px;
  padding-right: 64px;
  margin-left: 290px;
`;

export const Filter = styled.button`
  width: 10%;
  height: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  border-width: 0;
  display: flex;
  justify-content: space-around;
  padding-left: 8px;
  padding-right: 8px;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
`;

export const Text = styled.h5`
  font-family: var(--font-nunito-regular);
  font-size: 18px;
  color: #686d76;
`;

export const Input = styled.input`
  width: 65%;
  height: 40px;
  border-color: #ffffff;
  border-width: 0;
  padding-left: 8px;
  &:focus {
    outline: none; /* Removes the outline */
    border: none;
  }
`;
