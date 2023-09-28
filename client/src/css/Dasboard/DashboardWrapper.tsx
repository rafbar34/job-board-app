import styled from 'styled-components';


export const DashboardWrappter = styled.section`
    .dashboard{
        display: grid;
        grid-template-columns: 1fr;
    }

    .dashboard-page{
        width: 90vh;
        margin: 0 auto;
        border:1px solid black;
        padding: 2rem 0;
    }
    @media (min-width:992px){
        .dashboard{
        grid-template-columns:auto 1fr;
    }

    .dashboard-page{
        width: 90%
    } 
    }
`