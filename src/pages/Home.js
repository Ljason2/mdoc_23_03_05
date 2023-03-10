import { Link } from "react-router-dom";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import "./Home.css"
import $ from 'jquery';



$(function(){
    // ㅡㅡㅡㅡㅡㅡㅡ 움직이기ㅡㅡㅡㅡㅡㅡㅡㅡ
    
    
        // 준비하기
        let liWidth2= $('#show>ul>li').width();
        $('#show>ul>li:last').prependTo('#show>ul');     
        $('#show>ul').css('margin-left','-'+liWidth2+'px');
        let str2;
        
        
        // 타이머 작동
        timer2()
        
        // 타이머에 들어가는 함수
        function ani2(){
                $('#show>ul').animate({marginLeft:"+="+liWidth2+"px"},function(){
                        $('#show>ul>li:last').prependTo('#show>ul');
                        $('#show>ul').css('marginLeft','-'+liWidth2+'px');
                })
        }
        
    
        // 타이머를 작동시키는 함수
        
        function timer2(){
                str2 = setInterval(ani2,3000)
        }
        
        
        // 타이머를 중단시키는 함수
        function stop2(){
                clearInterval(str2)
        }
        
        
        // 타이머 이벤트 작동
        
        
        $('#show>ul>li').each(function(){
                $(this).on('mouseenter',function(){
                        stop2();
                })
        })
        
        
        $('#show>ul>li').each(function(){        
                $(this).on('mouseleave',function(){
                        timer2();
                })
        })


        // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ2번째 자동으로 움직이는 slideㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        


                // 준비하기
                let liWidth3= $('#show2>ul>li').width();
                $('#show2>ul>li:last').prependTo('#show2>ul');     
                $('#show2>ul').css('margin-left','-'+liWidth3+'px');
                let str3;
                
                
                // 타이머 작동
                timer3()
                
                // 타이머에 들어가는 함수
                function ani3(){
                        $('#show2>ul').animate({marginLeft:"+="+liWidth3+"px"},function(){
                                $('#show2>ul>li:last').prependTo('#show2>ul');
                                $('#show2>ul').css('marginLeft','-'+liWidth3+'px');
                        })
                }
                
            
                // 타이머를 작동시키는 함수
                
                function timer3(){
                        str3 = setInterval(ani3,3000)
                }
                
                
                // 타이머를 중단시키는 함수
                function stop3(){
                        clearInterval(str3)
                }
                
                
                // 타이머 이벤트 작동
                
                
                $('#show2>ul>li').each(function(){
                        $(this).on('mouseenter',function(){
                                stop3();
                        })
                })
                
                
                $('#show2>ul>li').each(function(){        
                        $(this).on('mouseleave',function(){
                                timer3();
                        })
                })
        
        })



function Home(){    
    return(
        <>
        {/* article1 */}
        <article id="article1">
        <div id="show">
        <ul>



        {/* 1 */}
        <li><Link to="/productList/Class04"><img src="./img/main_banner2.jpg" alt="main_banner2" /></Link>
        </li>


        {/* 2 */}
        <li><Link to="/productList/Class03"><img src="./img/main_banner4.jpg" alt="main_banner4" /></Link>
        </li>


        {/* 3 */}
        <li><Link><img src="./img/main_banner3.jpg" alt="main_banner3" /></Link>
        </li>

        {/* 4 */}
        <li><Link><video src="/video/mdocyoutube.mp4" loop autoPlay muted/></Link>
        </li>

        </ul>
        </div>
        </article>

        
        
        {/* article2 */}
        <article id="article2">
        <div id="atop">

        <div>
        <dl>
            <dt>오늘만 할인 특가</dt>
            <dd>오늘 구매시</dd>
            <dd>50%</dd>
            <dd>별도의 사은품도</dd>
            <dd>나갈 예정입니다.</dd>
        </dl>
        </div>
        <div>
            <Link to="/productList/Class02">
            <img src="./img/product1.jpg" alt="product1" />
            </Link>
        </div>
        </div>
       

        <div id="abottom">
        <div>
            <Link to="/productList/Class03">
            <img src="./img/product2.jpg" alt="product2" />
            </Link>
        </div>
        <div>
        <dl>
            <dt>신규 회원 특가 </dt>
            <dd>신규회원가입 후</dd>
            <dd>구매시 50%</dd>
            <dd>본사 사정에 따라</dd>
            <dd>조기 종료될 수 있습니다.</dd>
        </dl>
        </div>
        </div>
        </article>



        {/* article3 */}
        <article id="article3">
        <div id="myoutube">
        <h2><span>MdoC</span>YOUTUBE</h2>
        <ul>
            <li> <Link to="https://www.youtube.com/playlist?list=PLgrFK1gBILes6ePKx7xnRYIqAZzP0WpBg">엠도씨 스킨케어</Link></li>
            <li><Link to="https://www.youtube.com/playlist?list=PLgrFK1gBILevOHv8IKCbKpKhDN3fGcJcQ">엠도씨 CF</Link></li>
            <li><Link to="https://www.youtube.com/@MdoCOfficial/videos?view=0&sort=p&shelf_id=0">인기동영상</Link></li>
        </ul>
        </div>

        <div id="mvideo">
        <video src="/video/mdocAd.mp4" loop autoPlay muted/>
        </div>

        <div id="vmy">
            
           <Link to="https://www.youtube.com/@MdoCOfficial">VIEW MORE YOUTUBE</Link>
            
        </div>
        </article>




        {/* article4 */}
        <article id="article4">
        <div>
        <h1>추천상품</h1>
        <div id="show2">
        <ul>

        {/* 1 */}
        <li><Link to="/productList/Class09"><img src="./img/slide1.jpg" alt="slide1" /></Link>
        </li>


        {/* 2 */}
        <li><Link to="/productList/Class06"><img src="./img/slide2.jpg" alt="slide2" /></Link>
        </li>


        {/* 3 */}
        <li><Link to="/productList/Class10"><img src="./img/slide3.jpg" alt="slide3" /></Link>
        </li>

        {/* 4 */}
        <li><Link to="/productList/Class08"><img src="./img/slide4.jpg" alt="slide4" /></Link>
        </li>


        {/* 5 */}
        <li><Link to="/productList/Class07"><img src="./img/slide5.jpg" alt="slide5" /></Link>
        </li>


        {/* 6 */}
        <li><Link to="/productList/Class05"><img src="./img/slide6.jpg" alt="slide6" /></Link>
        </li>
        </ul>
        </div>
        </div>

        <div id="seeallproduct">
           <Link to="/productList">SEE ALL PRODUCTS</Link>
        </div>
        </article>

        

        <article id="article5">
        <div>
            <div>
            <h2>LATEST <span>NEWS</span></h2>
            <dl>
                <dt><Link to="https://www.outdoornews.co.kr/news/articleView.html?idxno=33463">엠도씨 엔드핏 스틱 비비 출시</Link></dt>
                <dd>August 16. 2022 / Sang-yong Jeong</dd>
            </dl>
            <dl>
                <dt><Link to="https://cosinkorea.com/mobile/article.html?no=47470">남성화장품, 국내외 시장 주요 키워드 '부상'</Link></dt>
                <dd>february 10. 2023 / Jae-seong Heo</dd>
            </dl>
            <Link to="http://www.bkn24.com/"><button>ALL NEWS</button></Link>
            </div>
            <figure>
                <img src="./img/mansbeuty.jpg" alt="mansbeuty" />
            </figure>
        </div>
        </article>

        <Aside />
        <Footer />
        </>
        )
}

export default Home;