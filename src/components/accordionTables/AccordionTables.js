import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import SmallTable from "../smallTable";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  didaktikiFirst,
  didaktikiSecond,
  statistikiFirst,
  statistikiSecond,
  ipologistikaFirst,
  ipologistikaSecond,
} from "../../library/eidikeuseis";

const AccordionTables = () => {
  return (
    <div>
      <Typography variant="h6" gutterBottom component="div" marginTop={10}>
        Πίνακες Ειδικεύσεων
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            marginTop: 2,
          }}
        >
          <Typography>Ειδίκευση Διδακτικής</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* first table */}
          <SmallTable arr1={didaktikiFirst} arr2={didaktikiSecond} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            marginTop: 2,
          }}
        >
          <Typography>
            Ειδίκευση Στατιστικής και Επιχειρησιακής Έρευνας
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* second table */}
          <SmallTable arr1={statistikiFirst} arr2={statistikiSecond} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            marginTop: 2,
          }}
        >
          <Typography>Ειδίκευση Υπολογιστικών Μαθηματικών</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* third table */}
          <SmallTable arr1={ipologistikaFirst} arr2={ipologistikaSecond} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default AccordionTables;
