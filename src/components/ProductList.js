import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context'

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-3 container">
                    <Title name="Our" title="Products" />
                    <div className="row">
                        <ProductConsumer>
                            {context => {
                                return context.products.map(p => {
                                    return (
                                        <Product key={p.id} product={p} />
                                    )
                                })
                            }}
                        </ProductConsumer>
                    </div>
                    {/* <Product /> */}
                </div>
            </React.Fragment>
        )
    }
}
