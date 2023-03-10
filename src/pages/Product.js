import Aside from "../components/Aside";
import Footer from "../components/Footer";
import { Link, Navigate,useNavigate,useParams } from "react-router-dom";
import { getCourseBySlug,addWishList } from "../api/api";
import styled from "styled-components";
import "./Product.css"

const StyleButton = styled.button`
width:100%;
height:50px;
border:none;
background-color:orange;
color:#fff;
cursor:pointer;
`


function Product(){
        const {courseSlug}=useParams();
        const course = getCourseBySlug(courseSlug);
        const navigate = useNavigate();
    
        const handlAddwishList = () =>{
            addWishList(course?.slug)
            navigate('/wishlist')
        }
    
        // 문제점이 있을 경우 리다이렉트
        if(!course){
            return <Navigate to="/productList" />
        }
    
    
        return(
            <>
            <div id="productitem">
                <div id="productitem2">
            <figure>
            <img src={course.photoUrl2} alt={course.title} />
            <figcaption>
            <dl>
            <dt>상품명 &nbsp;&nbsp;&nbsp; {course.title}</dt>
            <dd>판매가격 &nbsp;&nbsp;&nbsp; {course.price}</dd>
            <dd>상품내용  &nbsp;&nbsp;&nbsp;{course.summary}</dd>
            </dl>
            <p>
                <StyleButton type="button" onClick={handlAddwishList}>
                장바구니</StyleButton>
            </p>
            </figcaption>
            </figure>

            <div id="detailReview">
            <dl>
            <dt>상품 상세내용</dt>
            <dd>{course.detail}</dd>
            </dl>

            <dl>
            <dt>상품 후기</dt>
            <dd>{course.review}</dd>
            </dl>
            </div>
            
    
            <div className="topic">
                {/* 반복문의 시작점 */}
            <h1>관련 상품</h1>
    {course.topics.map(({topic})=><Link to={`/productList/${topic.slug}`} ><figure key={topic.slug}>
    <img src={topic.photoUrl} alt={topic.title}/>
    <figcaption> 
    <dl>
    <dt>{topic.title}</dt>
    <dd>{topic.price}</dd>
    </dl>
    </figcaption>
            </figure>
            </Link>
            )}
            </div>
            </div>
            </div>
            <Aside />
            <Footer />
            </>
            )
}

export default Product;