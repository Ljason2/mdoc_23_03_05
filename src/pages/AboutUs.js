import "./AboutUs.css"
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { MdCall } from 'react-icons/md';


function AboutUs(){
    return(
        <div id="introduction1">
        <div id="introduction2">
        <div id="introduction3">
        <h1>엠도씨 소개</h1>
        <img src="/img/intro1.gif" alt="intro1" />
        <img src="/img/intro2.gif" alt="intro1" />
        </div>


        <div id="intro4">
        
        <dl>
            <dt>M do C <span>엠도씨</span></dt>
            <dd>
            남성의, 남성에 의한, 남성을 위한 - 엠도씨 <br />
            남성의 변신 노하우 엠도씨가 제안합니다.
            </dd>
            <dd>
            남성들의 라이프 스타일에 맞추어 개발된 엠도씨 스킨케어는 카모마일, 위치하젤, 백차, <br /> 포도씨 추출물등
            여러 종류의 미용성분들이 지니고 있는 풍부한 효과를 좀 더 안전하게 <br />
            좀 더 효과적으로 피부에 전달하고자 오랜 연구와 개발 끝에 만들어진 남성전문 스킨케어 브랜드입니다.
            </dd>
        </dl>

        <dl>
            <dt>Metrosexual & Grooming <span>매트로섹슈얼 & 그루밍</span></dt>
            <dd>매트로 섹슈얼 & 그루밍이 새롭게 주목 받는 현재의 남성들은 <br /> '여성스러움'과 '미'에 대한 
            관심이 점점 높아져 가고 있습니다. <br /> 남성들에게 있어서 자기 몸, 피부에
            대한 케어는 <br /> 매우 중요한 요소 중 하나가 되었습니다.
            </dd>
            <dd>
            과거부터 지금까지의 남성은 무의식적으로 화장품을 구분 없이 사용해왔습니다. <br />
            차별화된 남성을 위한, 남성 피부 타입별 전문 화장품 엠도씨가 당신의 욕구를 채워드리겠습니다.
            </dd>
        </dl>


        <dl>
            <dt>Masstige<span>매스티지</span></dt>
            <dd>Masstige - 대중과 명품을 조합한 신조어로, <br />
            명품 화장품의 대중화를 엠도씨가 만들어 나갑니다.
            </dd>
            <dd>
            이제 명품은 소수를 위한 전유물이 아닙니다. <br />
            삶의 질을 높일 수 있는 대중속 명품이 되어야 합니다. <br />
            엠도씨는 명품의 품질과 만족감을 얻을 수 있는 제품을 만들어 가겠습니다.

            </dd>
        </dl>

        </div>
        
        </div>
        
        <div id="contact">
            <div id="contact2">
            <h1>CONTACT</h1>
            </div>
            <div id="contact3">
                <div id="contact4">
            <figure>
              <div><FaHome /></div> 
                <figcaption>
                    <dl>
                        <dt>ADDRESS</dt>
                        <dd>서울시 동작구 000로</dd>
                    </dl>
                </figcaption>
            </figure>

            <figure>
              <div><AiFillMail /></div> 
                <figcaption>
                    <dl>
                        <dt>EMAIL</dt>
                        <dd>mdoc@naver.com</dd>
                    </dl>
                </figcaption>
            </figure>


            <figure>
              <div><MdCall /></div> 
                <figcaption>
                    <dl>
                        <dt>CALL US</dt>
                        <dd>02-1234-5678</dd>
                    </dl>
                </figcaption>
            </figure>
            </div>
            </div>

            <div id="imgform">
            <img src="/img/intro5.PNG" alt="intro5" />

        <div id="form">
        <form action="#" method="post">
    <fieldset>
        <ul>
            <li>
            <label for="userName2">NAME</label>
             <input type="text" id="userName2" name="userName2" />
            </li>

            <li>
            <label for="userEmail2">EMAIL</label>
            <input type="email" id="userEmail2" name="userEmail2" />
            </li>

            <li>
            <label for="userPhone2">PHONE</label>
            <input type="text" id="userPhone2" name="userPhone2" />
            </li>

            <li>
            <label for="userMessage2">MESSAGE</label>
            <textarea id="userMessage2" name="userMessage2"></textarea>
            </li>
        </ul>
        <p><input type="submit" value="submit" /></p>
    </fieldset>
</form>
</div>
        </div>


        </div>
        <Aside />
        <Footer />
        </div>
        )
}

export default AboutUs;