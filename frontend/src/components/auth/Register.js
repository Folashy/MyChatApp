import React, {useState, useContext, useEffect} from 'react'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'

const Register = props => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const {setAlert} = alertContext
  const {register, error, clearErrors, isAuthenticated} = authContext

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/')
    }

    if (error && error.keyword === 'exists') {
      setAlert(error.msg, 'danger')
      clearErrors()
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history])

  const initialState = {
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirm_password: ""
  };

  const [user, setUser] = useState(initialState)

  const {
    username,
    fullname,
    email,
    password,
    confirm_password
  } = user

  const onChange = e => setUser({...user, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    if (
      username === '' ||
      fullname === '' ||
      email === '' ||
      password === '' ||
      confirm_password === ''  
    ) {
      setAlert('Please enter all fields', 'danger')
    } else if (password !== confirm_password) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        username,
        fullname,
        email,
        password,
        confirm_password
      });
    }
  }

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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password *"
            value={password}
            onChange={onChange}
            required
            minLength="4"
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
            minLength="4"
          />
        </div>
        <input
          type="submit"
          value="Signup"
          className="btn btn-primary btn-block"
        />
      </form>
      Already have an Account?{" "}
      <a href="http://localhost:3000/login">Login</a>
    </div>
  );
}

export default Register
