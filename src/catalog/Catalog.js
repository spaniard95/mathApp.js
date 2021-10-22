import Card from "../card";
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
                <Card num={101} title={"Απειροστικος 1"} catalog={"Υποχρεωτικό"} grade ={7}/>
                <Card num={101} title={"Απειροστικος Λογισμός 3"} catalog={"Υποχρεωτικό"} grade={10}/>
            </list>
        </div>
    );
};

export default Catalog;