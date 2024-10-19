import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  height: 40px;
  background-color: #ffffff;
  z-index: 5;
  margin-top: -688px;
  margin-left: 350px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
`;

export const Text = styled.h5`
  font-family: var(--font-nunito-regular);
  font-size: 18px;
  color: #686d76;

  /* line-height: 24px; */
`;

export const Input = styled.input`
  width: 60%;
  height: 40px;
  border-color: #ffffff;
  border-width: 0;
  padding-left: 8px;
  &:focus {
    outline: none; /* Removes the outline */
    border: none;
  }
`;
