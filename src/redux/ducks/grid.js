const MOVE_WITHIN_COLUMN = "move_within_column";
const MOVE_ACROSS_COLUMN = "move_across_column";
const DELETE_TASK = "delete_task";
const ADD_TASK = "add_task";
const EDIT_TASK = "edit_task";

const persistedData = (function readPersistedData() {
  if (!localStorage.getItem("matrix")) {
    localStorage.setItem("matrix-key", 0);
    const initialState = {
      tasks: {},

      columns: {
        urgent: {
          id: "urgent",
          title: "Do these tasks now",
          taskIds: [],
        },

        schedule: {
          id: "schedule",
          title: "Schedule task for later",
          taskIds: [],
        },

        delegate: {
          id: "delegate",
          title: "Delegate to someone else",
          taskIds: [],
        },

        eliminate: {
          id: "eliminate",
          title: "These tasks should be eliminated",
          taskIds: [],
        },
      },
    };
    return initialState;
  }

  let data = localStorage.getItem("matrix");
  data = JSON.parse(data);
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

export const deleteTask = (taskId) => {
  return { type: DELETE_TASK, taskId };
};

export const addTask = (id, content, columnId) => {
  return { type: ADD_TASK, id, content, columnId };
};

export const editTask = (id, content) => {
  return { type: EDIT_TASK, id, content };
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
      delete newState.tasks[action.taskId];
      for (let columnKey in newState.columns) {
        let column = newState.columns[columnKey];
        column.taskIds = column.taskIds.filter((t) => t !== action.taskId);
      }
      break;
    case EDIT_TASK:
      newState.tasks[action.id].content = action.content;
      break;
  }
  return newState;
};

export default gridReducer;
