import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class HeaderItem extends Component {

    headerStyle = () => {
        return {
            backgroundColor: '#E6E6FA',
            color: '#20B2AA',
            align: 'center',
            fontSize: '2rem',
            textAlign: 'center',
            padding: '10px' 
        }
    }
    render() {
        return (
            <div style={this.headerStyle()}>
                <h3 style={this.headerStyle()}>
                    Todo List
                </h3>
            </div>
        )
    }
}

export default HeaderItem
