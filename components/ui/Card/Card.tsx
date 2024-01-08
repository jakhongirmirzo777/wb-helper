import React, { FC } from "react";
import styled from "styled-components";
import { CardProps } from "@/components/ui/Card/Card.types";

const Wrapper = styled.div<CardProps>`
  padding-left: ${({ paddingX }) => paddingX};
  padding-right: ${({ paddingX }) => paddingX};
  padding-top: ${({ paddingY }) => paddingY};
  padding-bottom: ${({ paddingY }) => paddingY};
  border-radius: ${({ radius }) => radius};
  background: var(--color-white);
  box-shadow: 0 0 0 0 rgba(38, 43, 48, 0.02), 0 0 0 0 rgba(38, 43, 48, 0.02),
    0 0 1px 0 rgba(38, 43, 48, 0.02), 0 0 1px 0 rgba(38, 43, 48, 0.01),
    0 0 1px 0 rgba(38, 43, 48, 0), 0 0 1px 0 rgba(38, 43, 48, 0);
`;

const Card: FC<CardProps> = ({
  children,
  paddingY = "20px",
  paddingX = "20px",
  radius = "20px",
}) => {
  return (
    <Wrapper paddingY={paddingY} paddingX={paddingX} radius={radius}>
      {children}
    </Wrapper>
  );
};

export default Card;
