import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";



const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    details: {
        backgroundColor: 'red'
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        flexBasis: "80%",
        flexShrink: 0
    },
    expanded: {
        '&$expanded': {
            margin: '0',

        }
    }

}));



export const EditorAccordion = ({ droppableId }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const cmps = useSelector(state => state.cmpModule.cmps)

    // Adding idx for the DND library
    cmps.map((item, idx) => item.idx = idx)

    const data = [
        {
            id: "panel1",
            heading: "Headers",
            secondaryHeading: "this is panel 2",
            details: cmps.filter(cmp => cmp.sectionType === 'header')
        },
        {
            id: "panel2",
            heading: "Main Sections",
            secondaryHeading: "this is panel 2",
            details: cmps.filter(cmp => cmp.sectionType === 'section')
        },
        {
            id: "panel3",
            heading: "Navigation Bars",
            secondaryHeading: "this is panel 1",
            details: cmps.filter(cmp => cmp.sectionType === 'navbar')
        },
        {
            id: "panel4",
            heading: "Cards",
            secondaryHeading: "this is panel 2",
            details: cmps.filter(cmp => cmp.sectionType === 'card')
        },
        {
            id: "panel5",
            heading: "Contacts",
            secondaryHeading: "this is panel 2",
            details: cmps.filter(cmp => cmp.sectionType === 'contact')
        },
        {
            id: "panel6",
            heading: "Images",
            secondaryHeading: "this is panel 2",
            details: cmps.filter(cmp => cmp.sectionType === 'img')
        },
        {
            id: "panel7",
            heading: "Text",
            secondaryHeading: "this is panel 2",
            details: cmps.filter(cmp => cmp.sectionType === 'txt')
        },
        {
            id: "panel8",
            heading: "Footer",
            secondaryHeading: "this is panel 2",
            details: cmps.filter(cmp => cmp.sectionType === 'footer')
        },

    ];

    const style = {
        backgroundColor: '#2b3039',
        boxShadow: 'none',
        padding: '3px 0.5rem',
        color: '#f2efe7',
    }

    return (
        <Droppable isDropDisabled={true} droppableId={droppableId} key={droppableId}>
            {provided => {
                return (
                    <div className={classes.root} provided={provided} {...provided.droppableProps}
                        ref={provided.innerRef}>
                        {data.map((accordion, idx) => {
                            const { id, heading, details } = accordion;
                            return (
                                <Accordion
                                    style={style}
                                    expanded={expanded === id}
                                    key={id}
                                    onChange={handleChange(id)}
                                    classes={{ expanded: classes.expanded }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon style={{ fontSize: '2rem', color: '#f2efe7' }} />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography component={'span'} className={classes.heading}>{heading}</Typography>

                                    </AccordionSummary>
                                    <AccordionDetails>

                                        <Typography component={'span'} >

                                            {details.map(item => {

                                                return (<Draggable key={item.id}
                                                    draggableId={item.id}
                                                    index={item.idx}>
                                                    {provided => {

                                                        return <div ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}>{item.content}</div>
                                                    }}
                                                </Draggable>)
                                            })}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}
                        {provided.placeholder}
                    </div>
                )
            }}
        </Droppable>
    )
}