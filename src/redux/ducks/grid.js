const MOVE_WITHIN_COLUMN = "move_within_column";
const MOVE_ACROSS_COLUMN = "move_across_column";
const DELETE_TASK = "delete_task";
const ADD_TASK = "add_task";

export const moveWithinColumn = (columnId, task) => {
  return { type: MOVE_WITHIN_COLUMN, columnId: columnId, task };
};

export const moveAcrossColumn = (
  sourceColumnId,
  sourceColumTask,
  destinationColumnId,
  destinationColumnTask
) => {
  return {
    type: MOVE_ACROSS_COLUMN,
    sourceColumnId,
    sourceColumTask,
    destinationColumnId,
    destinationColumnTask,
  };
};

export const deleteTask = () => {
  return { type: DELETE_TASK };
};

export const addTask = (id, content, columnId) => {
  return { type: ADD_TASK, id, content, columnId };
};

const initialState = {
  tasks: {
    "task-1": { id: "task-1", content: "Urgent 1" },
    "task-2": { id: "task-2", content: "Urgent 2" },

    "task-3": { id: "task-3", content: "Schedule 1" },
    "task-4": { id: "task-4", content: "Schedule 2" },

    "task-5": { id: "task-5", content: "Delegate 1" },
    "task-6": { id: "task-6", content: "Delegate 2" },

    "task-7": { id: "task-7", content: "Eliminate 1" },
    "task-8": { id: "task-8", content: "Eliminate 2" },
    "task-9": { id: "task-9", content: "Eliminate 3" },
    "task-10": { id: "task-10", content: "Eliminate 4" },
    "task-11": { id: "task-11", content: "Eliminate 5" },
  },

  columns: {
    urgent: {
      id: "urgent",
      title: "Do these tasks now",
      taskIds: ["task-1", "task-2"],
    },

    schedule: {
      id: "schedule",
      title: "Schedule task for later",
      taskIds: ["task-3", "task-4"],
    },

    delegate: {
      id: "delegate",
      title: "Delegate to someone else",
      taskIds: ["task-5", "task-6"],
    },

    eliminate: {
      id: "eliminate",
      title: "These tasks should be eliminated",
      taskIds: ["task-7", "task-8", "task-9", "task-10"],
    },
  },
};

const gridReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case MOVE_WITHIN_COLUMN:
      newState.columns[action.columnId].taskIds = action.task;
      break;
    case MOVE_ACROSS_COLUMN:
      newState.columns[action.sourceColumnId].taskIds = action.sourceColumTask;
      newState.columns[action.destinationColumnId].taskIds =
        action.destinationColumnTask;
      break;
    case ADD_TASK:
      // console.log("Adding Task");
      newState.tasks[action.id] = { id: action.id, content: action.content };
      // console.log(action);
      newState.columns[action.columnId].taskIds.push(action.id);
      // console.log(action);
      break;
    case DELETE_TASK:
      console.log("Delete Task");
      break;
  }
  return newState;
};

export default gridReducer;
