import React from "react";
import "./updatePassword.css";
import Password from "../../assets/img/icon/passPage.png";
import { useState } from "react";
import Loading from "../../assets/img/icon/loading.gif";

const UpdatePassword = () => {
  const [field, setField] = useState({
    newpassword : "",
    confirmpassword : "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (event) => {
    let {name, value} = event.currentTarget;
    setField({...field, [name] : value});
    console.log(field);
  }

  return (
    <div className="widget">
      <h3 className="widgetTitle pass">Change Password</h3>
      <div className="contPass">
      <div className="left">
        <img src={Password} alt="" />
      </div>
      <div className="right">
        <form>
        <div className="changePassItem">
          <label>New Password</label>
          <input
            type="password"
            name="newpassword"
            value={field.newpassword}
            className="form-control"
            onChange={handleOnChange}
          />
        </div>
        <div className="changePassItem">
        <label>Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            value={field.confirmpassword}
            className="form-control"
            onChange={handleOnChange}
          />
        </div>
        <button className="btnSavePass" disabled={isLoading}>
          {isLoading ? <img src={Loading} alt="" width="40px" /> : "Save"}
        </button>
        </form>
      </div>
      </div>
      
    </div>
  );
};

export default UpdatePassword;
