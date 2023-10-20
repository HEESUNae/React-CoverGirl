import { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import { StyledMainPage } from './style';
import axios from 'axios';
import Preloader from '../../components/Preloader';
import Header from '../../components/Header';
import ListCard from '../../components/ListCard';

type StringObject = {
  [key: string]: string;
};

const categories = ['blush', 'bronzer', 'eyeshadow', 'eyeliner', 'foundation', 'lipstick', 'mascara'];

const MainPage = () => {
  const [lists, setLists] = useState<StringObject[]>([]);
  const [isCategory, setIsCategory] = useState(categories[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisibleNav, setIsVisibleNav] = useState(false);
  const [isPreloader, setIsPreloader] = useState(true);

  // fetch api
  const fatchApi = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${isCategory}`
      );
      setLists(res.data);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
    setIsVisibleNav(false);
  };

  // active actegory
  const onCategory = (name: string) => {
    setIsCategory(name);
  };

  // visible preloader
  const obVisiblePreloader = () => {
    setIsPreloader(!isPreloader);
  };

  // visible nav
  const obVisibleNav = () => {
    setIsVisibleNav(!isVisibleNav);
  };

  useEffect(() => {
    fatchApi();
  }, [isCategory]);

  return (
    <StyledMainPage>
      {isPreloader && <Preloader onClick={obVisiblePreloader} />}
      <div className="inner">
        <Header
          isVisibleNav={isVisibleNav}
          categories={categories}
          isCategory={isCategory}
          onCategory={onCategory}
          onClick={obVisibleNav}
        />
        <main>
          <div className="contents">
            <div className="scroll">
              <div className={`cosmetics-container ${isLoading && 'active'}`}>
                {isLoading ? (
                  <HashLoader color="#666" />
                ) : (
                  lists.map((list: StringObject) => (
                    <div key={list.id}>
                      <ListCard list={list} isCategory={isCategory} />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </StyledMainPage>
  );
};

export default MainPage;
