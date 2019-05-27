import React from 'react'
import {products as productsData} from './productsData'


const context = React.createContext();

class ProductProvider extends React.Component{

    state = {
        products : [],
        detailProduct : productsData[1],
        cart : [],
        modalProduct : productsData[1],
        modalOpen : false,
        cartSubtotal : 0,
        cartTax : 0,
        cartTotal : 0,
    }

    clearCart = () => {
        console.log('clear cart')
    }

    removeItem = id => {
        console.log('remove item: ', id)
    }

    decrement = id => {
        console.log('decrement: ', id)
    }

    increment = id => {
        console.log('increment: ', id)
    }

    openModal = id => {
        let product = this.getItem(id)
        this.setState({
            modalProduct : product,
            modalOpen : true,
        })
    }

    closeModal = () => this.setState({modalOpen : false})

    setProducts = () => {
        let tempProducts = []
        productsData.forEach(p => {
            let product = {...p}
            tempProducts = [...tempProducts, product]
        })
        this.setState({products : tempProducts})
    }

    componentDidMount = () => {
        this.setProducts()
    }

    handleDetail = (id) => {
        let p = this.getItem(id)
        this.setState({detailProduct : p})
    }

    getItem = id =>{
        return this.state.products.find(p => p.id === id)
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        let p = tempProducts.find(p => p.id === id)
        p.inCart = true
        p.count = 1
        this.setState({
            products : tempProducts,
            cart : [...this.state.cart, p],
        })
    }

    render(){
        let cxt = {
            ...this.state,
            handleDetail : this.handleDetail,
            addToCart : this.addToCart,
            openModal : this.openModal,
            closeModal : this.closeModal,
            increment : this.increment,
            decrement : this.decrement,
            removeItem : this.removeItem,
            clearCart : this.clearCart,
        }
        return (
            <context.Provider value={cxt}>
                {this.props.children}
            </context.Provider>
        )
    }
}

const ProductConsumer = context.Consumer

export {ProductProvider, ProductConsumer}
