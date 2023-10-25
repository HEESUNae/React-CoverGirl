import React from 'react';
import { commonImg } from '../../consts/image';
import { StyledPreloader } from './style';

interface PreloaderProps {
  onClick: () => void;
}

const Preloader = ({ onClick }: PreloaderProps) => {
  return (
    <StyledPreloader>
      <div className="preloader">
        <img src={commonImg.bgMain} alt="" />
        <p>
          화장품 브랜드 Cover Girl의 화장품 정보 무료 API를 사용하여 <br />
          React, TypeScript로 만든 개인 포트폴리오 입니다.
        </p>
        <p className="desc">기여도 100%</p>
        <button type="button" onClick={onClick}>
          포트폴리오 보러가기
        </button>
      </div>
    </StyledPreloader>
  );
};

export default Preloader;
