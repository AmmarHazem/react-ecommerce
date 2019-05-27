import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import {StyledButton} from './StyledButton'
import {Link} from 'react-router-dom'


export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {cxt => {
                    let {closeModal, modalOpen} = cxt
                    let {img, name, price} = cxt.modalProduct
                    if(modalOpen){
                        return (
                            <StyledModal>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-4">
                                            <h5>Item added to cart</h5>
                                            <img src={img} alt={name} className="mb-3 mt-2 img-fluid" />
                                            <h5>{name}</h5>
                                            <h5 className="text-muted">Price: {price}</h5>
                                            <Link to="/">
                                                <StyledButton onClick={closeModal}>
                                                    Continue Shoping
                                                </StyledButton>
                                            </Link>
                                            <Link to="cart/" className="ml-1">
                                                <StyledButton color="var(--mainYellow)" onClick={closeModal}>
                                                    Go To Cart
                                                </StyledButton>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </StyledModal>
                        )
                    }
                    return null
                }}
            </ProductConsumer>
        )
    }
}

const StyledModal = styled.div`
    position : fixed;
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
    background-color : rgba(0, 0, 0, 0.3);
    display : flex;
    align-items : center;
    justify-content : center;

    #modal
    {
        background-color : var(--mainWhite);
    }
`
