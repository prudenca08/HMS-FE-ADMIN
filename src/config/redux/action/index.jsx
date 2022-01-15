import axios from "axios";
import { GetConstant } from "../../constants";
axios.defaults.baseURL = GetConstant("API_URL");
axios.defaults.headers = {
  Accept: "application/json",
  "Content-type": "application/json",
};

//Change global redux value
export const ChangeGlobalRedux = (data) => {
  return (dispatch) => {
    return dispatch({ type: data.type, value: data.value });
  };
};

export const actionLogin = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/admins/login", data, {})
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        dispatch({ type: "CHANGE_LOGIN", value: true });
        dispatch({ type: "CHANGE_USER", value: data });
        localStorage.setItem("user", JSON.stringify(data));
        resolve(res.status);
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "CHANGE_LOGIN", value: false });
        dispatch({ type: "CHANGE_USER", value: null });
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        reject(err.response);
      });
  });
};
export const actionGetAllPatients = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("/patient", {})
      .then((result) => {
        let data = [...result.data.data];
        data.forEach((item) => {
          item.id = item["id:"];
        });
        console.log(data);
        dispatch({ type: "CHANGE_PATIENT", value: data });
        resolve(result.status);
      })
      .catch((err) => {
        dispatch({ type: "CHANGE_PATIENT", value: [] });
        reject(err.response);
      });
  });
};
export const actionCreatePatients = (data) => (dispatch) => {
  let token = localStorage.getItem("token");
  return new Promise((resolve, reject) => {
    axios
      .post("/admins/create-patient", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
      .then((result) => {
        console.log(data); 
        dispatch({ type: "ADD_PATIENT", value: data });
        resolve(result.status);
      })
      .catch((err) => {
        reject(err.response);
        console.log(data);
      });
  });
};

export const actionUpdatePatients = (data)=> (dispatch)=>{
  let token = localStorage.getItem("token");
  return new Promise((resolve, reject) => {
    axios
      .put("/admins/update-patient/"+data.id, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
      .then((result) => {
        console.log(data); 
        let _data = result.data.data
        _data.id = _data["id:"]
        dispatch({ type: "UPDATE_PATIENT", value: _data });
        resolve(result.status);
      })
      .catch((err) => {
        reject(err.response);
        console.log(data);
      });
  });
}

export const actionDeletePatients = (data)=> (dispatch)=>{
  let token = localStorage.getItem("token");
  return new Promise((resolve, reject) => {
    axios
      .delete("/admins/delete-patient/"+data.id, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
      .then((result) => {
        console.log(data); 
        dispatch({ type: "DELETE_PATIENT", value: data.id });
        resolve(result.status);
      })
      .catch((err) => {
        reject(err.response);
        console.log(data);
      });
  });
}

export const actionGetAllDoctorSchedule = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("/docses", {})
      .then((result) => {
        let data = [...result.data.data];
        data.forEach((item) => {
          item.id = item["id:"];
        });
        console.log(data);
        dispatch({ type: "CHANGE_DOCSCHE", value: data });
        resolve(result.status);
      })
      .catch((err) => {
        dispatch({ type: "CHANGE_DOCSCHE", value: [] });
        reject(err.response);
      });
  });
};

export const  actionCreateDocSchedule = (data) => (dispatch) => {
  let token = localStorage.getItem("token");
  return new Promise((resolve, reject) => {
    axios
      .post("/admins/create-docses", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
      .then((result) => {
        console.log(data); 
        let _data = result.data.data
        _data.id = _data["id:"]
        dispatch({ type: "ADD_DOCSCHE", value: _data });
        resolve(result.status);
      })
      .catch((err) => {
        reject(err.response);
        console.log(data);
      });
  });
};

export const actionUpdateDocSchedule = (data)=> (dispatch)=>{
  let token = localStorage.getItem("token");
  return new Promise((resolve, reject) => {
    axios
      .put("/admins/update-docses/"+data.id, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
      .then((result) => {
        console.log(data); 
        let _data = result.data.data
        _data.id = _data["id:"]
        dispatch({ type: "UPDATE_DOCSCHE", value: _data });
        resolve(result.status);
      })
      .catch((err) => {
        reject(err.response);
        console.log(data);
      });
  });
};

export const actionDeleteDocSchedule = (data)=>(dispatch)=>{
  let token = localStorage.getItem("token");
  console.log(token)
  return new Promise((resolve, reject) => {
    axios
      .delete("/admins/delete-docses/"+data.id, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
      .then((result) => {
        console.log(data); 
        dispatch({ type: "DELETE_DOCSCHE", value: data.id });
        resolve(result.status);
      })
      .catch((err) => {
        reject(err.response);
        console.log(data);
      });
  });

}
export const actionGetAllPatientSchedule = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get("/patsche", {})
      .then((result) => {
        let data = [...result.data.data];
        data.forEach((item) => {
          item.id = item["id:"];
        });
        console.log(data);
        dispatch({ type: "CHANGE_PATSCHE", value: data });
        resolve(result.status);
      })
      .catch((err) => {
        dispatch({ type: "CHANGE_PATSCHE", value: [] });
        reject(err.response);
      });
  });
};

export const  actionCreatePatSchedule = (data) => (dispatch) => {
  let token = localStorage.getItem("token");
  return new Promise((resolve, reject) => {
    axios
      .post("/admins/create-patsche", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
      .then((result) => {
        console.log(data); 
        let _data = result.data.data
        _data.id = _data["id:"]
        dispatch({ type: "ADD_PATSCHE", value: _data });
        resolve(result.status);
      })
      .catch((err) => {
        reject(err.response);
        console.log(data);
      });
  });
};

export const actionUpdatePatSchedule = (data)=> (dispatch)=>{
  let token = localStorage.getItem("token");
  return new Promise((resolve, reject) => {
    axios
      .put("/admins/update-patsche/"+data.id, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
      .then((result) => {
        console.log(data); 
        let _data = result.data.data
        _data.id = _data["id:"]
        dispatch({ type: "UPDATE_PATSCHE", value: _data });
        resolve(result.status);
      })
      .catch((err) => {
        reject(err.response);
        console.log(data);
      });
  });
};

export const actionDeletePatSchedule = (data)=>(dispatch)=>{
  let token = localStorage.getItem("token");
  console.log(token)
  return new Promise((resolve, reject) => {
    axios
      .delete("/admins/delete-patsche/"+data.id, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
      .then((result) => {
        console.log(data); 
        dispatch({ type: "DELETE_PATSCHE", value: data.id });
        resolve(result.status);
      })
      .catch((err) => {
        reject(err.response);
        console.log(data);
      });
  });

}

