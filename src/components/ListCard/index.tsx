import { StyledListCard } from './style';

interface ListCardProps {
  list: { [key: string]: string };
  isCategory: string;
}

const ListCard = ({ list, isCategory }: ListCardProps) => {
  return (
    <StyledListCard>
      <div className="cosmetics-list" key={list.id}>
        <figure>
          <img src={list.image_link} alt="" />
        </figure>
        <p className="cosmetics-list-category">{isCategory}</p>
        <div className="info">
          <p className="cosmetics-list-name">{list.name}</p>
          <p className="cosmetics-list-desc">{list.description}</p>
          <p className="cosmetics-list-price"></p>
          <div className="cosmetics-list-btn-wrap">
            <button className="cosmetics-list-btn" onClick={() => window.open(list.product_link)}>
              ${list.price} - Buy
            </button>
          </div>
        </div>
      </div>
    </StyledListCard>
  );
};

export default ListCard;
