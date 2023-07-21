import '../../index.css'
import HeadBanner from '../../components/HeadBanner/HeadBanner'
import logoSolvix from '../../assets/images/logo-no-letters.png'
import video from '../../assets/videos/video3.mp4'
import RatingSection from '../../components/RatingSection/RatingSection'



const Home = () => {
    return (
        <>
            <main className="flex justify-center items-center relative bg-gradient-to-r from-primary from-30% to-transparent flex-row">
                <img className="logo-img drop-shadow-md p-8" src={logoSolvix} alt="Animated Rubik's Cube" />
                <div className="flex flex-col">
                    <HeadBanner greeting={"Solvix"} slogan={"Your Online Shop for Unmatched Cubing Excellence."} />
                </div>
                <video loop autoPlay muted className="-z-10 object-cover w-full h-full absolute filter grayscale background" src={video}></video>
            </main>
            <RatingSection />
        </>
    )
}

export default Home
