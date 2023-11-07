import styled from "styled-components";

export const DashboardWrappter = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }

  .dashboard-page {
    width: 90vh;
    margin: 0 auto;
    border-radius: 16px;
    padding: 2rem 0rem;
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
