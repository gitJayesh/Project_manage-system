import {
  GET_TASKS,
  GET_ADMIN_TASKS,
  // CLEAR_TASKS,
  ADD_TASK,
  DELETE_TASK,
  DELETE_ADMIN_TASK,
  // SET_CURRENT,
  // CLEAR_CURRENT,
  // UPDATE_TASK,
  // FILTER_TASKS,
  // CLEAR_FILTER,
  TASK_ERROR,
} from "../types";

var switchCases = (state, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        //loading: false,
        tasks: action.payload,
      };
    case GET_ADMIN_TASKS:
      return {
        ...state,
        adminTasks: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        //loading: false,
      };
    // case UPDATE_TASK:
    //   return {
    //     ...state,
    //     tasks: state.tasks.map((task) =>
    //       task._id === action.payload._id ? action.payload : task
    //     ),
    //     loading: false,
    //   };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
        loading: false,
      };
    case DELETE_ADMIN_TASK:
      return {
        ...state,
        adminTasks: state.adminTasks.filter(
          (task) => task._id !== action.payload
        ),
        loading: false,
      };
    // case CLEAR_TASKS:
    //   return {
    //     ...state,
    //     tasks: null,
    //     filtered: null,
    //     error: null,
    //     current: null,
    //   };
    // case SET_CURRENT:
    //   return {
    //     ...state,
    //     current: action.payload,
    //   };
    // case CLEAR_CURRENT:
    //   return {
    //     ...state,
    //     current: null,
    //   };
    // case FILTER_TASKS:
    //   return {
    //     ...state,
    //     filtered: state.tasks.filter((task) => {
    //       const regex = new RegExp(`${action.payload}`, "gi");
    //       return task.name.match(regex) || task.email.match(regex);
    //     }),
    //   };
    // case CLEAR_FILTER:
    //   return {
    //     ...state,
    //     filtered: null,
    //   };
    case TASK_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default switchCases;
