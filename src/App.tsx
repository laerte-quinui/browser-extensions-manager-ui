import './App.css'
import FilterButtons from './components/FilterButtons'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='container'>
      <Navbar />

      <div className='header'>
        <h1>Extensions List</h1>
        <FilterButtons />
      </div>
    </div>
  )
}

export default App
