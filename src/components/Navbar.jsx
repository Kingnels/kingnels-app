
import {Link} from 'react-router-dom';
import { FaBars, FaTimes, FaVaadin,} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import {Button} from './Button';
import './Navbar.css'

const Navbar = () => {
    const [click, setClick]= useState(false)
    const [button, setButton] = useState(true)
    const showButton= () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    } ;
    useEffect(() => {
        showButton();
      }, []);
    window.addEventListener('resize', showButton);
  
    
    function handleClick (){setClick(!click)} 
    const closeMobileMenu =()=>{setClick(false)}

  return (
    <div> 
        <nav className="navbar">
         <div className="nav-container">
         <Link to ='/' className='navbar-logo' onClick={closeMobileMenu}>
                VACAY <FaVaadin className='logo' onClick={closeMobileMenu}/>
            </Link>

            <div className="menu-icon"onClick={handleClick}>
                {click? 
                <FaTimes className = {click ? "fa-times": "fa-bars"}/> : <FaBars className={click ? "Fa-times": "fa-bars"}/> 
                }
            </div>

            <ul className={click? "nav-menu active":"nav-menu"}>

                <li className='nav-item'>
                    <Link 
                    to='/' 
                    className='nav-links'
                    onClick={closeMobileMenu}
                    >Home
                    </Link>                    
                </li>

                <li className='nav-item'>
                    <Link 
                        to='/Services' 
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >   Services
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link 
                        to='/Products'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >   Products
                    </Link>
                </li>  

                <li className='nav-item'>
                    <Link 
                        to='/SignUp' 
                        className='nav-links-mobile'
                        onClick={closeMobileMenu}
                    >
                        SIGN UP
                    </Link>
                </li>  
            </ul>
            {button && < Button buttonStyle ='btn--outline' >JOIN</Button>}
            </div>
        </nav>
    </div>
  )
}

export default Navbar