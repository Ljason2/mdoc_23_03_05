import Aside from "../components/Aside";
import Footer from "../components/Footer";
import "./Join.css"

function Join(){
    return(
        <div id="join">
        <div id="join2">

        <form action="#" method="post">
            <fieldset>
                <legend><h2>필수정보</h2></legend>

        <p>
            <label htmlFor="userJoinName">이름</label>
            <input type="text" 
            id="userJoinName" name="userJoinName"/>
        </p>

        <p>
            <label htmlFor="userJoinId">아이디</label>
            <input type="text" 
            id="userJoinId" name="userJoinId"/>
        </p>


        <p>
            <label htmlFor="userJoinPw">비밀번호</label>
            <input type="password" id="userJoinPw" name="userJoinPw"
            />
        </p>

        <p>
            <label htmlFor="userJoinPw2">비밀번호확인</label>
            <input type="password" id="userJoinPw2" name="userJoinPw2"
            />
        </p>


        <p>
            <label htmlFor="userEmail">이메일</label>
            <input type="email" id="userEmail" name="userEmail"
            placeholder="aaa@naver.com"
            />
        </p>

        <p>
            <label htmlFor="userTel">전화번호</label>
            <input type="tel" id="userTel" name="userTel"
            placeholder="번호만 입력해주세요"
            />
        </p>

    
        <p>
            <label htmlFor="overAge">
                <input type="checkbox" id="overAge" value="Y" />
                만 14세 이상입니다. &lt;필수&gt;
            </label>
        </p>

        <p id="joinButton">
        <input type="submit" value="가입하기" />
	    <input type="reset" value="취소" />
		</p>
            </fieldset>
        </form>
        </div>
        <Aside />
        <Footer />
        </div>
        )
}

export default Join;