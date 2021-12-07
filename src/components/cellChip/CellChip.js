import { Chip, TableCell } from "@mui/material";

const CellChip = ({ limit, passed, index }) => {
  const findLabel = (index, limit) => {
    if (index == -1) return limit;
    if (index == 0) return "=" + limit;
    return "≥" + limit;
  };

  return index < 6 ? (
    <TableCell align="center">
      {
        <Chip
          label={findLabel(index, limit)}
          color="success"
          size="small"
          variant={limit > passed ? "outlined" : "filled"}
          sx={limit > passed ? { borderColor: "white", color: "black" } : {}}
        />
      }
    </TableCell>
  ) : (
    <TableCell align="center">-</TableCell>
  ); //display nothing in the limitsof the last two categories(ΔΟΕ, ΔΠΤ)
};

export default CellChip;
