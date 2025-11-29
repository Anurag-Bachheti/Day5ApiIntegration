import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User1 from './components/User1';
import SendUser1 from './components/SendUser1';
import AddUser1 from './components/AddUser1'
import './App.css'

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/" element=
          {<>
            {/* <User1/> */}
            <SendUser1/>
            <AddUser1/>
          </>}
        />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
