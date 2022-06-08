import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div style={{ marginTop: "50px", marginLeft: "20%", marginRight: "20%" }}>
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
          <Typography>공지사항입니다.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>SEA C의 사용법을 알려드립니다.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>공부를 해보아요!!</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>SEA S의 웹사이트에 오신걸 환영합니다.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>안녕하세요. 함꼐 CS 스터디를 해봅시다.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
