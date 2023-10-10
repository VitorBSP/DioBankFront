import {
  ChakraProvider,
} from '@chakra-ui/react'

import { Layout } from './components/Layout';
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Conta from './pages/Conta';
import ContaInfo from './pages/ContaInfo';

function App() {
  const [value, setValue] = useState(0)
  console.log(value)
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={<Conta />} />
            <Route path='/containfo' element={<ContaInfo />} />
            <Route path='/teste' element={
              <h1>Mostrando como definir uma páginas sem componentização</h1>
            } />
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
    // <ChakraProvider>
    //   <Layout>
    //     <Card />
    //     <div>
    //       <button onClick={() => setValue(value + 1)}>
    //         Add
    //       </button>
    //       <h1>{value}</h1>
    //     </div>
    //   </Layout>
    // </ChakraProvider>

  );
}

export default App;
