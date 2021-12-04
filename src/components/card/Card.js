import "./card.css";
import SelectCateg from "./SelectCateg";
import { TextField, Typography } from "@mui/material";
import useCatalogModel from "../../models/catalogModel/useCatalogModel";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

//needs work
const GradeTextField = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: 'rgb(90, 190, 190)',
        borderWidth: 2,
    },
    '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
        borderColor: 'rgb(150, 150, 150)',
        padding: '4px !important', // override inline-style
    },
    
  });


const Card = ({num, title, category, grade, selected}) => {
    const {setCategoryChange, setGrade} = useCatalogModel();
    
    return (
        <li class="flex-card">
            <n id="num">{num}</n>
            <GradeTextField
                label="Βαθμός"
                size="small"
                color="primary"
                value={grade || ""}  //without || "" the component becomes unControlled
                error={ parseInt(grade)<5 }
                onChange={e => setGrade(num, e.target.value)}
                type="number"
                variant="outlined"
                sx={{
                    float: "right",
                    padding: 1,
                    margin: 1.1,
                    width: 95,
                    textAlign: "center" //doesnt work
                }}
            />
            <div id="double">
            <Typography variant="h7" component="div" paddingBottom={0.5}>
                {title}
             </Typography>
                    <SelectCateg 
                        num={num}
                        category={category}
                        selected={selected}
                        setCategoryChange={setCategoryChange} 
                    />
            </div>        
        </li>
    );
};

export default Card;