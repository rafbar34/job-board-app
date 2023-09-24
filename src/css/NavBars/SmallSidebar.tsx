import styled from 'styled-components';

export const SmallSidebarWrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    background: white;
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--border-radius);
    padding: 4rem 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 30px;
    left: 50px;
    background-color: transparent;
    border-color: 'trasparent';
    font-size: 1rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .nav-links{
    padding-top:2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link{
    display: flex;
    align-items: center;
    color:var(--text-secondary-color);
    padding:1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover{
    color:var(--primary-500);
  }
  .active {
    color:var(--primary-500)
  }
`;
