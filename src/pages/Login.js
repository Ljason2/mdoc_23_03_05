import { Link } from "react-router-dom";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import "./Login.css"

function Login(){
    return(
        <div id="login">
            <div id="login2">
                <div id="login3">
        <form action="#" method="post">
            <fieldset>
                <legend><h1><img src="/img/mdocLogo.jpg" alt="logo" /><span>MEMBERS <span>LOGIN</span></span></h1></legend>

                <p id="idpass">
            <label htmlFor="userId">아이디</label>
            <input type="text" 
            id="userId" name="userId"
            maxlength="12"
            placeholder="12자 이내로 입력 가능"/>
        </p>

        <p>
            <label htmlFor="userPw">비밀번호</label>
            <input type="password" id="userPw" name="userPw"
            />
        </p>
        

        <p id="logincancel">
        <input type="submit" value="로그인" />
	    <input type="reset" value="취소" />
		</p>

        <p id="security">
            <label htmlFor="security">
                <input type="checkbox" id="security" name="security" value="Y" />
                보안접속
            </label>
        </p>
            </fieldset>
        </form>

        <div id="simpleLogin">
        <p>
            <img src="./img/simpleLogin.png" alt="simpleLogin" />
        </p>
        <div>
            <Link to="https://www.facebook.com/">
                <img src="./img/sns_facebook.gif" alt="facebookLogin" />
            </Link>
            <Link to="https://www.naver.com/">
                <img src="./img/sns_naver.gif" alt="naverLogin" />
            </Link>
            <Link to="https://www.kakaocorp.com/page/service/service/KakaoTalk">
                <img src="./img/sns_kakaotalk.gif" alt="kakaotalkLogin" />
            </Link>
            <Link to="https://www.apple.com/kr/store?afid=p238%7CsiADh6hbK-dc_mtid_18707vxu38484_pcrid_647265297067_pgrid_16348496961_pntwk_g_pchan__pexid__&cid=aos-kr-kwgo-Brand--slid---product-">
                <img src="./img/sns_apple.gif" alt="appleLogin" />
            </Link>


        </div>
        </div>
        <div id="signup">
        <h1>sign <span>up</span></h1>
        <p>회원가입을 하시면 더 많은 혜택을 받을실 수 있습니다.</p>
        
        <div className="btns">
        <Link to="/join">
        <button>회원가입하기</button>
        </Link>
        <Link to="/login">
        <button>아이디/비번찾기</button>
        </Link>
        </div>
        </div>
        </div>
        </div>
        <Aside />
        <Footer />
        </div>

        )
}

export default Login;