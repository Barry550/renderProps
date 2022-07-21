import './App.css';
import Vegeta from './component/Vegeta';
import Goku from './component/Goku';
import AddHits from './component/AddHits';

function App() {
  
  return (
    <div className="App">
    <h1 style={{fontSize: '40px'}}>Vegeta Vs Goku vs Broly</h1>
    <h3>medaille de bronze</h3>
    <h2>tes trop fort</h2>
    <h3>medaille de bronze</h3>
    <h3>medaille de bronze</h3>
    <h3>medaille de bronze</h3>
<<<<<<< HEAD
    <h3>medaille d'or</h3>
=======
    <h3>medaille d'argent</h3>
>>>>>>> 0fddc93fb8dbd3109e282e2322fd6d4d934680aa
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
