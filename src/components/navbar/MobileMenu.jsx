import NavLinks from "./NavLinks";
import imgMobileNav from '../../images/bg-pattern-mobile-nav.svg';
//import {ReactComponent as ImgMobileNav} from '../../images/bg-pattern-mobile-nav.svg';

const MobileMenu = () => {
    return ( 
        <div className="mobile-menu">
            <NavLinks/>
            <img className="img-mobile-nav" src={imgMobileNav} alt="mobile bg" />
        </div>
     );
}
 
export default MobileMenu;