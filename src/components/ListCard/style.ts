import styled from 'styled-components';

export const StyledListCard = styled.div`
  .cosmetics {
    &-list {
      background-color: #fff;
      &-category {
        padding: 0.5rem 1.5rem;
        background-color: #eee;
        text-transform: uppercase;
      }
      &-name {
        font-weight: 600;
        font-size: 1.6rem;
      }
      &-desc {
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 1rem 0 1.5rem;
      }
      &-price {
        font-weight: 700;
      }
      &-btn {
        background: #000;
        width: 100%;
        color: #cbcbcb;
        padding: 1.2rem;
        border-radius: 0.4rem;
        text-align: center;
      }

      figure {
        text-align: center;
        img {
          object-fit: cover;
          max-height: 200px;
        }
      }
      .info {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        min-height: 200px;
        justify-content: space-between;
      }
    }
  }
`;
