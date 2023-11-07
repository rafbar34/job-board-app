import styled from "styled-components";

export const AddJobWrapper = styled.section`
  .addJob {
    display: grid;
    grid-template-columns: 1fr;
  }

  .addJob-page {
    width: 90vh;
    margin: 0 auto;
    padding: 2rem 0;
  }
  .addJob-header {
    width: 90vh;
    margin: 0 auto;

    border-radius: 16px;
    padding: 2rem 1rem;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }

    .dashboard-page {
      width: 90%;
    }
  }
`;
