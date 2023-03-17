import List from "../List";
import NoCard from "../NoCard";

import "./styles.css";

function Nav({
  listTransactions,
  setListTransactions,
  deleteList,
  prohibited,
  setProhibited,
}) {
  function filterButtons(type) {
    setProhibited(
      listTransactions.filter((item) => {
        return item.type === type;
      })
    );
  }

  return (
    <div className="nav-list">
      <div className="nav-contents">
        <div className="title-financialSummary">
          <h3>Resumo financeiro</h3>
        </div>
        <div className="buttons">
          <button
            className="btn-all"
            onClick={() => setProhibited(listTransactions)}
          >
            Todos
          </button>
          <button
            className="btn-prohibited"
            onClick={() => filterButtons("entrada")}
          >
            Entrada
          </button>
          <button
            className="btn-expenses"
            onClick={() => filterButtons("saída")}
          >
            Despesas
          </button>
        </div>
      </div>
      {listTransactions.length === 0 && <NoCard />}
      <List
        prohibited={prohibited}
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
        deleteList={deleteList}
      />
    </div>
  );
}
export default Nav;
