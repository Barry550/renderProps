import React, { Component } from 'react'

export default class AddHits extends Component {

    state = {
        hits: 0,
        name: {
            vegeta: "Vegeta",
            goku: "Goku"
        }
     }

     handleClick = () =>{
        this.setState(prevState => {
            return{
                hits: prevState.hits + 1
            }
        })
     }

  render() {
    return (
      <>
          {this.props.render(this.state.hits, this.handleClick, this.state.name)}
      </>
    )
  }
}
