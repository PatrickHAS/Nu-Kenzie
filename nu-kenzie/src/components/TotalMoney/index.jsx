import "./styles.css";
import React from "react";

function TotalMoney({ listTransactions }) {
  console.log(listTransactions);
  const saldo = listTransactions?.reduce((valorAnterior, valorAtual) => {
    return valorAtual.value + valorAnterior;
  }, 0);

  return (
    <>
      {listTransactions.length !== 0 && (
        <div className="container">
          <div className="totalMoney-contents">
            <div className="totalValue-price">
              <div className="title-totalValue">
                <h3>Valor total:</h3>
              </div>
              <div className="title-price">
                <p>
                  {saldo.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </div>
            <span>O valor se refere ao saldo</span>
          </div>
        </div>
      )}
    </>
  );
}
export default TotalMoney;
