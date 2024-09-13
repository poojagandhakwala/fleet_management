import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Fleets from './components/Fleets'
import AddFleet from './components/AddFleet'
import EditFleet from './components/EditFleet'

function App() {

  return (
    <Router>
      <div className='min-h-screen bg-[#283246] p-3 w-full'>
        <div className='flex flex-row max-lg:flex-col w-full h-full px-5 py-3 max-lg:items-start'>
          <div className="w-1/6 max-lg:w-full">
            <Menu />
          </div>
          <div className="w-5/6 max-lg:w-full">
            <Routes>
              <Route path='/' element={<Fleets />} />
              <Route path='/add-fleet' element={<AddFleet />} />
              <Route path='/edit-fleet' element={<EditFleet />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
