import React, { useEffect } from 'react';
import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import useFilterModel from '../../models/filterModel/useFilterModel';
import "./filter.css";


const categoriesLi = ["Υποχρεωτικά (14)", "ΠΚΘΜ", "ΠΚΕΜ", "ΚΘΜ", "ΚΕΜ", "ΔΔΜ", "ΔΦ", "ΔΟΕ"];

const Filter = () => {
    const {clickCheck, checkAll, checks} = useFilterModel();

    // return (
    //     <List sx={{ width: '25%', maxWidth: 250, height: 300}}>
    //         {checks.map((category, index) => {
    //             const labelId = `checkbox-list-label-${index}`;

    //             return (
    //                 <ListItem
    //                     key={index}
    //                     disablePadding
    //                 >
    //                     <ListItemButton role={undefined} onClick={() => clickCheck(index)} dense>
    //                         <ListItemIcon>
    //                             <Checkbox
    //                                 edge="start"
    //                                 checked={category}
    //                                 tabIndex={-1}
    //                                 disableRipple
    //                             />
    //                         </ListItemIcon>
    //                         <ListItemText id={labelId} primary={categoriesLi[index]} />
    //                     </ListItemButton> 
    //                 </ListItem>
    //             );
    //         })}
    //     </List>
    // );
    
    return (
        <div class="filter-box">
           <Typography variant="h6" padding="10">
                Κατηγορίες Μαθημάτων
            </Typography> 
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
                    {/* <Checkbox
                        checked={checks[index]}
                        //onChange={() => clickCheck(index)}
                        inputProps={{ 'aria-label': 'controlled' }}
                        label="fasdf"
                     /> */}
                 </li>
                
            )}
           </ul>
        </div>
        
    );
};

export default Filter;