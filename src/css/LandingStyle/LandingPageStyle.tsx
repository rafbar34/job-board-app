import styled from 'styled-components';

export const LandingWrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    max-width: 35em;
  }
  .main-img {
    display: none;
  }
  .register-link {
    margin-right: 1rem;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  .container {
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height:70vh;
}
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
