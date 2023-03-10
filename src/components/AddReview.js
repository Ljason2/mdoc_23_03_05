import { Fragment, useState } from 'react';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { MdOutlineContentPaste } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import ReviewModal from "./ReviewModal"


// ||  && 연산자 => 출력값
// ()=>{} 함수형, 함수형 => () => {}
// 컴포넌트 나누기
// 함수명, 이름없는 함수 변수  ->  react, component JSX 


function AddWrite({toggleForm,formData,setFromData,formPublish}){



    if(!toggleForm){return null }   
    return(
    <Fragment>
<ul>

<li>
<label htmlFor="productName">
<div><FaProductHunt/></div>
상품명</label>
<input type="text" id="productName"
onChange={(event)=>{  
    setFromData({...formData,productName:event.target.value})
}}    
/>
</li>


<li>
<label htmlFor="content">
<div><MdOutlineContentPaste/></div>    
상품은 어떠셨나요?</label>
<textarea id="content"
onChange={(event)=>{
    setFromData({...formData,review:event.target.value})
}}    
></textarea>
</li>


<li>
<label htmlFor="score">
<div><AiFillStar/></div>
별점</label>
<select
name="score" id="score" 
onChange={(event)=>{  
    setFromData({...formData,score:event.target.value})
}}
>
    <option value="1점">1점</option>
    <option value="2점">2점</option>
    <option value="3점">3점</option>
    <option value="4점">4점</option>
    <option value="5점">5점</option>
</select>
</li>



<li>
<label htmlFor="userName">
<div><MdDriveFileRenameOutline/></div>작성자</label>
<input 
type="text" id="userName"
onChange={(event)=>{  
    setFromData({...formData,userName:event.target.value})
}}    
/>
</li>
</ul>

<p>
    <button type="submit"
    onClick={formPublish}
    >리뷰 남기기</button>
</p>
</Fragment>
    )
}




function AddReview({onSendAppointment, lastId}){

    // 비어있는 객체 ->reset
    const clearData={
    "userName": "",
    "productName": "",
    "review":"",
    "score":"1점"
    }
    // state
const [toggleForm,setToggleForm]=useState(false);
const [formData,setFromData]=useState(clearData);
const [productName2,setProductName2]= useState("");
const [toggleForm2,setToggleForm2]=useState(false);
const [score2,setScore2]= useState("");
const [userName2,setUserName2]= useState("");
const [photo2,setPhoto2]= useState("/img/reviewevent.jpg");

function formPublish(){
    // 합본 객체
    const appointmentInfo ={
        id: lastId + 1,
        photoUrl: "/img/reviewevent.jpg",
        userName: formData.userName,
        productName:  formData.productName,
        review : formData.review,
        score : formData.score
    }
    // 데이터 보내기
    onSendAppointment(appointmentInfo)
    // reset
    setToggleForm(!toggleForm)
    setFromData(clearData)
    
    
    // 모달창
    setProductName2(formData.productName)
    setToggleForm2(!toggleForm2)
    setScore2(formData.score)
    setUserName2(formData.userName)
}

return(
<div id="appoint">
<h4
onClick={()=> setToggleForm(!toggleForm)}
>
<BsPencil /> 리뷰쓰기</h4>
<AddWrite
toggleForm={toggleForm}
formData = {formData}
formPublish={formPublish}
setFromData={setFromData}
/>

<ReviewModal
productName2={productName2}
score2={score2}
userName2={userName2}
toggleForm2={toggleForm2}
setToggleForm2={setToggleForm2}
photo2={photo2}
/>
</div>
    )
}

export default AddReview;