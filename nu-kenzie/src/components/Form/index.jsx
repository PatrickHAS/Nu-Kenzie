import "./styles.css";
import React from "react";
import TotalMoney from "../TotalMoney";

import Nav from "../Nav";
import { useState } from "react";

function Form({
  listTransactions,
  addList,
  deleteList,
  prohibited,
  setProhibited,
}) {
  const [descriptionValue, setDescriptionValue] = useState("");
  const [valueValue, setValueValue] = useState("");
  const [selectValue, setSelectValue] = useState("entrada");

  return (
    <main>
      <div className="main-contents">
        <div className="form-totalValue">
          <div className="form-contents">
            <form>
              <label className="title-description">Descrição</label>
              <input
                className="input-description"
                type="text"
                placeholder="Digite aqui sua descrição"
                required
                value={descriptionValue}
                onChange={(event) => setDescriptionValue(event.target.value)}
              ></input>
              <p>Ex: Compras de roupas</p>
              <div className="value-valueType">
                <div className="value">
                  <label>Valor</label>
                  <input
                    className="input-value"
                    type="number"
                    placeholder="0"
                    required
                    onChange={(event) =>
                      setValueValue(Number(event.target.value))
                    }
                  ></input>
                </div>
                <div className="type-value">
                  <label>Tipo de valor</label>
                  <select
                    onChange={(event) => setSelectValue(event.target.value)}
                  >
                    <option>entrada</option>
                    <option>saída</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="insert-value"
                onClick={(event) =>
                  event.preventDefault(
                    addList({
                      description: descriptionValue,
                      type: selectValue,
                      value:
                        selectValue === "entrada" ? valueValue : -valueValue,
                    })
                  )
                }
              >
                Inserir valor
              </button>
            </form>
          </div>
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <Nav
          listTransactions={listTransactions}
          deleteList={deleteList}
          prohibited={prohibited}
          setProhibited={setProhibited}
        />
      </div>
    </main>
  );
}

export default Form;
