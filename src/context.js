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
        this.setState(prevState => {
            prevState.cart.forEach(p => p.inCart = false)
            return {
                cart : [],
                products : prevState.products,
            }
        })
    }

    removeItem = id => {
        this.setState(prevState => {
            return {
                cart : prevState.cart.filter(p => {
                    if(p.id !== id){
                        return p
                    }
                    else
                    {
                        p.inCart = false
                    }
                }),
                products : prevState.products,
            }
        })
    }

    decrement = id => {
        let products = this.state.products
        products.forEach(p => {
            if(p.id === id && p.count > 1){
                p.count -= 1
            }
        })
        this.setState({products : products})
    }

    increment = id => {
        this.setState(prevState => {
            return {
                cart : prevState.cart.map(p => {
                    if(p.id === id){
                        p.count += 1
                    }
                    return p
                })
            }
        })
    }

    changeCount = (e, id) =>{
        let count = e.target.value
        let products = this.state.products
        products.forEach(p => {
            if(p.id === id){
                p.count = count
            }
        })
        this.setState({products : products})
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

    handleDetail = id => {
        let p = this.getItem(id)
        this.setState({detailProduct : p})
    }

    getItem = id =>{
        return this.state.products.find(p => p.id === id)
    }

    addToCart = id => {
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
            changeCount : this.changeCount,
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
