import React from 'react'

export default function CartColumns(props) {
    return (
        <div className="container-fluid text-center d-none d-md-block">
            <div className="row">
                <div className="col-10 mx-auto col-md-2">
                    <p className="text-uppercase">Products</p>
                </div>
                <div className="col-10 mx-auto col-md-2">
                    <p className="text-uppercase">Name</p>
                </div>
                <div className="col-10 mx-auto col-md-2">
                    <p className="text-uppercase">Price</p>
                </div>
                <div className="col-10 mx-auto col-md-2">
                    <p className="text-uppercase">Quantity</p>
                </div>
                <div className="col-10 mx-auto col-md-2">
                    <p className="text-uppercase">Remove</p>
                </div>
                <div className="col-10 mx-auto col-md-2">
                    <p className="text-uppercase">Total</p>
                </div>
            </div>
        </div>
    )
}
