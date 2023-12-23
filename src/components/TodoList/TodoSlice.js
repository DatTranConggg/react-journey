const initState = [
  { id: 1, name: "Learn Yoga", completed: true, priority: "High" },
  { id: 2, name: "Learn React", completed: false, priority: "High" },
  { id: 3, name: "Learn Java", completed: true, priority: "Low" },
  { id: 4, name: "Learn Golang", completed: false, priority: "Medium" },
];

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload]
    default:
      return state;
  }
};
export default todoReducer;
