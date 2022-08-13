import { Route, Routes } from 'react-router-dom'
import { useState, createContext } from 'react'

import { Header } from './components/Header'
import { Home } from './components/pages/Home'
import { Cart } from './components/pages/Cart'
import { NotFound } from './components/pages/NotFound'

import './scss/app.scss'

export const AppContext = createContext()

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className='wrapper'>
      <AppContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home searchValue={searchValue} setSearchValue={setSearchValue} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </div>
  )
}

export default App
