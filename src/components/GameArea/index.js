import React, { Component } from 'react'
import Tile from './../Tile'

class GameArea extends Component{
    renderTiles = tileCount => {
        const tiles = []
        for(let i= 0; i < tileCount;i++){
            tiles.push(i)
        }
        return(
            <div>
                {tiles.map((tile,index)=> <Tile prop={tile} key={index}/>)}
            </div>
        )
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default GameArea