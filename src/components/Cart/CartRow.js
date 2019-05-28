import React from 'react'
import {ProductConsumer} from '../../context'


export default function CartRow(props) {
    let {name, price, count, id, img} = props.p
    return (
        <ProductConsumer>
            {cxt => {
                return (
                    <tr className="text-center">
                        <td>
                            <img src={'../' + img} alt={name} style={{width : '5rem', height : 'auto'}} />
                        </td>
                        <td>
                            {name}
                        </td>
                        <td>
                            {price}
                        </td>
                        <td>
                            <div className="row">
                                <button onClick={() => cxt.decrement(id)} className="col btn btn-outline-primary">-</button>
                                <input className="form-control form-control-sm col" type="number" min="1" name="count" value={count} onChange={(e) => cxt.changeCount(e, id)} />
                                <button onClick={() => cxt.increment(id)} className="col btn btn-outline-primary">+</button>
                            </div>
                        </td>
                        <td>
                            <button onClick={() => cxt.removeItem(id)} className="btn btn-danger">
                                <i className="fas fa-trash"></i>
                            </button>
                        </td>
                        <td>
                            {count * price}
                        </td>
                    </tr>
                )
            }}
        </ProductConsumer>
    )
}
