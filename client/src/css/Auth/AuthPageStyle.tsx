import styled from "styled-components";

export const AuthWrapper = styled.section`
  min-height: 20vh;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    /* border-top: 5px solid var(--primary-500); */
    /* From https://css.glass */
    background: rgba(38, 12, 38, 0.22);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.7px);
    -webkit-backdrop-filter: blur(11.7px);
    border: 1px solid rgba(38, 12, 38, 0.3);
  }
  .form-input {
    color: white;
    margin: 1rem 0px;
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .membder-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
  .error-block {
    min-height: 2rem;
    display: flex;
    color: red;
    text-align: start;
    margin: 5px 0px;
  }
  .error {
    min-width: 100px;
    width: 10rem;
  }
  .errors {
    margin-top: 20px;
  }
`;
export const RegisterWraper = styled.section`
  .btn-container {
    display: flex;
    justify-content: center;
  }
`;
