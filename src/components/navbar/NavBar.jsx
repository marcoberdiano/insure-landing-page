import logo from '../../images/logo.svg';
import iconHamburger from '../../images/icon-hamburger.svg';
import iconClose from '../../images/icon-close.svg';
import DeskMenu from './DeskMenu';
import MobileMenu from './MobileMenu';
import  {useState} from 'react';

const NavBar = () => {
    const [show, setShow] = useState(false);
    return ( 
        <nav className='nav'>
            
            <div className='nav-container'>
                <img className='logo' src={logo} alt="logo" />
            
                <div className="icon-hamburger" onClick={()=>setShow(!show)}>
                    {!show 
                        ? <img src={iconHamburger} alt="icon hamburger" /> 
                        : <img src={iconClose} alt="icon close" />
                    }
                </div>

                <DeskMenu/> 
            </div>

            {show && <MobileMenu/>}
            
        </nav>
     );
}
 
export default NavBar;