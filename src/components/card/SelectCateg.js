import { Chip } from "@mui/material";
import "./selectCateg.css"; 

const lessonsNums = ["Υποχρεωτικό", "ΠΚΘΜ", "ΠΚΕΜ", "ΚΘΜ", "ΚΕΜ", "ΔΔΜ", "ΔΦ", "ΔΟΕ"]

const SelectCateg = ({num, category, selected, setCategoryChange}) => {

    return (
        <c class="categ-container">
            {category.length == 1 ?
                <a id="categ">{lessonsNums[category[0]] }</a>           // not a double-category lesson
                :
                category.map((categ, index) => {
                    return index === selected ? 
                        // <button                         //selected
                        //     class={`selected-${categ}`}
                        //     onClick={e => setCategoryChange(num, index)}
                        // >
                        //     {lessonsNums[categ]}
                        // </button>
                        <Chip label={lessonsNums[categ]} size="small" sx={{ backgroundColor: "rgb(0, 145, 145)"}} color="primary" onClick={e => setCategoryChange(num, index)}/>
                        :
                        <Chip label={lessonsNums[categ]} size="small" sx={{ color: "rgb(0, 145, 145)"}}  variant="outlined" onClick={e => setCategoryChange(num, index)}/>
                })
            }
        </c>
    );
};

export default SelectCateg;