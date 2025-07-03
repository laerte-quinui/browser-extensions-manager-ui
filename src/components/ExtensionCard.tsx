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
  const [showAlert, setShowAlert] = useState(false)

  return (
    <>
      <div className='extension-card'>
        <div className='extension-card__header'>
          <img
            src={logo}
            alt={`${name} logo`}
            className='extension-card__logo'
          />
          <div>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>

        <div className='extension-card__footer'>
          <button
            className='btn btn-sm btn-outline'
            onClick={() => setShowAlert(true)}
          >
            Remove
          </button>
          <button
            className={`switch-btn ${isActive ? 'switch-active' : ''}`}
            onClick={() => setIsActive(!isActive)}
          >
            <span className='switch-btn__thumb' />
          </button>
        </div>
      </div>

      <AlertDelete isVisible={showAlert} setIsVisible={setShowAlert} />
    </>
  )
}

const AlertDelete = ({
  isVisible,
  setIsVisible
}: {
  isVisible: boolean
  setIsVisible: (value: boolean) => void
}) => {
  const visibilityClass = isVisible ? 'alert-visible' : ''

  return (
    <>
      <div
        className={`alert__bg ${visibilityClass}`}
        onClick={() => setIsVisible(false)}
      />
      <div className={`alert ${visibilityClass}`}>
        <h2>Hold up!</h2>
        <p>Are you sure you want to remove this extension?</p>
        <div className='alert__buttons'>
          <button className='btn btn-sm' onClick={() => setIsVisible(false)}>
            Cancel
          </button>
          <button className='btn btn-sm btn-active'>Remove</button>
        </div>
      </div>
    </>
  )
}

export default ExtensionCard
