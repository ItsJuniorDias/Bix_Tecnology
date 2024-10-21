import React from "react";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

import { ButtonCustom, TextButton, Content } from "./styles";

interface ButtomProps {
  onClick: () => void;
  disabled: boolean;
  isIcon?: boolean;
  text: string;
}

export const Button = ({ onClick, isIcon, disabled, text }: ButtomProps) => {
  return (
    <Content>
      <ButtonCustom onClick={onClick} disabled={disabled}>
        {isIcon && (
          <>
            <ArrowBackIos
              fontSize="small"
              sx={{
                color: "#151515",
              }}
            />
          </>
        )}

        <TextButton>{text}</TextButton>

        {!isIcon && (
          <>
            <ArrowForwardIos
              fontSize="small"
              sx={{
                color: "#151515",
              }}
            />
          </>
        )}
      </ButtonCustom>
    </Content>
  );
};
