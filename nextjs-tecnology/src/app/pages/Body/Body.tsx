import React from "react";

import { Container } from "./styles";

type BodyProps = {
  children: React.ReactNode;
};

export const Body = ({ children }: BodyProps) => {
  return <Container>{children}</Container>;
};
