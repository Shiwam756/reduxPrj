import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { inc,dec } from './states/reducers';

function App() {
  const counter = useSelector((state)=> state.number)
  const dispatch = useDispatch();
  return (
    <div className="App">
<h1 className='text'>Increament Decreament App using React Redux</h1>
<div className='main'>
  <h1 className='number'>{counter}</h1>
  <div className='buttons'>
    <button className='btn' onClick={()=> dispatch(inc(10))}>Increament</button>
    <button className='btn' onClick={()=> dispatch(dec(5))}>Decreament</button>
  </div>
</div>
    </div>
  );
}

export default App;
