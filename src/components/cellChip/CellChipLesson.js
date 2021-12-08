import { Chip } from "@mui/material";

const CellChipLesson = ({ lessonNum, grade }) => {
  return typeof lessonNum === "number" ? ( //not a special case
    <Chip
      label={lessonNum}
      color="success"
      size="small"
      variant={!(grade >= 5) ? "outlined" : "filled"}
      sx={{
        mr: "2px",
      }}
    />
  ) : (
    <Chip
      label={lessonNum[0] + " ή " + lessonNum[1]} //special case for lessons like 151 - 251
      color="success"
      size="small"
      variant={!(grade >= 5) ? "outlined" : "filled"}
      sx={{
        mr: "2px",
      }}
    />
  );
};

export default CellChipLesson;
