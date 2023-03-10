import { FaTrash} from 'react-icons/fa';



function ReviewInfo({appointment,onDelectAppoint}){
    return(
        <li>
        <dl>
        <dd className="photoUrl"><img src={appointment.photoUrl} alt={appointment.productName} /></dd>
        <dd className="productName">{appointment.productName}</dd>
        <dd className="score">{appointment.score}</dd>
        <dd className="content">{appointment.review}</dd>
        <dd className="name">{appointment.userName}</dd>
        </dl>
        <button 
        onClick={()=>
            onDelectAppoint(appointment.id)
        }
        type="button"><FaTrash /></button>
        </li>
    )
}


export default ReviewInfo;


