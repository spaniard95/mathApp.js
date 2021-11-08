import "./selectCateg.css"; 

const lessonsNums = ["Υποχρεωτικό", "ΠΚΕΜ", "ΠΚΘΜ", "ΚΘΜ", "ΚΕΜ", "ΔΔΜ", "ΔΦ", "ΔΟΕ"]

const SelectCateg = ({num, category, selected, handleCategoryChange}) => {

    const handleChange = (num, index) => {
        handleCategoryChange(num, index);
    };

    return (
        <c>
            {category.length == 1 ?
                <a id="categ">{lessonsNums[category[0]] }</a>           // not double-category lessons
                :
                category.map((categ, index) => {
                    return index === selected ? 
                        <button 
                            class={`selected-${categ}`}
                            onClick={e => handleChange(num, index)}>{lessonsNums[categ]}
                        </button>
                        :
                        <button onClick={e => handleChange(num, index)}>{lessonsNums[categ]}</button>;
                })
            }
        </c>
    );
};

export default SelectCateg;