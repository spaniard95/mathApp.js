import React, { useEffect } from "react";
import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import useFilterModel from "../../models/filterModel/useFilterModel";
import { makeStyles } from "@mui/styles";
import "./filterContainer.css";
import Filter from "../Filter.js/Filter";

const categoriesLi = [
  "Υποχρεωτικά",
  "ΠΚΘΜ",
  "ΠΚΕΜ",
  "ΚΘΜ",
  "ΚΕΜ",
  "ΔΔΜ",
  "ΔΦ",
  "ΔΟΕ",
  "ΔΠΤ",
];

//not used
const useStyles = makeStyles({
  parent: {
    backgroundColor: "yellow",
    "&:hover": {
      "& $child1": {
        color: "red",
      },
      "& $child2": {
        color: "blue",
      },
    },
    child1: {
      fontSize: "2em",
      padding: 24,
    },
    child2: {
      fontSize: "4em",
      padding: 28,
    },
  },
});

const FilterContainer = () => {
  const { clickCheck, checkAll, checks } = useFilterModel();
  const classes = useStyles(); //not used

  return (
    <div class="filter-box">
      {checks.map((filterSlice, index) => (
        <Filter
          filterSlice={filterSlice}
          clickCheck={clickCheck}
          filterIndex={index}
        />
      ))}
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

export default FilterContainer;
