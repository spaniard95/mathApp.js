import Card from "../card";
import "./catalog.css";
// import { useSelector } from "react-redux";
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
            <div>
                <h1>{`Κατάλογος μαθημάτων (${filteredLessons.length})`} </h1>
            </div>
            <select id="select1">
                <option value="Υποχρεωτικό">Αριθμός Καταλόγου</option>
            </select>
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