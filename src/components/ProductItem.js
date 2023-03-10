import { Link } from "react-router-dom";


function ProductItem({course}){
    return(
    <figure>
    <img src={course.photoUrl} alt={course.title} />
    <figcaption>
    <dl>
    <dt>{course.title}</dt>
    <dd>{course.price}</dd>
    <dd>{course.summary}</dd>
    </dl>
    <Link to={`/productList/${course.slug}`}><button>상세보기</button></Link>
        </figcaption>
        </figure>
        )
}

export default ProductItem;