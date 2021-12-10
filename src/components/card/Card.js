import "./card.css";
import SelectCateg from "./SelectCateg";
import { IconButton, TextField, Typography } from "@mui/material";
import useCatalogModel from "../../models/catalogModel/useCatalogModel";
import { styled } from "@mui/system";
import { useGradesModel } from "../../models/gradesModel";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

//needs work
const GradeTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "rgb(90, 190, 190)",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderColor: "rgb(150, 150, 150)",
    padding: "4px !important", // override inline-style
  },
});

const Card = ({ num, title, category, grade = "", selected }) => {
  const { setCategoryChange, setGrade } = useCatalogModel();
  const { setGrade2 } = useGradesModel();

  return (
    <li class="flex-card">
      <n id="num">{num}</n>
      <div class="line">
        <IconButton
          color="info"
          aria-label="add an alarm"
          variant="outlined"
          sx={{}}
        >
          <BookmarkBorderIcon sx={{}} />
        </IconButton>
        <GradeTextField
          label="Βαθμός"
          size="small"
          color="primary"
          value={grade || ""} //without || "" the component becomes unControlled
          error={parseInt(grade) < 5}
          onChange={(e) => {
            setGrade2(num, e.target.value);
          }}
          type="number"
          variant="outlined"
          sx={{
            float: "right",
            padding: 1,
            margin: 1.1,
            width: 95,
            textAlign: "center", //doesnt work
          }}
        />
      </div>
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
    </li>
  );
};

export default Card;
