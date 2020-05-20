export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: new Date(),
        },
      ];
    case "COMPLETED_TODO":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: !item.completed }
          : item
      );
    case "CLEAR_TODO":
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};
