import {Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

const Shop = () => {
  <div>I'm the shop.</div>
}

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='home' element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>

    </Routes>
  );
}

export default App;
