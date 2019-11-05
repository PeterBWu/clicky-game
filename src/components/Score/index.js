import React from 'react'

const Score = props => {
    return (
        <div>
            <h1>Current Score:{props.currentScore}</h1>
            <h1>Top Score:{props.topScore}</h1>
        </div>
    )
}

export default Score