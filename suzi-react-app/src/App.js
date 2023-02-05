// import Counter from './Components/Counter';
import { useState } from 'react';
import Login from './Components/Login'
function App() {
  const [seen, setSeen] = useState(false)
  return (
    <>
    {
      seen && <Login/>
    }
    <button onClick = {()=>{
        setSeen(!seen)
      }}>
      Click for Login
    </button>
    </>
  );
}

export default App;
