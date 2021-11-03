import { useState } from "react";
import { Provider } from "react-redux";
import "./selectCateg.css"; 

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
                category[0]             //for not double-category lessons
                :
                category.map((categ, index) => {
                    return index === select ? 
                        <button 
                            class="selected" 
                            onClick={e => handleChange(num, index)}>{categ}</button>
                        :
                        <button onClick={e => handleChange(num, index)}>{categ}</button>;
                })
            }
        </c>
    );
};

export default SelectCateg;