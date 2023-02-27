import { useState } from 'react';

export function AddRest() {
  const [name, setName] = useState('Ресторан');
  const [nameError, setNameError] = useState('');
  const [adress, setAdress] = useState('ул.');
  const [adressError, setAdressError] = useState('');
  const [rating, setRating] = useState(5);
  const [ratingError, setRatingError] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    

    setRating(0)
    setName('Ресторан')
    setAdress('ул.')
  };

  const handleChangeTitle = (event) => {
    if (event.target.value.length > 0 && event.target.value.length <= 20) {
      setNameError('');
    } else {
      setNameError('Название должно быть меньше 20 символов и непустым');
    }
    setName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    if (event.target.value.length > 0 && event.target.value.length <= 25) {
      setAdressError('');
    } else {
      setAdressError('Название должно быть меньше 25 символов и непустым');
    }
    setAdress(event.target.value);
  };

  const handleChangeTopic = (event) => {
    if (!isNaN(event.target.value) && Number(event.target.value) <= 5 && Number(event.target.value) > 0) {
      setRatingError('');
    } else {
      setRatingError('Введите число от 1 до 5');
    }
    setRating(event.target.value);
  };

  return (
    <form className='main-add roundable'>
      <div className='field'>
        <label>Название</label>
        <input name='title' value={name} onChange={handleChangeTitle}></input>
      </div>
      <div className='error'>{nameError}</div>
      <div className='field'>
        <label>Адрес</label>
        <input
          name='description'
          value={adress}
          onChange={handleChangeDescription}
        ></input>
      </div>
      <div className='error'>{adressError}</div>
      <div className='field'>
        <label>Рейтинг</label>
        <input name='topic' value={rating} onChange={handleChangeTopic}></input>
      </div>
      <div className='error field'>{ratingError}</div>
      <div className='field'>
        {(adressError === "") && (nameError === "") && (ratingError === "") && <button className='submit-button' type='submit' onClick={onSubmit}>
          Добавить
        </button>}
      </div>
    </form>
  );
}