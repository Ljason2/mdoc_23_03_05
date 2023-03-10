import Aside from "../components/Aside";
import Footer from "../components/Footer";
import "./ProductList.css"
import ProductItem from "../components/ProductItem"
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {getCourses} from "../api/api";
import Pagination from "../components/Pagination";



function ProductList(){
    // getCourses가 return 하는 것은 데이터 배열이다.

    const [searchParam, setSearchParam] =useSearchParams();
    // console.log(searchParam.get('keyword'))
    const initKeyword =searchParam.get('keyword')
    const [keyword,setKeyword]=useState(initKeyword || "")
    const courses=getCourses(initKeyword);

    const [sortBy2,setSortBy2]=useState("title");


    // 함수


    const handleKeywordChange = (e)=> setKeyword(e.target.value) 
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParam( keyword ? {keyword} : {})
    }

    console.log(initKeyword, courses.length)


    function onSortChange2(mySortBy2){
        setSortBy2(mySortBy2)
    }


    const filterAppointments2 =
    courses.sort((a,b)=> 
    {return sortBy2==="price"? (a[sortBy2] > b[sortBy2] ? -1 : 1) : (a[sortBy2] < b[sortBy2] ? -1 : 1)}
    )






    const [currentPage,setCurrentPage] =useState(1);
    const postsPerPage = 4;
    // 페이지 계산
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage ;
  console.log(indexOfLast);
  console.log(indexOfFirst);
  const currentPosts = (filterAppointments2) =>{
  let currentPosts = 0;
  currentPosts = filterAppointments2.slice(indexOfFirst,indexOfLast);
  return currentPosts;
}

const filterAppointments3=currentPosts(filterAppointments2)

    return(
        <div id="product">
            <div id="product2">
            <h1>전체 상품</h1>
            <form onSubmit={handleSubmit}>
            <input name="keyword" 
            value={keyword}
            placeholder="검색으로 상품찾기"
            onChange={handleKeywordChange}/>
            <button type="submit">검색</button>
            </form>
            <div className="container">

            <ul>
                <li onClick={()=> onSortChange2('title')}>상품명 순</li>
                <li onClick={()=> onSortChange2('price')}>최고가 순</li>
                <li onClick={()=> onSortChange2('price2')}>최저가 순</li>
                <li onClick={()=> onSortChange2('summary')}>내용 순</li>
            </ul>

                <p>
                총 <span>{courses.length}</span>개의 상품을 찾았습니다.
                </p>

            {
            initKeyword && courses.length === 0? 
            
            (<div id="searchNo">
                검색된 상품이 없습니다.
            </div>)

                    :
                (<div id="productList">
         {filterAppointments3.map((course)=>{ return (<ProductItem key={course.id} course={course}/>)  
                })
                }
                </div>)
                }

                    <Pagination postsPerPage ={postsPerPage}
                  totalPosts ={filterAppointments2.length}
                  paginate ={setCurrentPage}
                 />

            </div>
            </div>
                <Aside />
                <Footer />
        </div>
        
        )
}

export default ProductList;