import "./matrix.css";
import { groupByCategory } from "../../library";
import { useSelector } from "react-redux";

const categoriesLi = ["ΥΠ", "ΠΚΘΜ", "ΠΚΕΜ", "ΚΘΜ", "ΚΕΜ", "ΤΕΣΤ"];

const Matrix = () => {
  const catalog = useSelector((state) => state.catalog);
  const group = groupByCategory(catalog);
  console.log(group);
  const arr1 = [];
  for(let i=0; i<=5; i++) {
    arr1.push(
      <tr>
        <td>{categoriesLi[i]}</td>
        {group[i]? <td>{group[i].length}</td> : <td>0</td>}
      </tr>
    )
  }
  return <div class="results-matrix">
    <h1>Αποτελέσματα</h1>
    <div>click</div>
    <table>
      <tr>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <th>Κατηγορίες Μαθημάτων</th>
        <th>Επιτυχίες</th>
      </tr>
      {arr1}
      {/* <tr>
        <td>Alfreds </td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
      <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>Austria</td>
      </tr>
      <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>UK</td>
      </tr>
      <tr>
        <td>Laughing </td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
      </tr>
      <tr>
        <td>Magazzini </td>
        <td>Giovanni Rovelli</td>
        <td>Italy</td>
      </tr> */}
    </table>
  </div>
};

export default Matrix;