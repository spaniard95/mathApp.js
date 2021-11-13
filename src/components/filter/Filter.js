import React, { useEffect } from 'react';
import reactDom from 'react-dom';
import useFilterModel from '../../models/filterModel/useFilterModel';
import "./filter.css";


const categoriesLi = ["Υποχρεωτικά (14)", "ΠΚΘΜ", "ΠΚΕΜ", "ΚΘΜ", "ΚΕΜ", "ΔΔΜ", "ΔΦ", "ΔΟΕ"];

const Filter = () => {
    const {clickCheck, checkAll, checks} = useFilterModel();
    
    return (
        <div class="filter-box">
           <h1>Κατηγορίες μαθημάτων</h1> 
           <ul class="filter-list">
            {/* <li>
                <input 
                    type="checkbox" 
                    name="c1" 
                    id="c1"
                    onChange={(e) => checkAll(e.target.value)}>
                </input>
                <label for="c1">Επιλογή όλων</label>
            </li> */}
            {categoriesLi.map((category,index) => 
                 <li onClick={() => clickCheck(index)}>
                    <input 
                        type="checkbox" 
                        name="c1" 
                        value= {index}  
                        // onChange={(e) => dispatch(clickCheck(e.target.value))} 
                        checked={checks[index]}
                        style={{color: "red"}}
                        >
                    </input>
                    <label for="c1">{category}</label>
                 </li>
            )}
           </ul>
        </div>
        
    );
};

export default Filter;