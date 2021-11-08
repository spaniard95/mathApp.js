import "./matrix.css";
import { groupByCategory } from "../../library";
import { useSelector } from "react-redux";

const categoriesLi = ["ΥΠ", "ΠΚΘΜ", "ΠΚΕΜ", "ΚΘΜ", "ΚΕΜ", "ΤΕΣΤ"];

const Matrix = () => {
  const catalog = useSelector((state) => state.catalog);
  const group = groupByCategory(catalog);

  const loadPassedLessons = () => {
    const arr1 = [];
    for(let i=0; i<=5; i++) {
      arr1.push(
      <tr>
        <td>{categoriesLi[i]}</td>
        {group[i] ? 
          <td>{group[i].filter(lesson => 
            Number(lesson.grade) >= 5 ).length}
          </td> 
          : 
          <td>0</td>}
      </tr>
    )}
    return arr1
  }

  return <div class="results-matrix">
    <h1>Αποτελέσματα</h1>
    {/* <div>future checkbox</div> */}
    <table>
      <tr>
        <th>Κατηγορίες Μαθημάτων</th>
        <th>Επιτυχίες</th>
      </tr>
      {loadPassedLessons().map(x =>x)}
    </table>
  </div>
};

export default Matrix;