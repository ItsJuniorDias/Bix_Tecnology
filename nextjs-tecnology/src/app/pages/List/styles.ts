import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100svh;
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
  padding-top: 8px;
  padding-bottom: 8px;
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
  width: 100%;
  height: 100svh;
  margin-top: 24px;
  background-color: green;
  display: flex;
  flex-direction: row;
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
  margin-left: 32px;
`;

export const TruncatedH5 = styled.h5`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%; /* Adjust width as needed */
  color: #ddd;
`;
