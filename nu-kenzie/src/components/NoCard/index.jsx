import React from "react";
import ImgNoCard from "../imgs/NoCard.png";
import "./styles.css";

function NoCard() {
  return (
    <div className="noCard">
      <h1>Você ainda não possui nenhum lançamento</h1>
      <img src={ImgNoCard} alt="" />
      <img src={ImgNoCard} alt="" />
      <img src={ImgNoCard} alt="" />
    </div>
  );
}
export default NoCard;
