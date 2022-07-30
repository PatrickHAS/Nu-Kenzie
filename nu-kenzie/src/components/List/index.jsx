
import Trash from "../imgs/trash.png";

import "./styles.css";

function List ({prohibited, deleteList}) {
    
    return (
        <ul>
            {
                prohibited.map((item, index) => (
                    <li key={index}>
                        {
                            item.type === "entrada" 
                            ? <div className="color-green"></div> 
                            : <div className="color-gray"></div>
                        }
                        <div className="list-contents">
                            <div className="description-type">
                                <h1>{item.description}</h1>
                                <span>{item.type}</span>
                            </div>
                            <div className="price-delete">
                                <p>{item.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
                                <figure>
                                    <img src={Trash} alt="trash-img" onClick={() => deleteList(index)}/>
                                </figure>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
export default List;