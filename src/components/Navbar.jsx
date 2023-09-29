
import {Link} from 'react-router-dom';
import { FaBars, FaTimes, FaVaadin,} from 'react-icons/fa';
import { useState } from 'react';
import {Button} from './Button';

const Navbar = () => {
    const [click, setClick]= useState(false)
    const [button, setButton] = useState(true)

    const showButton= () =>{
        if(Window.innerwidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    } ;
    Window.addEventListener('resize', showButton);

    function handleClick (){
        setClick(!click)
    } 

    const closeMobileMenu= ()=>{
        setClick(false)
    }


  return (
    <div> 
        <nav className="navbar">
         <div className="nav-container">
            <Link to ='/' className='Logo'>
                VACAY<FaVaadin/>
            </Link>
            <div className="menu-icon"onClick={handleClick}>
                {
                click? 
                <FaTimes className = {click ? "Fa-times": "fa-bars"}/> : <FaBars className={click ? "Fa-times": "fa-bars"}/> 
                }
            </div>

            <ul className={click? "nav-menu-active":"nav-menu"}>

                <li className='nav-item'>
                    <Link 
                    to='/' 
                    className='nav-link'
                    onClick={closeMobileMenu}
                    >Home
                    </Link>                    
                </li>

                <li className='nav-item'>
                    <Link 
                        to='/Services' 
                        className='nav-link'
                        onClick={closeMobileMenu}
                    >   Services
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link 
                        to='/Products'
                        className='nav-link'
                        onClick={closeMobileMenu}
                    >   Products
                    </Link>
                </li>  

                <li className='nav-item'>
                    <Link 
                        to='/Sign-up' 
                        className='nav-link-mobile'
                        onClick={closeMobileMenu}
                    >
                        Sign Up
                    </Link>
                </li>  
            </ul>
            {button && <Button buttonStyle = 'btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </div>
  )
}

export default Navbar