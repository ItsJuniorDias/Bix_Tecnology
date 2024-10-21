import styled from "styled-components";

export const Content = styled.div`
  width: 25%;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonCustom = styled.button`
  width: 100%;
  height: 32px;
  border-width: 0;
  border-radius: 8px;
  margin-left: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ddd;
`;

export const TextButton = styled.h5`
  font-family: var(--font-nunito-bold);
  color: #151515;
  font-size: 14px;
`;
