import './ratingSection.css'
import solvixLogo from '../../assets/images/logo-no-letters.png'

const RatingSection = () => {

    return (
        <div className='rating-box min-h-[50vh] flex sm:flex-row flex-col'>
            <div className="a-section flex justify-center items-center basis-1/2 border-box relative bg-gradient-to-r from-transparent to-black flex-col">
                <img className='p-5 h-40 absolute s' src={solvixLogo} alt="Cube" />
                <svg id="rotatingText" viewBox="0 0 200 200" width="260" height="260">
                    <defs>
                        <path
                            id="circle"
                            d="M 100, 100
                                m -75, 0
                                a 75, 75 0 1, 0 150, 0
                                a 75, 75 0 1, 0 -150, 0"
                        />
                    </defs>
                    <text width="400">
                        <textPath xlinkHref="#circle" className="text">
                            SOLVIX: Trusted by Cubers Worldwide!
                        </textPath>
                    </text>
                </svg>

                <img className='absolute -z-10 object-fill object-center w-full h-full' src="https://c4.wallpaperflare.com/wallpaper/27/482/424/geometry-abstract-digital-art-cube-wallpaper-preview.jpg" alt="Background image of cubes" />

            </div>
            <div className='min-h-[50vh] b-section w-full  relative overflow-hidden flex basis-1/2 '>
                <div className="heading-frame ">
                    <h2 className='pic-title text-primary-hover'>32K+<br />trusted</h2>
                </div>
            </div>
        </div>
    )
}

export default RatingSection
