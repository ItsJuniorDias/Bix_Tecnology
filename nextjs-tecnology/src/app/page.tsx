"use client";
import React, { useState } from "react";
import { Dashboard, Body, Header, List } from "./pages";

export default function Home() {
  const [inputValue, setInputValue] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Body>
        <Dashboard />
        <Header
          value={inputValue}
          onChange={(props) => handleInputChange(props)}
        />

        <List />
      </Body>
    </>
  );
}
