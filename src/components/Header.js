import { Link, NavLink } from "react-router-dom";
import "./Header.css"
import { HiSearch } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import $ from 'jquery'


$(function(){
    // $(window).scroll()
    $(window).on('scroll',function(e){
          // $('body').css('background-color','pink')
          // let num =$(document).scrollTop();
          // console.log(num)

     let num2= $(document).scrollTop();

     if(num2>= 125){
        $('#header2').css('display','flex')
     }

     if(num2<= 125){
        $('#header2').css('display','none')
   }

    })
})


function Header(){
    function getLinkStyle({isActive}){
        return {
            textDecoration:isActive ? "underline":""
        }
    }
    

    return(
        <>
        <header>
            <div>
                <h1>
                <Link to="/">
                <img src="/img/mdocLogo.jpg" alt="mdocLogo" />
                </Link>
                </h1>

                <div>
                <nav id="lognav">
                    <ul>
                        <li><Link to="/wishList"><BsFillCartFill /></Link></li>
                        <li><AiOutlineUser />
                        <ul>
                        <li><Link to="/join">회원가입</Link></li>
                        <li><Link to="/login">로그인</Link></li>
                        </ul>
                        </li>
                    </ul>
                </nav>


                <nav id="mdocmenu">
                    <ul>
                        <li><NavLink to="/review" style={getLinkStyle}>리뷰</NavLink></li>
                        <li><NavLink to="/worryList" style={getLinkStyle}>피부고민상담</NavLink></li>
                        <li><NavLink to="/aboutUs" style={getLinkStyle}>ABOUT US</NavLink></li>
                        <li><NavLink to="/event" style={getLinkStyle}>이벤트</NavLink></li>
                        <li><NavLink to="/productList" style={getLinkStyle}>전체상품</NavLink></li>
                    </ul>
                </nav>

                <div>
                    <form action="#" method="post">
                        <fieldset>
                            <input type="search" />
                            <button type="button" onClick={()=> alert("전체상품 페이지 검색창을 이용해주세요.")}><HiSearch /></button>
                        </fieldset>
                    </form>
                </div>
                </div>
            </div>
        </header>
        <div id="header2">
                <nav>
                    <ul>
                        <li><NavLink to="/review" style={getLinkStyle}>리뷰</NavLink></li>
                        <li><NavLink to="/worryList" style={getLinkStyle}>피부고민상담</NavLink></li>
                        <li><NavLink to="/aboutUs" style={getLinkStyle}>ABOUT US</NavLink></li>
                        <li><NavLink to="/event" style={getLinkStyle}>이벤트</NavLink></li>
                        <li><NavLink to="/productList" style={getLinkStyle}>전체상품</NavLink></li>
                    </ul>
                </nav>
        </div>
        </>
    )
}


export default Header;