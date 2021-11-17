import Card from "../card";
import "./catalog.css";
import { Pagination, Typography } from "@mui/material";
import { useFilterModel } from "../../models/filterModel";
import useCatalogModel from "../../models/catalogModel/useCatalogModel";
import { getLessonsBy } from "../../library";

const Catalog = () => {
    const { checks, checkedCategs } = useFilterModel();
    const { lessons } = useCatalogModel();
    const { getLessonsByCateg } = getLessonsBy;
   
    const filteredLessons = getLessonsByCateg(lessons, checkedCategs(checks));
    return (
        <div className="catalog-box">
            <Typography variant="h6" component="div" sx={{ marginBottom: 2}}>
                {`Κατάλογος μαθημάτων (${filteredLessons.length})`}
            </Typography>
            <div class="pagination">
                <Pagination sx={{ float: "right"}} shape="rounded" size="small" count={3}/>            
            </div>
            <list class="card-container">
                {filteredLessons.map(lesson => 
                    <Card 
                        num={lesson.number} 
                        title={lesson.name} 
                        category={lesson.category} 
                        grade={lesson.grade}
                        selected={lesson.selected}
                    />
                )}    
            </list>
        </div>
    );
};

export default Catalog;