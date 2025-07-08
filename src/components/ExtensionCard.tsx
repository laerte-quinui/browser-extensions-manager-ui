import { useState } from 'react'
import '../styles/extension-card.css'

interface Props {
  logo: string
  name: string
  description: string
  isActive: boolean
  onToggleActive: (name: string) => void
}

const ExtensionCard = ({
  logo,
  name,
  description,
  isActive,
  onToggleActive
}: Props) => {
  const [showAlert, setShowAlert] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      <div className={`extension-card ${isVisible ? '' : 'hidden'}`}>
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
            onClick={() => onToggleActive(name)}
          >
            <span className='switch-btn__thumb' />
          </button>
        </div>
      </div>

      <AlertDelete
        name={name}
        isVisible={showAlert}
        setIsVisible={setShowAlert}
        setIsExtensionVisible={setIsVisible}
      />
    </>
  )
}

const AlertDelete = ({
  name,
  isVisible,
  setIsVisible,
  setIsExtensionVisible
}: {
  name: string
  isVisible: boolean
  setIsVisible: (value: boolean) => void
  setIsExtensionVisible: (value: boolean) => void
}) => {
  const visibilityClass = isVisible ? 'alert-visible' : ''

  const handleRemoveExtension = () => {
    setIsExtensionVisible(false)
    setIsVisible(false)
  }

  return (
    <>
      <div
        className={`alert__bg ${visibilityClass}`}
        onClick={() => setIsVisible(false)}
      />
      <div className={`alert ${visibilityClass}`}>
        <h2>Hold up!</h2>
        <p>
          Are you sure you want to remove the extension{' '}
          <span className='extension-name'>{name}</span>?
        </p>
        <div className='alert__buttons'>
          <button className='btn btn-sm' onClick={() => setIsVisible(false)}>
            Cancel
          </button>
          <button
            className='btn btn-sm btn-active'
            onClick={handleRemoveExtension}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  )
}

export default ExtensionCard
