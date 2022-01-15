const initialState = {
  isLogin: localStorage.getItem("user") ? true : false,
  isLoading: false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  patient: [],
  docsche: [],
  patsche: [],
};

const listAction = [
  //Change Login
  {
    type: "CHANGE_LOGIN",
    name: "isLogin",
    action: null,
  },
  //Change user
  {
    type: "CHANGE_USER",
    name: "user",
    action: null,
  },
  //Change Loading
  {
    type: "CHANGE_LOADING",
    name: "isLoading",
    action: (state, actions) => {
      state.isLoading = actions.value;
      return {
        ...state,
      };
    },
  },
  {
    //patient
    type: "CHANGE_PATIENT",
    name: "patient",
    action: null,
  },
  //add patient
  {
    type: "ADD_PATIENTS",
    name: "patient",
    action: (state, actions) => {
      let tmp = [...state.patient];
      tmp.push(actions.value);
      return {
        ...state,
        ["patient"]: tmp,
      };
    },
  },
  //Update Patient
  {
    type: "UPDATE_PATIENT",
    name: "patient",
    action: (state, actions) => {
      let tmp = [...state.patient];
      let findIndex = tmp.findIndex((i) => {
        return i.id === actions.value.id;
      });
      tmp[findIndex] = actions.value;
      return {
        ...state,
        ["patient"]: tmp,
      };
    },
  },
  {
    type: "DELETE_PATIENT",
    name: "patient",
    action: (state, actions) => {
      let tmp = [...state.patient];
      let findIndex = tmp.findIndex((i) => {
        return i.id === actions.value;
      });
      tmp.splice(findIndex, 1);
      return {
        ...state,
        ["patient"]: tmp,
      };
    },
  },

  {
    //doctor schedule
    type: "CHANGE_DOCSCHE",
    name: "docsche",
    action: null,
  },
  //ADD DOCTOR SCHEDULE
  {
    type: "ADD_DOCSCHE",
    name: "docsche",
    action: (state, actions) => {
      let tmp = [...state.docsche];
      tmp.push(actions.value);
      return {
        ...state,
        ["docsche"]: tmp,
      };
    },
  },
  //UPDATE DOCTOR SCHEDULE
  {
    type: "UPDATE_DOCSCHE",
    name: "docsche",
    action: (state, actions) => {
      let tmp = [...state.docsche];
      let findIndex = tmp.findIndex((i) => {
        return i.id === actions.value.id;
      });
      tmp[findIndex] = actions.value;
      return {
        ...state,
        ["docsche"]: tmp,
      };
    },
  },
  //DELETE DOCTOR SCHEDULE
  {
    type: "DELETE_DOCSCHE",
    name: "docsche",
    action: (state, actions) => {
      let tmp = [...state.docsche];
      let findIndex = tmp.findIndex((i) => {
        return i.id === actions.value;
      });
      tmp.splice(findIndex, 1);
      return {
        ...state,
        ["docsche"]: tmp,
      };
    },
  },
  {
    //patient schedule
    type: "CHANGE_PATSCHE",
    name: "patsche",
    action: null,
  },
  //ADD PATIENT SCHEDULE
  {
    type: "ADD_PATSCHE",
    name: "patsche",
    action: (state, actions) => {
      let tmp = [...state.patsche];
      tmp.push(actions.value);
      return {
        ...state,
        ["patsche"]: tmp,
      };
    },
  },
  //UPDATE PATIENT SCHEDULE
  {
    type: "UPDATE_PATSCHE",
    name: "patsche",
    action: (state, actions) => {
      let tmp = [...state.patsche];
      let findIndex = tmp.findIndex((i) => {
        return i.id === actions.value.id;
      });
      tmp[findIndex] = actions.value;
      return {
        ...state,
        ["patsche"]: tmp,
      };
    },
  },
  //DELETE PATIENT SCHEDULE
  {
    type: "DELETE_PATSCHE",
    name: "patsche",
    action: (state, actions) => {
      let tmp = [...state.patsche];
      let findIndex = tmp.findIndex((i) => {
        return i.id === actions.value;
      });
      tmp.splice(findIndex, 1);
      return {
        ...state,
        ["patsche"]: tmp,
      };
    },
  },
];

const reducer = (state = initialState, actions) => {
  let found = listAction.find((item) => {
    return item.type === actions.type;
  });
  if (found !== null && found !== undefined) {
    if (found.action !== null) {
      return {
        ...found.action(state, actions),
      };
    }
    console.log(actions);
    state[found.name] = actions.value;
    return {
      ...state,
    };
  }
  return state;
};

export default reducer;
