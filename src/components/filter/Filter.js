import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clicked, checkAll } from '../../models/filterModel';
import "./filter.css";

const categoriesLi = ["Υποχρεωτικά (14)", "ΠΚΘΜ", "ΠΚΕΜ", "ΚΘΜ", "ΚΕΜ", "ΤΕΣΤ"]

const Filter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.filter.value);

    useEffect(() => {
        console.log("useEffect called by " + count);
    }, [count])
    
    return (
        <div class="filter-box">
           <h1>Κατηγορίες μαθημάτων</h1> 
           <ul class="filter-list">
            {/* <li>
                <input 
                    type="checkbox" 
                    name="c1" 
                    id="c1"
                    onChange={(e) => dispatch(clicked(e.target.value))}>
                </input>
                <label for="c1">Επιλογή όλων</label>
            </li> */}
            {categoriesLi.map((category,index) => 
                 <li>
                    <input 
                        type="checkbox" 
                        name="c1" 
                        id="c1" 
                        value= {index} 
                        onChange={(e) => dispatch(clicked(e.target.value))} 
                        checked={count[index]}>
                    </input>
                    <label for="c1">{category}</label>
                 </li>
            )}
           </ul>
        </div>
        
    );
};

export default Filter;