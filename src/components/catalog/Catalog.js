import Card from "../card";
import "./catalog.css";
import { useSelector } from "react-redux";

const Catalog = () => {
    const lessons = useSelector((state) => state.catalog);
    const filterChecks = useSelector((state) => state.filter.value);

    //have to find smarter way
    const filteredLessons = () => { 
        return lessons.filter(lesson => {
            for (let i=0; i<=6; i++) {
                if (filterChecks[i] && lesson.category.includes(i)) return true;   //if lesson is of the category and category is clicked in filter
            }
            return false;
        })
    };

    return (
        <div className="catalog-box">
            <div>
                <h1>{`Κατάλογος μαθημάτων (${filteredLessons().length})`} </h1>
            </div>
            <select id="select1">
                <option value="Υποχρεωτικό">Αριθμός Καταλόγου</option>
            </select>
            <list class="card-container">
                {filteredLessons().map(lesson => 
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