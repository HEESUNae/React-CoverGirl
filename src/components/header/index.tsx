import { commonImg } from '../../consts/image';
import { StyledHeader } from './style';

interface HeaderProps {
  onClick: () => void;
  onCategory: (name: string) => void;
  isVisibleNav: boolean;
  isCategory: string;
  categories: string[];
}

const Header = ({ onClick, onCategory, categories, isVisibleNav, isCategory }: HeaderProps) => {
  return (
    <StyledHeader>
      <p className="logo">COVER-GIRL</p>
      <button type="button" className="menu-starter" onClick={onClick}>
        <img src={commonImg.iconMenu} alt="메뉴" />
      </button>
      <div className={`category ${isVisibleNav && 'active'}`}>
        <nav>
          {categories.map((category) => (
            <button
              className={isCategory === category ? 'active' : ''}
              onClick={() => onCategory(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
