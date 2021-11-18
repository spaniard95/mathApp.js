import "./card.css";
import SelectCateg from "./SelectCateg";
import { TextField, Typography } from "@mui/material";
import useCatalogModel from "../../models/catalogModel/useCatalogModel";


const Card = ({num, title, category, grade, selected}) => {
    const {setCategoryChange, setGrade} = useCatalogModel();

    return (
        <li1 class="flex-card">
            <n id="num">{num}</n>
            {/* {grade!= null &&  
                <div>
                    <b id="line"> </b>
                </div>
            } */}
            {/* <input 
                type="number" 
                id="grade" 
                value={grade} 
                min="5" max="10" 
                onChange={e => setGrade(num, e.target.value)}>
            </input>  */}
            <TextField
                label="Βαθμός"
                id="filled-size-small"
                size="small"
                color="primary"
                value={grade} 
                error={ parseInt(grade)<5 }
                onChange={e => setGrade(num, e.target.value)}
                type="number"
                sx={{
                    float: "right",
                    padding: 1,
                    margin: 1.1,
                    width: 130,
                    textAlign: "center"
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
        </li1>
    );
};

export default Card;