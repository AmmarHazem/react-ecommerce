import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {ProductConsumer} from '../context'


export default class Product extends Component {
    render() {
        let {name, img, price, inCart, id} = this.props.product
        return (
            <StyledProduct className="col-9 mx-auto col-md-6 col-lg-3 my-3 pt-1">
                <div className="card">
                    <ProductConsumer>
                        {cxt => {
                            return (
                                <div className="img-container p-5">
                                    <Link onClick={() => cxt.handleDetail(id)} to="details">
                                        <img className="card-img-top" src={img} alt={name} />
                                    </Link>
                                    <button className="cart-btn" disabled={inCart} onClick={() => {
                                        cxt.addToCart(id)
                                        cxt.openModal(id)
                                    }}>
                                        <p className="text-capitalized mb-0">{inCart ? 'In Cart' : (<i className="fas fa-cart-plus" />)}</p>
                                    </button>
                                </div>
                            )
                        }}
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="mb-0 align-self-center">
                            {name}
                        </p>
                        <h5 className="text-blue mb-0 font-italic">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </StyledProduct>
        )
    }
}

Product.propTypes = {
    product : PropTypes.shape({
        id : PropTypes.number,
        name : PropTypes.string,
        price : PropTypes.number,
        img : PropTypes.string,
        inCart : PropTypes.bool,
    }).isRequired
}

const StyledProduct = styled.div`

    transition : all 0.5s linear;
    border : 1px solid transparent;

    & img
    {
        height : 300px;
        width : 100%;
    }

    .card
    {
        border : 1px solid transparent;
        transition : all 0.3s linear;
    }

    .card-footer
    {
        background-color : transparent;
        border-top : transparent;
        transition : all 0.5s linear;
    }

    .card:hover
    {
        border: 0.04rem solid rgba(0, 0, 0, 0.2);
        box-shadow : 2px 2px 5px 0px rgba(0, 0, 0, 0.2)
    }

    .img-container
    {
        position : relative;
        overflow : hidden;
    }

    .card-img-top
    {
        transition : all 0.5s linear;
    }

    .img-container:hover .card-img-top
    {
        transform : scale(1.1);
    }

    .cart-btn
    {
        position : absolute;
        bottom : 0px;
        right : 0px;
        padding : 0.2rem 0.4rem;
        background-color : var(--lightBlue);
        border: none;
        color : var(--mainWhite);
        border-radius : 0.5rem 0 0 0;
        transition : all 0.3s linear;
        transform : translate(100%, 100%);
    }

    .card:hover .cart-btn
    {
        transform : translate(0%, 0%);
    }

`
