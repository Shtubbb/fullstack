import { useSelector } from 'react-redux';
import { RestaurantCore } from './RestaurantCore/RestaurantCore';

export function MyRestaurants() {
  const restaurants = useSelector((state) => state.restaurant.myRestaurantIds);

  return (
    <>
      <aside className='restaurant-aside'>
        {restaurants.map((id) => (
          <RestaurantCore id={id} type={"score"} key={id}/>
        ))}
      </aside>
    </>
  );
}