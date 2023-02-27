import { useDispatch, useSelector } from "react-redux";
import { SetRestaurants } from "../slices/restaurants";
import { ajaxService } from "../services/ajaxService";
import { useEffect } from "react";


export function useRestaurants() {
  const dispatch = useDispatch();
  const needUpdate = useSelector((state) => state.restaurant.needUpdate)

  useEffect(() => {
    if (needUpdate === true) {
      ajaxService(`/restaurants`).then((data) => {
        dispatch(SetRestaurants(data));
      });
    }
  }, [needUpdate])
}