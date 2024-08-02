import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTour } from "../store/tourSlice";

export const TourForm = ({ setState }) => {
  const dispatch = useDispatch();

  const [toursValue, setTousrValue] = useState({
    title: "",
    image: "",
    description: "",
    cost: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTousrValue({ ...toursValue, [name]: value, id: Date.now() });
  };

  const handleTourSubmit = (e) => {
    e.preventDefault();
    if (
      !toursValue.title ||
      !toursValue.cost ||
      !toursValue.description ||
      !toursValue.image
    ) {
      return alert("Заполните все поля");
    }

    dispatch(addTour(toursValue));
    setState(true);
    setTousrValue({
      title: "",
      image: "",
      description: "",
      cost: "",
    });

  };

  return (
    <StyledForm onSubmit={handleTourSubmit}>
      <p>Создать тур</p>
      <input
        type="text"
        name="title"
        placeholder="Название тура"
        value={toursValue.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Ссылка на картинку "
        value={toursValue.image}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Описание тура"
        value={toursValue.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="cost"
        placeholder="Стоимость"
        value={toursValue.cost}
        onChange={handleInputChange}
      />
      <button onClick={handleTourSubmit}>Создать</button>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 5px;
  width: 500px;
  margin: 0 auto;
  box-shadow: -1px 6px 2px 4px rgba(34, 60, 80, 0.2);

  & > input {
    padding: 5px 10px;
    border: 1px solid #333;
    border-radius: 5px;
    width: 100%;
  }

  & > button {
    padding: 5px 10px;
    border: 1px solid #333;
    color: #fff;
    background-color: #333;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      color: #333;
    }
  }
`;
