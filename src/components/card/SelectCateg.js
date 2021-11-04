import { useState } from "react";
import lessons from "../catalog/LessonCatalog";
import "./selectCateg.css"; 

const lessonsNums = ["Υποχρεωτικό", "ΠΚΕΜ", "ΠΚΘΜ", "ΚΘΜ", "ΚΕΜ", "TEST"]

const SelectCateg = ({num, category, selected, handleCategoryChange}) => {
    const [select, setSelect] = useState(selected);

    //bad idea but works
    const handleChange = (num, index) => {
        handleCategoryChange(num, index);
        setSelect(index);
    };

    return (
        <c>
            {category.length == 1 ?
                lessonsNums[category[0]]             //for not double-category lessons
                :
                category.map((categ, index) => {
                    return index === select ? 
                        <button 
                            class={`selected-${categ}`}
                            onClick={e => handleChange(num, index)}>{lessonsNums[categ]}</button>
                        :
                        <button onClick={e => handleChange(num, index)}>{lessonsNums[categ]}</button>;
                })
            }
        </c>
    );
};

export default SelectCateg;