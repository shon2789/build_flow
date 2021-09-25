import React from 'react'
import { DragDropContext } from "react-beautiful-dnd";
import { utilService } from '../services/util.service';
import { useEffect, useState } from 'react';
import { cmpService } from '../services/cmps.service';
import { Screen } from '../components/Screen';
import { MainEditor } from '../components/editor/MainEditor';
import { WebAppContainer } from '../components/editor/WebAppContainer';





// Draggable Components from backend, rendered into the accordion
let itemsFromBackend = cmpService.getCmps()
itemsFromBackend.map((item, idx) => item.idx = idx)

// Drag&Drop columns (Editor components && webApp builder)
const columnsFromBackend = {
    [utilService.makeId()]: {
        name: "Editor",
        items: itemsFromBackend
    },
    [utilService.makeId()]: {
        name: "Editing",
        items: []
    }
};

// Drag&Drop onDragEnd function, reordering the dragged elements and trigger other functions
const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;

    const { source, destination } = result;


    // Dragging from editor to the page editing
    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const cmp = cmpService.deepCloneCmp(result.draggableId)

        destItems.splice(destination.index, 0, { id: utilService.makeId(), cmp });
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
        // Reordering items in the page editing
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};



export const EditorPage = () => {
    const [columns, setColumns] = useState(columnsFromBackend);
    const [isEditorMenuToggled, setIsEditorMenuToggled] = useState(false)
    const [editorWidth, setEditorWidth] = useState('100%')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    //Cmp States
    const [currCmp, setCurrCmp] = useState(null)


    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })

    }, [windowWidth])

    const dndAreas = Object.entries(columns);
    const editor = dndAreas[0];
    const editing = dndAreas[1];

    const onToggleEditorMenu = (boolean) => {
        setIsEditorMenuToggled(boolean)
    }

    const onDragStart = () => {
        onToggleEditorMenu(false)
    }

    const onChangeEditorSize = (width) => {
        setEditorWidth(width)
    }

    const onDeleteCmp = (cmpId) => {
        const webAppCmps = editing[1].items;
        cmpService.deleteCmp(cmpId, webAppCmps.map(section => section.cmp))

        // setColumns( {...columns,
        //     [editing[0]]: {
        //         ...destColumn,
        //         items: destItems
        //     }})
    }

    const onSetCurrCmp = (ev, cmp) => {
        ev.stopPropagation()
        setCurrCmp(cmp)
    }

    return (
        <DragDropContext onDragStart={onDragStart} onDragEnd={result => onDragEnd(result, columns, setColumns)}>

            <main className="editor-page-container">
                <Screen isOpen={isEditorMenuToggled} exitScreen={onToggleEditorMenu} />
                <div className={`${isEditorMenuToggled ? 'side-editor-mobile-active' : ''} side-editor-container`}>
                    <MainEditor windowWidth={windowWidth} onChangeEditorSize={onChangeEditorSize} editorWidth={editorWidth} onToggleEditorMenu={onToggleEditorMenu} itemsFromBackend={editor[1].items} droppableId={editor[0]} />
                </div>

                <WebAppContainer editorWidth={editorWidth} onToggleEditorMenu={onToggleEditorMenu} itemsFromBackend={editing[1].items} droppableId={editing[0]}
                    onDeleteCmp={onDeleteCmp} onSetCurrCmp={onSetCurrCmp} currCmp={currCmp}
                />
            </main>

        </DragDropContext>
    )
}

