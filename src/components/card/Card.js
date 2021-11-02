import "./card.css";
import { useDispatch, useSelector } from 'react-redux';
import { gradeInput } from "../../models/catalogModel";

const Card = ({num, title, catalog, grade=-1}) => {
    const dispatch = useDispatch();
    const grad = useSelector((state) => state.catalog);

    const handleGradeChange = (num, grade) => {  
        dispatch(gradeInput({num: num,grade: grade}));
    };

    return (
        <li class="flex-card">
            <n id="num">{num}</n>
            {/* {grade!= null &&  
                <div>
                    <b id="line"> </b>
                </div>
            } */}
            <input 
                type="number" 
                id="grade" 
                value={grade} 
                min="5" max="10" 
                onChange={e => handleGradeChange(num, e.target.value)}>
            </input> 
            <div id="double">
                <div>{title}</div>
              {catalog.map(categ => <c>{categ + " "}</c>)}
            </div>        
        </li>
    );
};

export default Card;