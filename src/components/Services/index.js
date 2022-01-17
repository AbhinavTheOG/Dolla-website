import React from "react";
import Icon1 from "../../images/svg-4.jpg";
import Icon2 from "../../images/svg-4.jpg";
import Icon3 from "../../images/svg-4.jpg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElement";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}></ServicesIcon>
          <ServicesH2> PLACE HOLDER DATA 1</ServicesH2>
          <ServicesP>A lot more of place holder data</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}></ServicesIcon>
          <ServicesH2> PLACE HOLDER DATA 2</ServicesH2>
          <ServicesP>A lot more of place holder data</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}></ServicesIcon>
          <ServicesH2> PLACE HOLDER DATA 3</ServicesH2>
          <ServicesP>A lot more of place holder data</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
