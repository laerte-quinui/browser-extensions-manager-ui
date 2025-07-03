import { useState } from 'react'

const FilterButtons = () => {
  const [filter, setFilter] = useState('all')

  const buttons = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' }
  ]

  return (
    <div className='filter-buttons'>
      {buttons.map(btn => (
        <button
          key={btn.value}
          onClick={() => setFilter(btn.value)}
          className={`btn ${filter === btn.value ? 'btn-active' : ''}`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons
