import React from 'react';
import { WineshareCard, WineshareContainer } from './styles';
import smartphoneRight from '../../images/smartphoneRight.png';
import wineIcon from '../../images/wine-icon.svg';
import ilustration from '../../images/ilustration.png';

export default function Wineshare() {
  return (
    <WineshareContainer>
      <h1 className="title">WineShare</h1>
      <WineshareCard>

        <div className="wineshare-info">
          <img src={ wineIcon } alt="" />
          <h1>
            Baixe
            {' '}
            o
            <span> app wine</span>
            !
          </h1>
        </div>
        <div className="wineshare-images">
          <img className="smartphoneRight" src={ smartphoneRight } alt="smartphone" />
          <img className="ilustration" src={ ilustration } alt="" />
        </div>

        <div className="wineshare-functions">
          <div className="wineshare-text">
            <h1>Compartilhe momentos!</h1>
            <p>A nova funcionalidade permite compartilhar fotos e videos no feed wine.</p>
          </div>
          <div className="wineshare-text">

            <h1>Misture paixões!</h1>
            <p>Com o wineshare você e seus amigos podem brindar essa nova experiência.</p>
          </div>
          <div className="wineshare-text">

            <h1>Explore o Wineverso!</h1>
            <p>Saiba com o que seus amigos estão harmonizando um bom vinho.</p>
          </div>
        </div>
      </WineshareCard>
    </WineshareContainer>
  );
}
