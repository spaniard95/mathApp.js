import React, { useState } from 'react';
import "./filter.css";

const Filter = () => {

    const [checks, setChecks] = useState([false, false, false])
    
    function handleChange(event) {
      setChecks(prevState => {
                const arr = prevState;
                arr[event.target.value] = !prevState[event.target.value];
                console.log(arr);
                return arr;
            }
        );
    }
    return (
        <div class="filter-box">
           <h1>Κατηγορίες μαθημάτων</h1> 
           <ul class="filter-list">
            {/* <li>
                <input type="checkbox" name="c1" id="c1"></input>
                <label for="c1">Επιλογή όλων</label>
            </li> */}
            <li>
                <input type="checkbox" name="c1" id="c1" value= {0} onChange={handleChange}></input>
                <label for="c1">Υποχρεωτικά</label>
            </li>
            <li>
                <input type="checkbox" name="c1" id="c1" value= {1} onChange={handleChange}></input>
                <label for="c1">ΠΚΕΜ</label>
            </li>
            <li>
                <input type="checkbox" name="c1" id="c1" value= {2} onChange={handleChange}></input>
                <label for="c1">ΠΚΘΜ</label>
            </li>
           </ul>
        </div>
    );
};

export default Filter;