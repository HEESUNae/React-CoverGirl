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
          무료 API를 사용하여 만든 포트폴리오 용도의 개인 프로젝트 입니다 <br />
          속도가 일시적으로 느리거나 호출에 문제가 생길경우 새로고침 해주세요.
        </p>
        <p className="desc">기여도 : 디자인/퍼블/프론트 100%</p>
        <button type="button" onClick={onClick}>
          포트폴리오 보러가기
        </button>
      </div>
    </StyledPreloader>
  );
};

export default Preloader;
