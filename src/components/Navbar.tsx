import SunIcon from '../assets/images/icon-sun.svg?react'
import Logo from '../assets/images/logo.svg?react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo className='logo' />
      <ThemeButton />
    </div>
  )
}

const ThemeButton = () => {
  return (
    <button className='theme-button'>
      <SunIcon />

      <div className='tooltip'>
        <span>Change theme</span>
      </div>
    </button>
  )
}

export default Navbar
