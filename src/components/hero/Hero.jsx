import imgHero from '../../images/image-intro-desktop.jpg';
import bgImgRight from '../../images/bg-pattern-intro-right-desktop.svg';
import bgImgLeft from '../../images/bg-pattern-intro-left-desktop.svg';
import bgImgLeftMobile from '../../images/bg-pattern-intro-left-mobile.svg';
import bgImgRightMobile from '../../images/bg-pattern-intro-right-mobile.svg';
import imgHeroMobile from '../../images/image-intro-mobile.jpg';

const Hero = () => {
    return ( 
        <header className="hero-container">
            
            <div className="hero-left">
                <h1 className='title hero-title'>Humanizing <br /> your insurance.</h1>
                <p className='paragraph'>
                    Get your life insurance coverage easier and faster. We blend our expertise 
                    and technology to help you find the plan that’s right for you. Ensure you 
                    and your loved ones are protected.
                </p>
                <button className='btn'>view plans</button>
                <img className='bg-left' src={bgImgLeft} alt="" />
                <img className='bg-left-mobile' src={bgImgLeftMobile} alt="" />
                <img className='bg-right-mobile' src={bgImgRightMobile} alt="" />
            </div>
            <div className="hero-right">
                <img className='bg-right' src={bgImgRight} alt="" />
                <img className='img-hero' src={imgHero} alt="hero" />
                <img className='img-hero-mobile' src={imgHeroMobile} alt="hero mobile" />
            </div>
        </header>
     );
}
 
export default Hero;