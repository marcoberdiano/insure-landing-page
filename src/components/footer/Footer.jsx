import logo from '../../images/logo.svg';
import {ReactComponent as Facebook} from '../../images/icon-facebook.svg';
import {ReactComponent as Twitter} from '../../images/icon-twitter.svg';
import {ReactComponent as Pinterest} from '../../images/icon-pinterest.svg';
import {ReactComponent as Instagram} from '../../images/icon-instagram.svg';
import patternFooter from '../../images/bg-pattern-footer-desktop.svg';
import patternFooterMobile from '../../images/bg-pattern-footer-mobile.svg';

const Footer = () => {
    return ( 
        <footer className="footer-container">
            <img className='footer-img' src={patternFooter} alt="pattern footer" />
            <img className='footer-img-mobile' src={patternFooterMobile} alt="pattern footer" />
            <div className='footer-social'>
                <img className='logo' src={logo} alt="logo" />
                <div className='social-links flex'>
                    <Facebook className='social'/>
                    <Twitter className='social'/>
                    <Pinterest className='social'/>
                    <Instagram className='social'/>
                </div>
            </div>
            <div className="footer-links">
                <div className="links">
                    <p>Our company</p>
                    <ul>
                        <li>How we work</li>
                        <li>Why Insure?</li>
                        <li>View plans</li>
                        <li>Reviews</li>
                    </ul>
                </div>
                <div className="links">
                    <p>Help me</p>
                    <ul>
                        <li>FAQ</li>
                        <li>Terms of use</li>
                        <li>Privacy policy</li>
                        <li>Cookies</li>
                    </ul>
                </div>
                <div className="links">
                    <p>Contact</p>
                    <ul>
                        <li>Sales</li>
                        <li>Support</li>
                        <li>Live chat</li>
                    </ul>
                </div>
                <div className="links">
                    <p>Others</p>
                    <ul>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Licenses</li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;