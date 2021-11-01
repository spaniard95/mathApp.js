import Card from "../card";
import lessons from "./LessonCatalog";
import "./catalog.css";

const Catalog = ({checks}) => {
    return (
        <div className="catalog-box">
            <div>
                <h1>Κατάλογος μαθημάτων</h1>
            </div>
            <select id="select1">
                <option value="Υποχρεωτικό">Αριθμός Καταλόγου</option>
            </select>
            <list class="card-container">
                {lessons.map(lessons => 
                    <Card num={lessons.number} title={lessons.name} catalog={lessons.category} grade ={lessons.grade}/>
                )}    
            </list>
        </div>
    );
};

export default Catalog;