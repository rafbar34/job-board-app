import styled from "styled-components";

export const SingleJobWrapper = styled.section`
  .container {
    margin-top: 10px;
    display: flex;
    border: 1px solid black;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background: rgba(11, 11, 11, 0.14);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(15.7px);
    -webkit-backdrop-filter: blur(15.7px);
    border: 1px solid rgba(11, 11, 11, 0.3);
  }
  .title {
    font-size: 34px;
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 50px;
  }
  .type {
    font-size: 26px;
    min-height: 50px;
  }
  .desc {
    font-size: 21px;
    min-height: 200px;
    width: 100%;
    padding: 20px;
    border-radius: 16px;
    border: 1px solid black;
  }
  .salary {
    font-size: 21px;
    font-weight: bold;
    min-height: 50px;
  }
  .contect {
    font-size: 18px;
    text-decoration: underline;
  }
`;
