import Aside from "../components/Aside";
import Footer from "../components/Footer";
import "./WishList.css"
import styled from "styled-components";
import {deleteWishList, getWishList} from "../api/api"
import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "react";
import { CiShoppingCart} from 'react-icons/ci';
import { FaTrash} from 'react-icons/fa';
import {deleteAll} from "../api/api"


function WishList(){

    const [courses, setCourses] = useState([]);
    const P2=styled.p`
    width:500px;
    heigt:500px;    
    `




    const handleDelete = (courseSlug)=>{
        deleteWishList(courseSlug);
        const nextCourses = getWishList();
        setCourses(nextCourses)
    }

    

    // const allDelete= ()=>{
    //     deleteAll()
    // }



    useEffect(()=>{
        const NestCourses = getWishList();
        setCourses(NestCourses);
    },[])



    return(
        <div className="wishlist">
            <div id="wishlist2">
            <h1>장바구니</h1>
           
           
            {/* <button
            type="button"
            onClick={()=> allDelete()}
            >모두 버리기</button> */}
      {courses.length ===0 ?
            (

                <div id="wishlistEmpty">

                <div>
                <CiShoppingCart />
                </div>
               <P2>장바구니가 비어있습니다. 
                <br /><span>엠도씨에서 훈남이 되어보세요.</span>
               </P2>
                </div>
            )
            :
            (<ul>
            {courses.map((course)=> (
    <li key={course.slug}>
    <ProductItem course={course}/>
    <p> 
        <button 
        onClick={()=> handleDelete(course.slug)}
        type="button"><FaTrash /></button>
    </p>
    </li>
))     
}            </ul>)}
</div>
        <Aside />
        <Footer />
        </div>
        )
}

export default WishList;