import type { FilterType } from '../App'

const FilterButtons = ({
  filter,
  setFilter
}: {
  filter: FilterType
  setFilter: (value: FilterType) => void
}) => {
  const buttons: { label: string; value: FilterType }[] = [
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
