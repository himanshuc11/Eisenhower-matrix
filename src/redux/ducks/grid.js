const MOVE_WITHIN_COLUMN = "move_within_column";
const MOVE_ACROSS_COLUMN = "move_across_column";
const DELETE_TASK = "delete_task";
const ADD_TASK = "add_task";

const persistedData = (function readPersistedData() {
  if (!localStorage.getItem("matrix")) {
    localStorage.setItem("matrix-key", 0);
    const initialState = {
      tasks: {
        // "task-1": { id: "task-1", content: "Urgent 1" },
      },

      columns: {
        urgent: {
          id: "urgent",
          title: "Do these tasks now",
          // taskIds: ["task-1", "task-2"],
          taskIds: [],
        },

        schedule: {
          id: "schedule",
          title: "Schedule task for later",
          // taskIds: ["task-3", "task-4"],
          taskIds: [],
        },

        delegate: {
          id: "delegate",
          title: "Delegate to someone else",
          // taskIds: ["task-5", "task-6"],
          taskIds: [],
        },

        eliminate: {
          id: "eliminate",
          title: "These tasks should be eliminated",
          // taskIds: ["task-7", "task-8", "task-9", "task-10"],
          taskIds: [],
        },
      },
    };
    return initialState;
  }

  let data = localStorage.getItem("matrix");
  data = JSON.parse(data);
  console.log(data);
  return data;
})();

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

const gridReducer = (state = persistedData, action) => {
  if (!state) return;
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
      newState.tasks[action.id] = { id: action.id, content: action.content };
      newState.columns[action.columnId].taskIds.push(action.id);
      break;
    case DELETE_TASK:
      console.log("Delete Task");
      break;
  }
  return newState;
};

export default gridReducer;
