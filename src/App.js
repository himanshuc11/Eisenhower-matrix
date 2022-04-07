import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";

import { Button, Box } from "@chakra-ui/react";

import { DragDropContext } from "react-beautiful-dnd";

import { useDispatch, useSelector } from "react-redux";
import { moveWithinColumn, moveAcrossColumn } from "./redux/ducks/grid";

import Matrix from "./Matrix";
import AddTask from "./AddTask";

function App() {
  const gridData = useSelector((state) => state.grid);
  const dispatch = useDispatch();

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    // User dropped draggable outside the droppable
    if (!destination) return;

    // User dropped draggable at the same postion before drag started
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // User dropped inside the same column
    if (destination.droppableId === source.droppableId) {
      const column = gridData.columns[destination.droppableId];
      const droppedFromIndex = source.index;
      const droppedAtIndex = destination.index;
      let task = column.taskIds[droppedFromIndex];

      let copy = [...column.taskIds];
      copy = copy.filter((t) => t !== task);

      let tasksBefore;
      if (droppedAtIndex === 0) {
        tasksBefore = [];
      } else {
        tasksBefore = copy.slice(0, droppedAtIndex);
      }

      let tasksAfter;
      if (droppedAtIndex === column.taskIds.length) {
        tasksAfter = [];
      } else {
        tasksAfter = copy.slice(droppedAtIndex);
      }

      let newTasks = [...tasksBefore, task, ...tasksAfter];
      dispatch(moveWithinColumn(column.id, newTasks));
      return;
    }

    // Move across columns
    const sourceColumnId = source.droppableId;
    const destinationColumnId = destination.droppableId;
    const task = gridData.columns[sourceColumnId].taskIds[source.index];

    const sourceColumTaskIds = gridData.columns[sourceColumnId].taskIds;
    const newSourceColumTaskIds = sourceColumTaskIds.filter((t) => t !== task);

    const destinationIndex = destination.index;

    const copyOfDestinationTaskIds = [
      ...gridData.columns[destinationColumnId].taskIds,
    ];

    let tasksBefore;
    if (destinationIndex === 0) {
      tasksBefore = [];
    } else {
      tasksBefore = copyOfDestinationTaskIds.slice(0, destinationIndex);
    }

    let tasksAfter;
    if (
      destinationIndex === gridData.columns[destinationColumnId].taskIds.length
    ) {
      tasksAfter = [];
    } else {
      tasksAfter = copyOfDestinationTaskIds.slice(destinationIndex);
    }

    let newTasks = [...tasksBefore, task, ...tasksAfter];
    dispatch(
      moveAcrossColumn(
        sourceColumnId,
        newSourceColumTaskIds,
        destinationColumnId,
        newTasks
      )
    );
  };

  return (
    <ChakraProvider>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Box height={"100%"} width={"100%"}>
          <Matrix>
            <AddTask></AddTask>
          </Matrix>
        </Box>
      </DragDropContext>
    </ChakraProvider>
  );
}

export default App;
