// React
import React, { useState } from "react";

// Tools
import styled from "styled-components";
import AnimatedNumbers from "react-animated-numbers";

// Components
import AnimatedNumber from "react-animated-numbers";
import { ChildContainer } from "../../Components/Theme/appTheme";

// Media
import planningImg from "../../media/planning.png";
import leftArrow from "../../media/leftArrow.svg";
import rightArrow from "../../media/rightArrow.svg";

const PlanningBackground = styled.img`
  height: 680px;
  width: 950px;
`;

const ContainerDiv = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding-top: 100px;
  width: 100%;
`;

const PlanningDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 680px;
  width: 950px;
`;

const DivDate = styled.div`
  display: flex;
  height: 100px;
  position: absolute;
  min-width: 950px;
`;

const WeekDate = styled.div`
  align-items: center;
  color: white;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  padding-top: 23px;
  justify-content: center;
  min-width: 100px;
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 100px;
  position: absolute;
  width: 950px;
  height: 580px;
`;

const Day = styled.div`
  display: flex;
  height: 580px;
  justify-content: center;
  position: relative;
  width: 132px;
`;

const ArrowDiv = styled.div`
  position: absolute;
  width: 1200px;
`;

const LeftArrow = styled.img`
  float: left;
  width: 100px;
  height: 100px;
  padding-left: 10px;
  cursor: pointer;

  transition: padding-left 500ms;

  &:hover {
    padding-left: 0;
  }
`;

const RightArrow = styled.img`
  float: right;
  width: 100px;
  height: 100px;
  padding-right: 10px;
  cursor: pointer;

  transition: padding-right 500ms;

  &:hover {
    padding-right: 0;
  }
`;

function Planning() {
  const [nextPage, setNextPage] = useState(false);

  const allDate = new Date();
  const month = allDate.getMonth() + 1;
  const day = allDate.getDay();
  let date = allDate.getDate();
  date = date - day + 1;

  const startDate = date;
  const endDate = date + 6;
  const nextStartDate = date + 7;
  const nextEndDate = date + 13;

  function LeftArrowClick() {
    setNextPage(false);
  }

  function RightArrowClick() {
    setNextPage(true);
  }

  return (
    <ChildContainer>
      <ContainerDiv>
        <ArrowDiv>
          {nextPage ? 
            <LeftArrow src={leftArrow} onClick={() => LeftArrowClick()} />
            : 
            <RightArrow src={rightArrow} onClick={() => RightArrowClick()} />
          }
        </ArrowDiv>
        <PlanningDiv>
          <PlanningBackground src={planningImg} />
          <DivDate>
            <WeekDate style={{ paddingLeft: "300px" }}>
              <AnimatedNumbers
                animateToNumber={nextPage ? nextStartDate : startDate}
              />
              /{month < 10 ? <AnimatedNumber animateToNumber={0} /> : null}
              <AnimatedNumber animateToNumber={month} />
            </WeekDate>
            <WeekDate style={{ paddingLeft: "55px" }}>
              <AnimatedNumber
                animateToNumber={nextPage ? nextEndDate : endDate}
              />
              /{month < 10 ? <AnimatedNumber animateToNumber={0} /> : null}
              <AnimatedNumber animateToNumber={month} />
            </WeekDate>
          </DivDate>
          <DayContainer>
            <Day style={{ width: "143px" }} id="Monday" />
            <Day id="Tuesday" />
            <Day id="Wednesday" />
            <Day id="Thursday" />
            <Day id="Friday" />
            <Day id="Saturday" />
            <Day id="Sunday" />
          </DayContainer>
        </PlanningDiv>
      </ContainerDiv>
    </ChildContainer>
  );
}

export default Planning;
