import ReactDOM from 'react-dom'
import {BrowserRouter as Router, } from 'react-router-dom'
import React from 'react'
import {ProductProvider} from './context'
import App from './App'
import './index.css'


ReactDOM.render(
<ProductProvider>
    <Router>
        <App />
    </Router>
</ProductProvider>,
document.getElementById('root'))