import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { NavLinks } from '../components'
import { useEffect, useState } from 'react';

const themes ={
  dracula:'dracula',
  winter:'winter'
}

const getthemefromlocal = () => { 
  return localStorage.getItem("theme")||themes.winter
 }

const Navbar = () => {
  const [theme, settheme] = useState(getthemefromlocal);
  const handletheme = () => {
    const {dracula,winter}=themes
    const newtheme = theme === winter?dracula:winter;
    settheme(newtheme)
  }

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme",theme)
    localStorage.setItem("theme",theme)
  },[theme])
  return (
    <nav className=' bg-base-200'>

      <div className='navbar align-element'>

        <div className="navbar-start">
          <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl items-center '>H</NavLink>
          <div className="dropdown">
            <label tabIndex={0} className=' btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='h-6 w-6'/>
            </label>
            <ul tabIndex={0} className=' menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 z-[1] rounded w-52'>
              <NavLinks/>
            </ul>
          </div>
        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className='menu menu-horizontal'>
            <NavLinks/>
          </ul>
        </div>


        <div className="navbar-end">
        <label className="swap swap-rotate">
  
      {/* this hidden checkbox controls the state */}
        <input type="checkbox"  onChange={ handletheme} />
  
      {/* sun icon */}
        <BsSunFill className=' swap-on w-6 h-6'/>
  
      {/* moon icon */}
        <BsMoonFill className=' swap-off w-6 h-6'/>
      </label>

          <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className=' indicator'>
              <BsCart3 className=' w-6 h-6'/>
              <span className=' badge badge-sm badge-primary indicator-item '>8</span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar