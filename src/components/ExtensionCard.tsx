import { useState } from 'react'
import '../styles/extension-card.css'

interface Props {
  logo: string
  name: string
  description: string
  isActive: boolean
}

const ExtensionCard = ({ logo, name, description, isActive: isOn }: Props) => {
  const [isActive, setIsActive] = useState(isOn)

  return (
    <div className='extension-card'>
      <div className='extension-card__header'>
        <img src={logo} alt={`${name} logo`} className='extension-card__logo' />
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>

      <div className='extension-card__footer'>
        <button className='btn btn-sm btn-outline'>Remove</button>
        <button
          className={`switch-btn ${isActive ? 'switch-active' : ''}`}
          onClick={() => setIsActive(!isActive)}
        >
          <span className='switch-btn__thumb' />
        </button>
      </div>
    </div>
  )
}

export default ExtensionCard
