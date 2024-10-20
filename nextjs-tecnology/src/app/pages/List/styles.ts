import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 80svh;
  background-color: blue;
  display: flex;
  flex-direction: column;
  margin-left: 330px;
  margin-top: 64px;
  padding: 24px;
  padding-right: 32px;
  border-radius: 16px;
  padding-left: 32px;
`;

export const Content = styled.li`
  width: 100%;
  background-color: yellow;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
  color: #151515;
  margin-left: 32px;
`;

export const TextIndustry = styled.h5`
  margin-left: 128px;
  color: #151515;
`;

export const TextDate = styled.h5`
  margin-left: 164px;
  color: #151515;
`;

export const TextAmount = styled.h5`
  margin-left: 140px;
  color: #151515;
`;

export const TextTransaction = styled.h5`
  margin-left: 64px;
  color: #151515;
`;

export const ListContent = styled.div`
  width: 100%;
  height: 100svh;
  margin-top: 24px;
  background-color: green;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ListItemContent = styled.div`
  margin-left: 24px;
  background-color: yellow;
  width: 144px;
`;

export const ListItemIndustry = styled.div`
  margin-left: px;
  background-color: pink;
`;

export const ListItemDate = styled.div`
  /* margin-right: 64px; */
  background-color: grey;
  margin-left: 16px;
`;

export const ListItemTransaction = styled.div`
  background-color: red;
  margin-left: 16px;
`;

export const ListItemAmount = styled.div`
  background-color: red;
  margin-left: 16px;
`;

export const ListItemState = styled.div`
  background-color: grey;
  margin-right: 24px;
`;

export const ListItemCurrency = styled.div`
  background-color: blue;
  /* margin-left: 32px; */
`;

export const TruncatedH5 = styled.h5`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  color: #151515;
`;

export const Button = styled.button`
  width: 50%;
  height: 50px;
`;
