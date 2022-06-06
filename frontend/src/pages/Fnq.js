import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div style={{ marginTop: "50px" }}>
      <h2>공지사항</h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>공지합니다</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            당장 이 사이트를 빠져나가십시오 악성코드가 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>돌아가세요</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>악성코드가있다구요!!</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
