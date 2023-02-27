import { useSelector, useDispatch } from 'react-redux';
import { ScoreForm } from "../ScoreForm/ScoreForm"
import { AddMyRestaurant } from "../../slices/restaurants"
import { isLogin } from '../../utils/isLogin';


export function RestaurantCore(props) {
  const dispatch = useDispatch();
  const { id, type } = props;
  const restaurant = useSelector((state) => state.restaurant.restaurantDict[id]);
  const user = useSelector((state) => state.user.user);

  const { name, adress, numRated, rating} = restaurant;

  const handleAddClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(AddMyRestaurant(id));
  };

  return (
      <section className='roundable'>
        <h1>{name}</h1>
        <p>{adress}</p>
        <p>Рейтинг: {rating}</p>
        <p>Количество оценок: {numRated}</p>
        {isLogin() && type === "score" &&(
          <ScoreForm id={id} className="form"/>
        )}
        {isLogin() && type === "add" && (
          <>
            <button onClick={handleAddClick}>Добавить в желаемое</button>
          </>
        )}
      </section>
  );
}