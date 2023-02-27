import { useSelector } from 'react-redux';
import { RestaurantCore } from '../RestaurantCore/RestaurantCore';

export function Restaurants() {
  const restaurants = useSelector((state) => state.restaurant.restaurantIds);

  return (
    <>
      <aside className='restaurant-aside'>
        {restaurants.map((id) => (
          <RestaurantCore id={id} type={"add"} key={id}/>
        ))}
      </aside>

    </>
  );
}