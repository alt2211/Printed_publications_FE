import React from "react";
import styled from "styled-components";

const Filter = styled.div`
  border: 1px solid;
  border-color: #e6eaf8;
  border-radius: 10px;
  height: 52px;
  overflow: hidden;
  position: relative;
  width: 442px;
`;

const CalendarCheckWrapper = styled.div`
  background-color: #f0ecf5;
  border-radius: 6px;
  height: 40px;
  left: 396px;
  overflow: hidden;
  position: absolute;
  top: 6px;
  width: 40px;
`;

const CalendarCheck = styled.img`
  height: 20px;
  left: 10px;
  position: absolute;
  top: 10px;
  width: 20px;
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

export const Frame = (props) => {
  return (
    <Filter>
      <CalendarCheckWrapper>
        <CalendarCheck alt="Calendar check" src={props.svg} />
      </CalendarCheckWrapper>
      <TextWrapper>{props.name}</TextWrapper>
    </Filter>
  );
};

//<Frame svg="CalendarCheck.svg" name="Дата начала" />