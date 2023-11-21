import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secendary-color);
  border-radius: 16px;
  padding: 10px 0px;
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    background: black;
    opacity: 0.75;
    z-index: 10;
    border:1px solid black;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: block;
      margin: 0 auto;
      height: 40;
      width:40;
    }
    .logo-text {
      display: block;
    }
  }
`;
