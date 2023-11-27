import React from "react";
import styled from "styled-components";

const StyledFrame = styled.div`
  border: 1px solid;
  border-color: #e6eaf8;
  border-radius: 10px;
  height: 52px;
  overflow: hidden;
  position: relative;
  width: 592px;
`;

const TextWrapper = styled.div`
  color: #333339;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 20px;
  letter-spacing: 0;
  line-height: 20px;
  position: absolute;
  top: 15px;
  white-space: nowrap;
`;

export const Input = (props) => {
  return (
    <StyledFrame>
      <TextWrapper>{props.input}</TextWrapper>
    </StyledFrame>
  );
};