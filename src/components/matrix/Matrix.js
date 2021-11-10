import "./matrix.css";
import { groupByCategory } from "../../library";
import { useSelector } from "react-redux";
import { majors, categoriesLi } from "../../library";

//chaos
const Matrix = () => {
  const catalog = useSelector((state) => state.catalog);
  const group = groupByCategory(catalog);

  //99% of the chaos
  const loadPassedLessons = () => {
    const arr1 = [];
    for(let i=0; i<=7; i++) {  
      arr1.push(
      <tr>
        <td>{categoriesLi[i]}</td>    
        {group[i] ?                              //builds passed lesson columns               
          <td>{group[i].filter(lesson => 
            Number(lesson.grade) >= 5).length}
          </td> 
          : 
          <td>0</td>}
        {majors.map(major =>                  //builds table major limits-part columns
          <td> ≥ {major.requirements[i]}</td>
        )
        }
        <td></td>
      </tr>
    )}
    return arr1
  }

  return <div class="results-matrix">
    <h1>Αποτελέσματα</h1>
    {/* <div>future checkbox</div> */}
    <table>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th>Κατευθύνσεις</th>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <th>Κατηγορίες Μαθημάτων</th>
        <th>Επιτυχίες</th>
        <th>Θεωρητικών Μαθηματικών</th>
        <th>Εφαρμοσμένων Μαθηματικών</th>
        <th>Θεωρητικών και Εφαρμοσμένων</th>
        <th></th>
      </tr>
      {loadPassedLessons()}
      <tr>
        <th>Συνολο</th>
        <th>22</th>
        <th>=36</th>
        <th>=36</th>
        <th>=36</th>
        <th></th>
      </tr>
    </table>

  </div>
};

export default Matrix;