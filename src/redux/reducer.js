const initState = {
  // initial state
  filters: {
    search: "",
    status: "all",
    priority: [],
  },
  totoList: [
    { id: 1, name: "Learn Yoga", completed: true, priority: "High" },
    { id: 2, name: "Learn React", completed: false, priority: "High" },
    { id: 3, name: "Learn Java", completed: true, priority: "Low" },
    { id: 4, name: "Learn Golang", completed: false, priority: "Medium" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        totoList: [...state.totoList, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        totoList: state.totoList.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        totoList: state.totoList.filter((todo) => todo.id !== action.payload),
      };
    case "FILTER_TODO":
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
