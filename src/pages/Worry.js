import Aside from "../components/Aside";
import Footer from "../components/Footer";
import "./Worry.css"
import { Link, useParams } from 'react-router-dom';
import {getQuestionBySlug} from '../api/api' 


function Worry(){
    const {worrySlug}=useParams();
    const question =getQuestionBySlug(worrySlug)
    return(
        <div id="questionAnswer">
            <div id="questionAnswer2">
                <h1>고민</h1>
                <figure>
            <figcaption>
                <dl>
                    <dt>{question.title}</dt>
                    <dd>{question.writer}</dd>
                    <dd>{question.createdAt}</dd>
                    <dd>{question.content}</dd>
                </dl>
            </figcaption>
        </figure>


        <div className='answer'>
            <h1>답변</h1>
            {/* 반복문의 시작점 */}
            {question.answers.map((item)=>
    {return <dl key={item.content}>
        <dt><span>엠도씨</span> &nbsp; {item.createdAt}</dt>
        <dd>{item.content}</dd>
    </dl>
            })}
        </div>

            <div id="recommandProduct">
            <h1>고객님께 추천드리는 상품</h1>
            <div>
            {question.answersRecommand.map((item)=>
    {return <Link to={`/productList/${item.slug}`} ><figure key={item.slug}>
        <img src={item.photoUrl} alt={item.title} />
    <figcaption> 
    <dl>
    <dt>{item.title}</dt>
    <dd>{item.price}</dd>
    </dl>
    </figcaption>
    </figure>
    </Link>
            })}
            </div>
            </div>

        </div>
        <Aside />
        <Footer />
        </div>
    )
}

export default Worry;