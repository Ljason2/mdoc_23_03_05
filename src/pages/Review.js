import Aside from "../components/Aside";
import Footer from "../components/Footer";
import "./Review.css"
import { useCallback, useEffect, useState } from "react";
import ReviewInfo from "../components/ReviewInfo";
import ReviewSearch from "../components/ReviewSearch";
import AddReview from "../components/AddReview";




function Review(){
    const [appointList,setAppointList]=useState([]);
    const [query,setQuery]=useState("");
    const [sortBy,setSortBy]=useState("userName");


    const filterAppointments = appointList.filter(
        (item)=> {return (item.userName.includes(query)|| 
                            item.review.includes(query)||
                            item.productName.includes(query)||
                            item.score.includes(query)
                            )})

    .sort((a,b)=> 
    {return sortBy==="score"? (a[sortBy] > b[sortBy] ? -1 : 1) : (a[sortBy] < b[sortBy] ? -1 : 1)}
    )


    const fetchData = useCallback(
        ()=>{
            fetch(`./reviewData.json`)
            .then(response => response.json())
            .then(data=> setAppointList(data))
        },[]
    );


    useEffect(
        fetchData,[fetchData]
    )



    return(
        <div id="reviewPage">
            <div id="reviewPage2">
            <h1>리뷰 게시판</h1>
            <h2>리뷰 이벤트 진행중! <br /> 
            <span>리뷰를 쓰면 최대 2000포인트를 드립니다.</span></h2>
        <AddReview
            onSendAppointment = {
            myAppointment=> setAppointList([...appointList,myAppointment])
            }
            lastId={
            appointList.reduce((max, item) => Number(item.id) > max ? Number(item.id) :max,1)
            }
            />

        <ReviewSearch 
            query={query}
            onQueryChange={ myQuery=> setQuery(myQuery)}
            sortBy={sortBy}
            onSortChange={ (mySortBy)=>setSortBy(mySortBy)}
            />
            <div id="list">
            <h1>전체사용후기</h1>
        <ul>
            {
            filterAppointments.map(
            (appointment)=>
             (<ReviewInfo key={appointment.id} 
            appointment={appointment}
            onDelectAppoint ={ appointmentId =>
                setAppointList(
                    filterAppointments.filter(
                        appointment=> appointment.id !== appointmentId
                    )
                )
            }
            />
            ))
            }
        </ul>
            </div>
            </div>
        <Aside />
        <Footer />
        </div>

        )
}

export default Review;