import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { cmpService } from "../../services/cmp.service";
import { loadCmps } from "../../store/actions/cmp.action";


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
    const dispatch = useDispatch()
    const [expanded, setExpanded] = React.useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [minified, setMinified] = useState([])

    const onSetIsMobile = (boolean) => {
        setIsMobile(boolean);
    }

    useEffect(() => {
        window.addEventListener('touchstart', onSetIsMobile, true)
        window.addEventListener('touchend', onSetIsMobile, false)

        return () => {
            window.removeEventListener('touchstart', onSetIsMobile)
            window.removeEventListener('touchend', onSetIsMobile)
        };
    }, [])

    let minifiedCmps = []
    useEffect(() => {
        (async () => {
            const cmps = await dispatch(loadCmps())
            minifiedCmps = cmpService.getMinifiedCmps(cmps)
            minifiedCmps.forEach((item, idx) => item.idx = idx)
            if (minified.length === 0) {
                setMinified(minifiedCmps)
            }
        })()
    }, [minified])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const data = [
        {
            id: "panel1",
            heading: "Headers",
            secondaryHeading: "this is panel 2",
            details: minified.filter(cmp => cmp.sectionType === 'header')
        },
        {
            id: "panel2",
            heading: "Main Sections",
            secondaryHeading: "this is panel 2",
            details: minified.filter(cmp => cmp.sectionType === 'section')
        },

        {
            id: "panel4",
            heading: "Cards",
            secondaryHeading: "this is panel 2",
            details: minified.filter(cmp => cmp.sectionType === 'card')
        },
        {
            id: "panel5",
            heading: "Contacts",
            secondaryHeading: "this is panel 2",
            details: minified.filter(cmp => cmp.sectionType === 'contact')
        },
        {
            id: "panel6",
            heading: "Galleries",
            secondaryHeading: "this is panel 2",
            details: minified.filter(cmp => cmp.sectionType === 'img')
        },
        {
            id: "panel7",
            heading: "Text",
            secondaryHeading: "this is panel 2",
            details: minified.filter(cmp => cmp.sectionType === 'txt')
        },
        {
            id: "panel8",
            heading: "Footers",
            secondaryHeading: "this is panel 2",
            details: minified.filter(cmp => cmp.sectionType === 'footer')
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
                                                    {(provided, snapshot) => {
                                                        // Compenstate mobile wrong dragging offset position
                                                        const coppiedProps = provided.draggableProps;
                                                        if (snapshot.isDragging) {
                                                            if (isMobile || window.innerWidth < 850) {
                                                                if (window.innerWidth < 850) {
                                                                    coppiedProps.style = { ...coppiedProps.style, left: 350 }
                                                                }
                                                            }
                                                        }

                                                        return <div ref={provided.innerRef}
                                                            {...coppiedProps}
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