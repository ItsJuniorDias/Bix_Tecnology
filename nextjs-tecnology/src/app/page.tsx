"use client";

import { Dashboard, Body, Header, List } from "./pages";

export default function Home() {
  return (
    <>
      <Body>
        <Dashboard />
        <Header />

        <List />
      </Body>
    </>
  );
}
