import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../../context'
import Title from '../Title'
import EmptyCart from './EmptyCart'
import CartRow from './CartRow';
import {StyledButton} from '../StyledButton'


export default class Cart extends Component {

    getTotal(products){
        let total = 0
        products.forEach(p => total += (p.count * p.price))
        return total
    }

    render() {
        return (
            <section>
                <ProductConsumer>
                        {cxt => {
                            if (cxt.cart.length > 0){
                                return (
                                    <React.Fragment>
                                        <Title title="Your Cart" />
                                        <table className="table table-striped d-none d-md-table">
                                            <thead>
                                                <tr className="text-center">
                                                    <th>Products</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Remove</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    cxt.cart.map(p => <CartRow key={p.id} p={p} />)
                                                }
                                                <tr>
                                                    <td colSpan="5" className="text-right">Total</td>
                                                    <td className="text-right">
                                                        <span className="mr-4">
                                                            {this.getTotal(cxt.cart)}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <StyledButton color="var(--mainYellow)" onClick={cxt.clearCart}>
                                            Clear Cart
                                        </StyledButton>
                                    </React.Fragment>
                                )
                            }
                            else
                            {
                                return (
                                    <React.Fragment>
                                        <EmptyCart />
                                        <h5 className="text-center">
                                            Go to <Link to="/">Products</Link>
                                        </h5>
                                    </React.Fragment>
                                )
                            }
                        }}
                </ProductConsumer>
            </section>
        )
    }
}
