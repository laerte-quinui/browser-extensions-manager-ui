import { useEffect, useState } from 'react'
import MoonIcon from '../assets/images/icon-moon.svg?react'
import SunIcon from '../assets/images/icon-sun.svg?react'
import Logo from '../assets/images/logo.svg?react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo className='logo' />
      <ThemeButton />
    </div>
  )
}

const ThemeButton = () => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  localStorage.setItem('theme', 'dark')
  useEffect(() => {
    localStorage.setItem('theme', theme)

    const storedTheme = localStorage.getItem('theme')
    const body = document.getElementsByTagName('body')[0]
    if (body) body.setAttribute('data-theme', storedTheme!)
  }, [theme])

  return (
    <button className='theme-button' onClick={toggleTheme}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}

      <div className='tooltip'>
        <span>Change theme</span>
      </div>
    </button>
  )
}

export default Navbar
