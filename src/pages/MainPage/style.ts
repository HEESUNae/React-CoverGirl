import styled from 'styled-components';
import { commonImg } from '../../consts/image';

export const StyledMainPage = styled.div`
  position: relative;
  background: url(${commonImg.bgMain}) no-repeat 50% 50%;
  .inner {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    margin: 0 auto;
    border: 1px solid #e2dfdb;
  }
  .contents {
    position: relative;
    min-height: 100vh;
  }
  .cosmetics {
    &-container {
      display: grid;
      gap: 3rem;
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
      border-top: 0;
      padding: 3rem;
      align-items: flex-start;
      height: auto;
      &.active {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  @media (max-width: 800px) {
    header {
      justify-content: space-between;
      button.menu-starter {
        display: block;
        img {
          width: 2.8rem;
        }
      }
      nav {
        flex-direction: column;
        gap: 0 !important;
        border: 1px solid #ddd;
        button {
          padding: 1.5rem 2rem;
        }
        .active {
          background-color: #222;
        }
      }
    }
    .category {
      position: absolute;
      top: 100%;
      right: 0;
      z-index: 999;
      box-sizing: border-box;
      background-color: #fff;
      display: none !important;
      &.active {
        display: block !important;
      }
    }
    .scroll {
      height: 100%;
    }
  }
`;
