import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error && error.keyword === "exists") {
      setAlert(error.msg, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const initialState = {
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
    profilePicture: "",
    coverPicture: "",
    desc: "",
    city: "",
    from: "",
    relationship: "",
    phone: "",
    gender: "",
  };

  const [user, setUser] = useState(initialState);

  const {
    username,
    fullname,
    email,
    password,
    confirm_password,
    profilePicture,
    coverPicture,
    desc,
    city,
    from,
    relationship,
    phone,
    gender,
  } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      username === "" ||
      fullname === "" ||
      email === "" ||
      password === "" ||
      confirm_password === "" ||
      profilePicture === "" ||
      coverPicture === "" ||
      desc === "" ||
      city === "" ||
      from === "" ||
      relationship === "" ||
      phone === "" ||
      gender === ""
    ) {
      setAlert("Please enter all fields", "danger");
    } else if (password !== confirm_password) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        username,
        fullname,
        email,
        password,
        confirm_password,
        profilePicture,
        coverPicture,
        desc,
        city,
        from,
        relationship,
        phone,
        gender,
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Signup and <span className="text-primary">Chat</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            placeholder="Enter Username *"
            name="username"
            value={username}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            name="fullname"
            placeholder="Enter fullname *"
            value={fullname}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email *"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Select Gender</label> <br />
          <label htmlFor="gender">Male</label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={onChange}
          />
          <label htmlFor="gender">Female</label>
          <input type="radio" name="gender" value="Male" onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password *"
            value={password}
            onChange={onChange}
            required
            minLength="8"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password *"
            value={confirm_password}
            onChange={onChange}
            required
            minLength="8"
          />
        </div>
        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            type="text"
            name="profilePicture"
            placeholder="Optional"
            value={profilePicture}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverPicture">Cover Picture</label>
          <input
            type="text"
            name="coverPicture"
            placeholder="Optional"
            value={coverPicture}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            name="desc"
            value={desc}
            placeholder="Optional"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            value={city}
            placeholder="Optional"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input
            type="text"
            name="from"
            placeholder="Optional"
            value={from}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="relationship">Relationship</label>
          <input
            type="text"
            placeholder="Optional"
            name="relationship"
            value={relationship}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            value={phone}
            placeholder="Optional"
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
