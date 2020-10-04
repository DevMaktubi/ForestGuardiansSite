import React from "react";
import Header from "../../components/Header";

import { TextContainer } from "./styles";

const Homepage = () => {
  return (
    <>
      <Header />
      <TextContainer>
        <div>
          <h1>Together, we will create a better future</h1>
          <p>
            Participate in the fight against forest fires. Through Forest
            Guardians you can report fires or even collaborate with fire
            containment, as a volunteer brigadier. Help us to create a better
            future.
          </p>
        </div>
      </TextContainer>
    </>
  );
};

export default Homepage;
