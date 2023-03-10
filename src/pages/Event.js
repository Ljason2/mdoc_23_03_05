import "./Event.css"
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import { useState } from "react";
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";



function Event(){
    
const [arr,setArr]=useState([]);
const [arr2,setArr2]=useState([1,2,3,4,5,6,7]);

const [blockChange,setBlockChange]=useState('none')
const [blockChange2,setBlockChange2]=useState('none')


function add1(){
    setArr([...arr,1])
    toggleImg1()
}

function add2(){
    setArr([...arr,2])
    toggleImg2()
}

function add3(){
    setArr([...arr,3])
    toggleImg3()
}

function add4(){
    setArr([...arr,4])
    toggleImg4()
}


function add5(){
    setArr([...arr,5])
    toggleImg5()
}

function add6(){
    setArr([...arr,6])
    toggleImg6()
}

function add7(){
    setArr([...arr,7])
    toggleImg7()
}


const navigate=useNavigate();


function reset(){
    navigate('/')
    // window.location.replace("/event");
    // window.location.reload(true);
}



function answer (){
   if(arr.toString()===arr2.toString()){
    setArr([])
    setBlockChange("block")  
}else{
    setArr([])  
    setBlockChange2("block")  
}

}


function toggleImg1() {
    document.querySelector("#img1").src="/img/quizItemImg/check.jpg";
  }
  function toggleImg2() {
    document.querySelector("#img2").src="/img/quizItemImg/check.jpg";
  }
  function toggleImg3() {
    document.querySelector("#img3").src="/img/quizItemImg/check.jpg";
  }
  function toggleImg4() {
    document.querySelector("#img4").src="/img/quizItemImg/check.jpg";
  }
  function toggleImg5() {
    document.querySelector("#img5").src="/img/quizItemImg/check.jpg";
  }
  function toggleImg6() {
    document.querySelector("#img6").src="/img/quizItemImg/check.jpg";
  }
  function toggleImg7() {
    document.querySelector("#img7").src="/img/quizItemImg/check.jpg";
  }







    return(
        <div id="eventPage">

        <figure id="O" style={{display:`${blockChange}`}}>
        <img src="/img/quizItemImg/beforeAfter.PNG" alt="product10" />
        <figcaption>화장이 멋지게 잘되었습니다!</figcaption>
        </figure>

        
        
        <figure id="X" style={{display:`${blockChange2}`}}>
        <img src="/img/quizItemImg/ugly.png" alt="product10" />
        <figcaption>화장이 실패했습니다ㅠㅠ</figcaption>
        </figure>
        
        <div id="eventPage2">
        <h1>이벤트</h1>
        <h2>
        화장품을 클릭해서 건성피부를 가진 남성에게 <br />
        올바른 화장 순서대로 화장을 시켜주면 원하시는 엠도씨 제품을 무료로 드립니다.
        </h2>
        <h3><BsFillQuestionCircleFill /> 화장품을 클릭해서 건성피부인 남성을 올바른 화장 순서대로 화장시켜보세요.</h3>

        {/* <button
        onClick={()=> add1()}
        >배열추가1</button> */}

        <div id="quizImg">
        <figure onClick={()=> add1()}>
            <img id="img1" src="/img/quizItemImg/quizItemImg1.jpg" alt="quizItemImg1" />
            <figcaption>
                릴리프 폼 클렌징
            </figcaption>
        </figure>

        <figure onClick={()=> add2()}>
            <img id="img2" src="/img/quizItemImg/quizItemImg2.jpg" alt="quizItemImg2" />
            <figcaption>
                릴리프 수딩 겔
            </figcaption>
        </figure>

        <figure onClick={()=> add3()}>
            <img id="img3" src="/img/quizItemImg/quizItemImg3.jpg" alt="quizItemImg3" />
            <figcaption>
            릴리프 토닉 위드 애프터셰이브
            </figcaption>
        </figure>


        <figure onClick={()=> add4()}>
            <img id="img4" src="/img/quizItemImg/quizItemImg4.jpg" alt="quizItemImg4" />
            <figcaption>
                릴리프 에센스 에멀젼
            </figcaption>
        </figure>



        <figure onClick={()=> add5()}>
            <img id="img5" src="/img/quizItemImg/quizItemImg5.jpg" alt="quizItemImg5" />
            <figcaption>
                울트라 수분 크림
            </figcaption>
        </figure>


        <figure onClick={()=> add7()}>
            <img id="img7" src="/img/quizItemImg/quizItemImg7.jpg" alt="quizItemImg7" />
            <figcaption>
                선샤인 유브이 솔루션 스틱
            </figcaption>
        </figure>



        <figure onClick={()=> add6()}>
            <img id="img6" src="/img/quizItemImg/quizItemImg6.jpg" alt="quizItemImg6" />
            <figcaption>
                선샤인 유브이 솔루션 크림
            </figcaption>
        </figure>
        </div>

        <button
         onClick={()=> answer() }>
            정답확인
        </button>

        <button
         onClick={()=> reset() }>
            홈으로 가기
        </button>

        </div>
        <Aside />
        <Footer />
        </div>
        )
}

export default Event;