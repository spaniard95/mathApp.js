import "./card.css";
import { useDispatch, useSelector } from 'react-redux';
import { gradeInput, categoryChange } from "../../models/catalogModel";
import SelectCateg from "./SelectCateg";

const Card = ({num, title, category, grade, selected}) => {
    const dispatch = useDispatch();
    const grad = useSelector((state) => state.catalog);

    const handleGradeChange = (num, grade) => {  
        if(grade<=10 && grade>=0|| grade==="") dispatch(gradeInput({num: num,grade: grade})); //if grade acceptable update catalog

    };

    const handleCategoryChange = (num, categoryIndex) => {
        dispatch(categoryChange({num: num, selected: categoryIndex}))
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
                <div id="title">{title}</div>
               <SelectCateg 
                    num={num}
                    category={category}
                    selected={selected}
                    handleCategoryChange={handleCategoryChange} 
                />
            </div>        
        </li>
    );
};

export default Card;