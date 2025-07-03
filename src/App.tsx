import './App.css'
import ExtensionCard from './components/ExtensionCard'
import FilterButtons from './components/FilterButtons'
import Navbar from './components/Navbar'
import data from './data.json'
import './styles/button.css'

function App() {
  return (
    <div className='container'>
      <Navbar />

      <div className='header'>
        <h1>Extensions List</h1>
        <FilterButtons />
      </div>

      <div className='extensions'>
        {data.map(extension => (
          <ExtensionCard
            key={extension.name}
            logo={extension.logo}
            name={extension.name}
            description={extension.description}
            isActive={extension.isActive}
          />
        ))}
      </div>
    </div>
  )
}

export default App
