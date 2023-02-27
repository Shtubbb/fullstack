import { useState } from 'react';
import { useLogin } from './useLogin';
import { useRegistration } from './useRegistration';

export function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoginForm, setIsLoginForm] = useState(true);
  const { handleLogin } = useLogin({ login, password, setError });
  const { handleRegister } = useRegistration({
    login,
    password,
    setError,
    handleLogin,
  });

  const handleChangePassword = (event) => {
    setError('');
    setPassword(event.target.value);
  };

  const handleChangeLogin = (event) => {
    setError('');
    setLogin(event.target.value);
  };

  const handleChangeLoginType = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <aside className='main-login'>
      <div className='roundable login'>
        <h2>{isLoginForm ? 'Войти' : 'Зарегистрироваться'}</h2>
        <div className='field'>
          <label>Логин</label>
          <input value={login} onChange={handleChangeLogin} />
        </div>
        <div className='field'>
          <label>Пароль</label>
          <input
            value={password}
            type='password'
            onChange={handleChangePassword}
          />
        </div>
        <div className='error'>{error}</div>
        <button
          className='submit-button'
          onClick={isLoginForm ? handleLogin : handleRegister}
        >
          {isLoginForm ? 'Войти' : 'Зарегистрироваться'}
        </button>
        <button className='submit-button' onClick={handleChangeLoginType}>
          {isLoginForm ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </div>
    </aside>
  );
}