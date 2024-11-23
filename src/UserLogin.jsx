import React, { Component } from 'react';
import './App.css';

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      successMessage: ''
    };
  }

  handleEmailChange = (e) => {
    const value = e.target.value;
    this.setState({ email: value });

    if (value && !value.endsWith('.ru')) {
      console.warn('Yalnız .ru domenlərinə icazə verilir.');
    }
  };

  handlePasswordChange = (e) => {
    const value = e.target.value;
    this.setState({ password: value });

    if (value && value.length < 8) {
      console.warn('Ən azı 8 simvol');
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    if (!email.endsWith('.ru')) {
      this.setState({ errorMessage: 'Yalnız .ru domenlərinə icazə verilir.', successMessage: '' });
    } else if (password.length < 8) {
      this.setState({ errorMessage: 'Ən azı 8 simvol', successMessage: '' });
    } else {
      this.setState({ errorMessage: '', successMessage: 'Uğurlu giriş!' });
      console.log('Daxil olundu!');
    }
  };

  render() {
    const { email, password, errorMessage, successMessage } = this.state;

    return (
      <div className="user-login-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-field">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={this.handleEmailChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Parol:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    );
  }
}

export default UserLogin;
