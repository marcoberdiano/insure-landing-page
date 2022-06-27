import snappy from '../../images/icon-snappy-process.svg'
import affordable from '../../images/icon-affordable-prices.svg'
import people from '../../images/icon-people-first.svg'

const Main = () => {
    return (
        <> 
        <section className="advantage-container">
            <h1 className="title advantage-title">We're different</h1>
            
            <div className="flex-container">

                <div className="flex-item">
                    <img className="flex-img" src={snappy} alt="" />
                    <h2 className="flex-title">Snappy Process</h2>
                    <p className="flex-paragraph">
                        Our application process can be completed in minutes, not hours. Don’t get 
                        stuck filling in tedious forms.
                    </p>
                </div>

                <div className="flex-item">
                    <img className="flex-img" src={affordable} alt="" />
                    <h2 className="flex-title">Affordable Prices</h2>
                    <p className="flex-paragraph">
                        We don’t want you worrying about high monthly costs. Our prices may be low, 
                        but we still offer the best coverage possible.
                    </p>
                </div>

                <div className="flex-item">
                    <img className="flex-img" src={people} alt="" />
                    <h2 className="flex-title">People First</h2>
                    <p className="flex-paragraph">
                        Our plans aren’t full of conditions and clauses to prevent payouts. We make 
                        sure you’re covered when you need it.
                    </p>
                </div>

            </div>

        </section>

        <section className='more-info-container'>
            <h1 className='text'>Find out more <br/> about how we work</h1>
            <button className='btn'>How we work</button>
        </section>
        </>
     );
}
 
export default Main;