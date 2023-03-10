import { Link } from "react-router-dom";

function WorryItem({item}){
    return(
        <figure>
            <figcaption>
                <dl>
                    <dt>{item.title}</dt>
                    <dd>{item.writer}</dd>
                    <dd>{item.createdAt}</dd>
                    <dd>{item.content}</dd>
                    <dd><Link to={`/worryList/${item.slue}`}>답변보기</Link></dd>
                </dl>
            </figcaption>
        </figure>
    )
}


export default WorryItem;