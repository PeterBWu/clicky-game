import React from 'react'
import Score from './../Score'

const Header = props => {
    return (
        <header>
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
            <h1>Clicky Game</h1>
            <Score props={{...props}}/>
            </div>
            </div>
        </header>
    )
}

export default Header