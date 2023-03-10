// 함수군단


import courses from "./data.json"
import question from "../components/dataquestion.json"

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡproductㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 여기서 courses는 데이터 배열이다.
export function getCourses(keyword){
    if(!keyword) return courses;
    return filterByKeyword(courses,keyword)
}
// export default가 아닌 export로 내보냈으니 가져올 땐 
// import {getCourses} from "주소"로 가져와야 한다.
function filterByKeyword(items,keyword){
    const lowered= keyword.toLowerCase();
    return items.filter(({title})=>{return title.toLowerCase().includes(lowered)})
}
// 이 함수에서 return 하는 것은 검색한 title에 해당하는 데이터 배열이다.
export function getCourseBySlug(courseSlug){
return courses.find((course)=> course.slug === courseSlug)
}



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡquestionㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

export function getQuestion(){
    return question;
}

export function getQuestionBySlug(questionSlug){
return question.find((item)=> item.slue === questionSlug)
}



// 검증 이름, 속성값
// WISHLIST_KEY 
const WishList_KEY = "wishlist";
const wishlist = JSON.parse(localStorage.getItem(WishList_KEY) || "{}") 

console.log(wishlist)



export function getWishList(){
    return courses.filter((course)=> wishlist[course.slug])
}



export function addWishList(courseSlug){
    wishlist[courseSlug] = true;
    localStorage.setItem(WishList_KEY,JSON.stringify(wishlist))
}



export function deleteWishList(courseSlug){
    delete wishlist[courseSlug]
    localStorage.setItem(WishList_KEY,JSON.stringify(wishlist))
}



// export function deleteAll(){

//     localStorage.setItem(WishList_KEY,JSON.stringify({}))
// }