import { useDispatch, useSelector } from 'react-redux';
import { HeaderLink } from './HeaderLink';
import { setUser } from '../slices/user';
import { NeedUpdate } from '../slices/restaurants';
import { isLogin } from '../utils/isLogin';
import { useRestaurants } from '../utils/useRestaurants';

export function Header() {
  const dispatch = useDispatch();
  const user = "ilya"
  // const user = useSelector((state) => state.user.user);
  // useEffect(() => {
  //   if (isLogin()) {
  //     ajaxService('/user/current').then((data) => {
  //       dispatch(setUser(data));
  //     });
  //   }
  // }, []);

  function onLogout() {
    window.localStorage.setItem('ACCESS', '');
    window.localStorage.setItem('REFRESH', '');
    window.location.href = '/login';
  }
  useRestaurants();

  function update() {
    dispatch(NeedUpdate());
  }

  return (
    <header className='main-header'>
      <HeaderLink to=''>Главная</HeaderLink>
      <HeaderLink to='/restaurants' onClick={update}>Посмотреть рестораны</HeaderLink>
      {isLogin() && <HeaderLink to='/myrestaurants' onClick={update}>Выбранные рестораны</HeaderLink>}
      {isLogin() && <HeaderLink to='/add'>Добавить ресторан</HeaderLink>}
      {isLogin() ? (
        <HeaderLink onClick={onLogout}>
          Выйти, {user && user.username}
        </HeaderLink>
      ) : (
        <HeaderLink to='/login'>Войти</HeaderLink>
      )}
    </header>
  );
}