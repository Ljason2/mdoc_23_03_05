import Aside from "../components/Aside";
import Footer from "../components/Footer";
import "./WorryList.css"
import WorryItem from "../components/WorryItem";
import {getQuestion} from "../api/api"


function WorryList(){
    const  question = getQuestion();
    return(
        <div id="question">
            <div id="question2">
            <div id="question2Top">
            <h1>피부&middot;화장품 고민 1:1 상담 <br />
                <span>피부고민과 화장품에 대해 궁금한 고객님들을 위한 <br /> 1:1 맞춤상담 게시판입니다.</span>
            </h1>
           
            </div>

            <div id="callRequest">
            <h1>실시간 맞춤형 피부고민 <br /> 통화상담신청</h1>

            <form action="#" method="post">
    <fieldset>
        <ul>
            <li>
            <label for="userName4">Your Name</label>
             <input type="text" id="userName4" name="userName4"/>
            </li>

            <li>
            <label for="userTitle4">Your Title</label>
            <input type="text" id="userTitle4" name="userTitle4"/>
            </li>

            <li>
            <label for="userPhone4">Your Phone</label>
            <input type="tel" id="userPhone4" name="userPhone4"/>
            </li>

            <li>
            <label for="userMessage4">Your Message</label>
            <textarea id="userMessage4" name="userMessage4"></textarea>
            </li>
        </ul>
        <p><input type="submit" value="submit"/></p>
    </fieldset>
</form>
            </div>
            <div className="container2">
                <p>
                총 {question.length}개의 고민이 있습니다.
                </p>
                
                <div>
        {question.map((item)=>{return (<WorryItem key={item.id}
        item={item}
        />)
        })}
                </div>
                </div>
            </div>
            <Aside />
            <Footer />
        </div>
        )
}

export default WorryList;