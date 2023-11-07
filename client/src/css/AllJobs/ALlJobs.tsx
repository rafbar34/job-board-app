import styled from "styled-components";

export const AllJobWrapper = styled.section`
  .allJob {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }


  .job-card {
    padding: 20px;
    height: 20rem;
    background-color: gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
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
