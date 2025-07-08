import { useState } from 'react'
import './App.css'
import ExtensionCard from './components/ExtensionCard'
import FilterButtons from './components/FilterButtons'
import Navbar from './components/Navbar'
import data from './data.json'
import './styles/button.css'

export type FilterType = 'all' | 'active' | 'inactive'

function App() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [extensions, setExtensions] = useState(data)

  const handleToggleActive = (name: string) => {
    setExtensions(prev =>
      prev.map(ext =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    )
  }

  return (
    <div className='container'>
      <Navbar />

      <div className='header'>
        <h1>Extensions List</h1>
        <FilterButtons filter={filter} setFilter={setFilter} />
      </div>

      <div className='extensions'>
        {extensions
          .filter(extension =>
            filter !== 'all'
              ? filter === 'active'
                ? extension.isActive === true
                : extension.isActive === false
              : extension
          )
          .map(extension => (
            <ExtensionCard {...extension} onToggleActive={handleToggleActive} />
          ))}
      </div>
    </div>
  )
}

export default App
