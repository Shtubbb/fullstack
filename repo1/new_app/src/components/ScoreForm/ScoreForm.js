import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { ajaxService } from '../../services/ajaxService';
import { RateRestaurant } from "../../slices/restaurants"

export function ScoreForm(props) {
  const dispatch = useDispatch();
  const { id } = props;
  const user = useSelector((state) => state.user.id)
  const [rating, setRating] = useState(5);
  const [ratingError, setRatingError] = useState("");


  const onSubmit = (event) => {
    event.preventDefault();
    const answer = Number(event.target.value)
    if (ratingError === "") {
      console.log(answer)
      ajaxService("/ratings", {
        method: 'POST',
        body: JSON.stringify({ id, user, answer }),
        headers : {
          'Content-Type': 'application/json'
        }
      });
      dispatch(RateRestaurant(id));
    }
  };

  const handleChangeRating = (event) => {
    event.preventDefault();
    if (!isNaN(event.target.value) && Number(event.target.value) <= 5 && Number(event.target.value) > 0) {
      setRatingError('');
    } else {
      setRatingError('Рейтинг должен быть числом от 1 до 5');
    }
    setRating(event.target.value);
  };

  return (
    <form>
      <div className='field'>
        <label>Ваш Рейтинг</label>
        <input name='rating' value={rating} onChange={handleChangeRating}></input>
      </div>
      <div>
        {('' === ratingError ) ?
        <button className='submit' type='submit' onClick={onSubmit}>
          Оценить
        </button>
        :
        <div className='error'>{ratingError}</div>
        }
      </div>
    </form>
  );
}