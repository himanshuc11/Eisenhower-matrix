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
      taskIds: ["task-7", "task-8"],
    },
  },
};
