import "./card.css";
import SelectCateg from "./SelectCateg";
import useCatalogModel from "../../models/catalogModel/useCatalogModel";


const Card = ({num, title, category, grade, selected}) => {
    const {setCategoryChange, setGrade} = useCatalogModel();

    return (
        <li1 class="flex-card">
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
                onChange={e => setGrade(num, e.target.value)}>
            </input> 
            <div id="double">
                <div id="title">{title}</div>
                    <SelectCateg 
                        num={num}
                        category={category}
                        selected={selected}
                        setCategoryChange={setCategoryChange} 
                    />
            </div>        
        </li1>
    );
};

export default Card;