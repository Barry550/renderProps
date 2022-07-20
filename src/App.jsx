import './App.css';
import Vegeta from './component/Vegeta';
import Goku from './component/Goku';
import AddHits from './component/AddHits';

function App() {
  
  return (
    <div className="App git">
    <h1 style={{fontSize: '40px'}}>Vegeta Vs Goku</h1>
    <hr/>
    <div className="container">
        <AddHits render={(state, addHits, name)=> (
          <>
              <Vegeta name={name.vegeta} state={state} addHits={addHits}/> 
          </>
        )}/>

        <AddHits render={(state, addHits, name)=> (
          <>
             <Goku name={name.goku} state={state} addHits={addHits}/>
          </>
        )}/>
    </div>
  </div>
  );
}

export default App;
