import styled from 'styled-components';

export const StyledPreloader = styled.div`
  .preloader {
    img {
      position: absolute;
      z-index: -1;
      filter: brightness(0.7);
    }
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      color: #fff;
      padding: 1rem;
      font-weight: 600;
      border-radius: 0.4rem;
      font-size: 1.4rem;
    }
    p {
      font-size: 2rem;
      color: #fff;
      font-weight: 600;
      text-align: center;
      width: 80%;
      &.desc {
        font-size: 1.6rem;
        margin: 2rem 0;
      }
    }
  }
`;
