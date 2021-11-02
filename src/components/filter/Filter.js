import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clicked } from '../../models/filterModel';
import "./filter.css";

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
                <input type="checkbox" name="c1" id="c1"></input>
                <label for="c1">Επιλογή όλων</label>
            </li> */}
            <li>
                <input type="checkbox" name="c1" id="c1" value= {0} onChange={(e) => dispatch(clicked(e.target.value))}></input>
                <label for="c1">Υποχρεωτικά</label>
            </li>
            <li>
                <input type="checkbox" name="c1" id="c1" value= {1} onChange={(e) => dispatch(clicked(e.target.value))}></input>
                <label for="c1">ΠΚΕΜ</label>
            </li>
            <li>
                <input type="checkbox" name="c1" id="c1" value= {2} onChange={(e) => dispatch(clicked(e.target.value))}></input>
                <label for="c1">ΠΚΘΜ</label>
            </li>
           </ul>
        </div>
        
    );
};

export default Filter;