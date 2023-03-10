import { Link } from "react-router-dom";
import "./Footer.css"




function Footer(){
    return(
        <footer>
            <div>
            &copy; MdoC 2023
            <div>
               <Link to="https://www.facebook.com/"><img src="/img/facebook.png" alt="facebooklogo" /></Link>
            <Link to="https://www.instagram.com/"><img src="/img/instagram.png" alt="instagramlogo" /></Link>
             <Link to="https://twitter.com/home?lang=ko"><img src="/img/twiter.png" alt="twiterlogo" /></Link>
               <Link to="https://www.youtube.com/"><img src="/img/youtube.png" alt="youtubelogo" /></Link>
             <Link to="https://www.tiktok.com/ko-KR/"><img src="/img/tictok.png" alt="tictoklogo" /></Link> 
            </div>
            </div>
        </footer>
    )
}

export default Footer;