import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";

export default function ControlledAccordions({ review }) {
    console.log(review);
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>{review._id?.name || "carlos"}</Typography>
                    <Rating name="read-only" value={review.ratings} readOnly />
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {review.review}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
