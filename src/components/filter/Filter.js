import React, { useEffect } from 'react';
import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import useFilterModel from '../../models/filterModel/useFilterModel';
import { makeStyles } from '@mui/styles';
import "./filter.css";


const categoriesLi = ["Υποχρεωτικά", "ΠΚΘΜ", "ΠΚΕΜ", "ΚΘΜ", "ΚΕΜ", "ΔΔΜ", "ΔΦ", "ΔΟΕ"];

//not used
const useStyles = makeStyles({
    parent: {
        backgroundColor: 'yellow',
        '&:hover': {
          '& $child1': {
            color: 'red'
          },
          '& $child2': {
            color: 'blue'
          }
      },
      child1: {
        fontSize: '2em',
        padding: 24
      },
      child2: {
        fontSize: '4em',
        padding: 28
      },
}});

const Filter = () => {
    const {clickCheck, checkAll, checks} = useFilterModel();
    const classes = useStyles();

    return (
        <div class="filter-box">
            <Typography variant="h6" align="left">
                    Φίλτρα
            </Typography> 
            <Typography variant="subtitle1" sx={{ marginTop: 2}} align="left" >
                    Κατηγορίες Μαθημάτων
            </Typography> 
            <List 
                sx={{ 
                    width: '25%', 
                    maxWidth: 300, 
                    height: 300,
                    align: "left", //doesnt work
                }}
                >
                {checks.map((category, index) => {
                    // const labelId = `checkbox-list-label-${index}`;
                    return (
                        <ListItem
                            key={index}
                            disableGutters
                            
                            sx={{  
                                height: 5, 
                                margin: 2,
                                boxSizing: "border-box", 
                            }}
                        >
                            <ListItemButton 
                                role={undefined} 
                                onClick={() => clickCheck(index)} 
                                sx={{
                                    '&:hover': {
                                        color: "rgb(0, 172, 172)",
                                        backgroundColor: "transparent",
                                    },}
                                } 
                                dense
                                disableRipple
                                >
                                <ListItemIcon sx={{ minWidth: 0}}>
                                    <Checkbox
                                        edge="start"
                                        checked={category}
                                        tabIndex={-1}
                                        sx={{ 
                                            color: "rgb(10, 172, 172)",
                                            '&.Mui-checked': {
                                                color: "rgb(0, 172, 172)",
                                            },
                                            // pl: 10, //??????how to bring text closer to checkbox ?????????
                                            // pr: 0,    
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={categoriesLi[index]} sx={{align: "left"}}/>
                            </ListItemButton> 
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
    
    // return (
    //     <div class="filter-box">
    //        <Typography variant="h6" padding="10">
    //             Κατηγορίες Μαθημάτων
    //         </Typography> 
    //        <ul class="filter-list">
    //         {categoriesLi.map((category,index) => 
    //               <li>
    //                <ListItem onClick={() => clickCheck(index)} dense>
    //                     <ListItemButton classes={{ root: classes.input }} role={undefined} onClick={() => clickCheck(index)} dense>
    //                         <ListItemIcon>
    //                              <Checkbox
    //                                  edge="start"
    //                                  checked={checks[index]}
    //                                  tabIndex={-1}
    //                                  disableRipple
    //                              />
    //                          </ListItemIcon>
    //                          <ListItemText id={index} primary={category} sx={{align: "left"}}/>
    //                      </ListItemButton> 
    //                  </ListItem>
                   
    //              </li>        
    //         )}
    //        </ul>
    //     </div>
        
    // );
};

export default Filter;