import { ajaxAuthService } from '../../services/ajaxService';

export function useRegistration({
  login,
  password,
  setError,
  handleLogin,
}) {
  const handleRegister = () => {
    if (!login) {
      setError('Введите логин');
      return;
    }

    if (!password) {
      setError('Введите пароль');
      return;
    }

    ajaxAuthService('/user/', {
      method: 'POST',
      body: JSON.stringify({
        username: login,
        password
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => handleLogin());
    setTimeout(() => {
      handleLogin();
    }, 1000);
  };

  return { handleRegister };
}