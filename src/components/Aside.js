import { Link } from "react-router-dom";
import "./Aside.css"

function Aside (){
    return(
        
        <div id="aside">
            <div id="subscribe">

                <form action="#" method="post">
                    <fieldset>
                    <input id="emailSubscribe" type="email" 
                    placeholder="ENTER YOUR EMAIL"/>
                    <input id="subscribeButton" type="button" value="SUBSCRIBE" 
                    onClick={()=> alert("로그인 후 이용해주세요")}
                    />
                    </fieldset>
                </form>
            </div>


        <div id="sitemap">
            <div id="text">
            <dl>
                <dt>주식회사 &nbsp; <span>엠도씨</span></dt>
                <dd>157-861 서울 강서구 염창동 240-21번지 우림 블루나인 A1006</dd>
                <dd>A1006, Woolimblue9, Yeomchang-dong,Gangseo-gu, Seoul, Korea 157861</dd>
                <dd>Tel : 02_2093_3380 Fax : 02_2093_3381</dd>
            </dl>
            </div>

            <div id="maplink">
            <dl>
                <dd><Link to="/join">회원가입</Link></dd>
                <dd><Link to="/login">로그인</Link></dd>
                <dd><Link to="/productList">전체상품</Link></dd>
                <dd><Link to="/event">이벤트</Link></dd>
            </dl>
            <dl>
            <dd><Link to="/worryList">피부 고민 상담</Link></dd>
            <dd><Link to="/review">리뷰</Link></dd>
            <dd><Link to="/wishList">장바구니</Link></dd>
            <dd> <Link to="/aboutUs">ABOUT US</Link></dd>
            </dl>

            </div>
        </div>
        </div>
        
        
    )
}

export default Aside;