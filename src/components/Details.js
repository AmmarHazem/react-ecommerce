import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import { StyledButton } from "./StyledButton";


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>

                {cxt => {

                    let {name, discreption, price, img, inCart, company, id} = cxt.detailProduct

                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h2>{name}</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-center">
                                    <img src={img} alt={name} className="img-fluid border border-dark" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h1>Model: {name}</h1>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Made By: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            Price: <span>$</span> {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mb-0 mt-3">
                                        Product Info:
                                    </p>
                                    <p className="text-muted lead">
                                        {discreption}
                                    </p>
                                    <div>
                                        <Link to="/" className="mr-1">
                                            <StyledButton>Back To Products</StyledButton>
                                        </Link>
                                        <StyledButton disabled={inCart} className="text-capitalize" onClick={() => {
                                            cxt.addToCart(id)
                                            cxt.openModal(id)
                                        }} color="var(--mainYellow)">
                                            {inCart ? 'in cart' : 'add to cart'}
                                        </StyledButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
