import {Home}  from "./Pages/Home"
import {Inbox}  from "./Pages/Inbox"
import {Profile}  from "./Pages/Profile"
import {Navbar} from './Comps/Navbar'

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div class="text-white">
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
    <Navbar />

    </div>
  );
}

export default App;
