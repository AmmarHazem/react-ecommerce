import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../rm.svg'
import styled from 'styled-components'
import {StyledButton} from './StyledButton'

export default class Navbar extends Component {
    render() {
        return (
            <StyledNav className="navbar align-items-center navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <img width="30px" src={logo} alt="logo" />
                </Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                </ul>
                <Link to="cart/">
                    <StyledButton>
                        <i className="fas fa-cart-plus mr-1" />
                        Cart
                    </StyledButton>
                </Link>
            </StyledNav>
        )
    }
}

const StyledNav = styled.nav`

`
