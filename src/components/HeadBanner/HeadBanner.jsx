import CallBtn from "../CallBtn/CallBtn"
import './headBanner.css'
import { Link as LinkRouter } from 'react-router-dom'

const HeadBanner = ({ greeting, slogan }) => {
    return (
        <div className="banner-container flex flex-col justify-center">
            <h1 className="heading flex text-7xl font-medium font-heading">
                {greeting}
            </h1>
            <h2 className="slogan text-3xl font-body">{slogan}</h2>
            <LinkRouter to="products">
                <CallBtn word={"begin"} />
            </LinkRouter>
        </div>
    )
}

export default HeadBanner;
