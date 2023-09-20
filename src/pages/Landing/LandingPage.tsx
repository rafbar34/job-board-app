import React from 'react';
import styled from 'styled-components';
export const LandingPage = () => {
  return (
    <Wrapper>
      <h1>Landing Page</h1>
      <div className='content'>ddd</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: red;
  h1 {
    color: white;
  }
  .content {
    background-color: blue;
    color: yellow;
  }
`;
