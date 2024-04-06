import React, { Component } from 'react';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      address: '',
      age: '',
    };
  }

  handleToggleForm = () => {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
    }));
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isLogin) {
      console.log('Login:', this.state.email, this.state.password);
    } else {
      console.log('Registration:', this.state);
    }
  }

  render() {
    return (
      <div className="login-container mt-3 mb-3 p-3">
        <h2 className='mb-3'>{this.state.isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={this.handleSubmit}>
          {!this.state.isLogin && (
            <div className='d-flex justify-content-between mx-5'>
              <label>Name:</label>
              <input class
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>
          )}
          <div className='d-flex justify-content-between mx-5'>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className='d-flex justify-content-between mx-5'>
            <label >Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          {!this.state.isLogin && (
            <div className='d-flex justify-content-between mx-5'>
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                required
              />
            </div>
          )}
          {!this.state.isLogin && (
            <div className='d-flex justify-content-between mx-5'>
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                required
              />
            </div>
          )}
          {!this.state.isLogin && (
            <div className='d-flex justify-content-between  mx-5'>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
                required
              />
            </div>
          )}
          {!this.state.isLogin && (
            <div className='d-flex justify-content-between mx-5'>
              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
                required
              />
            </div>
          )}
          <button type="submit">{this.state.isLogin ? 'Login' : 'Register'}</button>
        </form>
        <p onClick={this.handleToggleForm}>
          {this.state.isLogin ? 'Don\'t have an account? Register here.' : 'Already have an account? Login here.'}
        </p>
      </div>
    );
  }
}

export default Login;
