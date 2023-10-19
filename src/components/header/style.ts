import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: 1px solid #e2dfdb;
  padding: 2rem;
  display: flex;
  align-items: center;
  position: relative;
  .logo {
    font-size: 2.4rem;
    text-decoration: none;
    font-weight: 700;
    color: #fff;
  }
  button.menu-starter {
    display: none;
  }
  .category {
    margin-left: auto;
    nav {
      display: flex;
      gap: 1.5rem;
    }
    button {
      color: #666;
      text-transform: uppercase;
      &.active {
        color: #fff;
      }
    }
  }
`;
