import React, { Component } from 'react'
import {ProductConsumer} from '../../context'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'


export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                        {cxt => {
                            if (cxt.cart.length > 0){
                                return (
                                    <React.Fragment>
                                        <Title name="Your" title="Cart"/>
                                        <CartColumns />
                                        {cxt.cart.map(p => {
                                            return <p key={p.id}>{p.name}</p>
                                        })}
                                    </React.Fragment>
                                )
                            }
                            else
                            {
                                return <EmptyCart />
                            }
                        }}
                </ProductConsumer>
            </section>
        )
    }
}
