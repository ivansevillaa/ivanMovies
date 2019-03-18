import React, { Component } from 'react'
import RegularError from './RegularError.jsx'
import Header from '../Header/Header.jsx' 

class HandleErrorContainer extends Component {
    state = {
        handleError: false
    }
    componentDidCatch(error, info) {
        this.setState({
            handleError: true
        })
        //Envía este error a un servicio como Sentry
    }
    render() {
        if (this.state.handleError) {
            return (
                <div>
                    <Header />
                    <RegularError />
                </div>
            )
        }
        return this.props.children
    } 
}

export default HandleErrorContainer