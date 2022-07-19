import React, { Component } from 'react'
import goku from '../img/goku.png'

class Goku extends Component {

  render() {
    const {state, addHits, name} = this.props

    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <img src={goku} alt='goku' width={300} /> <br />
          <button onClick={addHits} style={{backgroundColor: 'green', fontSize: '20px', color: 'white', borderRadius: '5px'}}>{name} Frappe</button><br />
          <table style={styles.table}>
             <thead >
                <tr>
                 <th style={styles.th}>Coups </th> 
                </tr>
             </thead>
             <tbody>
                 <tr>
                    <td style={styles.td}>{state}</td>
                 </tr>
             </tbody>
          </table>
      </div>
    )
  }
}

const styles = {
    table: {
        fontFamily: 'arial, sans-serif',
        borderCollapse: 'collapse',
        width: '100%',
      },
      
      td :{
        border: '1px solid #dddddd',
        padding: '8px',
        textAlign: 'center'
      },
      
      th :{
        border: '1px solid #dddddd',
        padding: '8px',
        textAlign: 'center'
      },
}

export default Goku
