import Card from "../card";
import lessons from "./LessonCatalog";
import "./catalog.css";

const Catalog = () => {
    return (
        <div className="catalog-box">
            <div>
                <h1>Κατάλογος μαθημάτων</h1>
            </div>
            <select id="select1">
                <option value="Υποχρεωτικό">Αριθμός Καταλόγου</option>
            </select>
            <list class="card-container">
                {lessons.map(lesson => 
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