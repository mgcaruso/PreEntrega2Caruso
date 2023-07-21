import Contact from './Contact/Contact';
import FollowUs from './FollowUs/FollowUs';
import './footer.css'



const Footer = () => {


    return (

        <footer className="bg-primary-inverted flex justify-around text-primary font-body text-sm flex-wrap flex-col md:flex-row sm:flex-row py-6">
            <section className='a-footer flex flex-col-reverse md:flex-row sm:flex-row'>

                <Contact />
                <section className="left basis-2/6">
                    <div className="first-section w-full justify-center">
                        <h3 className="uppercase text-center">Our Products</h3>
                        <div className="divider"></div>

                    </div>
                    <div className="second-section justify-center items-center">
                        <p className="text-justify font-thin">Solvix is your ultimate destination for high-quality Rubik&apos;s cubes. Explore our collection and embark on an exciting journey of problem-solving and fun. Happy cubing!</p>

                    </div>
                </section>

                <FollowUs />




            </section>


            <section className='b-footer'>
                <div className="divider"></div>
                <p className='font-thin text-xs text-center py-3'>© 2023 Copyright: Guadalupe Caruso</p>
            </section>
        </footer>
    )
}

export default Footer
