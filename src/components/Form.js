import React,{useState} from 'react';
import styled from '@emotion/styled';
import { getDiffYear } from '../helper';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 5rem;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 2px solid #e1e1e1;
  border-radius: 3px;
  appearance: none;
`;
const InputRatio = styled.input`
  margin: 0 .6rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 1rem;
  width: 100%;
  padding: 1rem;
  color : #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;
  &:hover{
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: red;
  color :white;
  padding: 1rem;
  width: 100%;
  text-align:center;
  margin-bottom:2rem;
`;

const Form = () => {

  const [ data , saveData] = useState({
    brand : '',
    year : '',
    plan: ''
  });

  const [error ,saveError] = useState(false);

  const {brand ,year ,plan} = data;

  const getData = e =>{
    saveData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e =>{
    e.preventDefault();
    if(brand.trim() === '' || year.trim() === '' || plan.trim() === ''){
      saveError(true);
      return;
    }
    saveError(false);

    //Base
    let result = 2000;

    //Obtener diferencia de años
    const diff = getDiffYear(year);
    // console.log(diff);

    //Por cada año hay que restar el 3%
    result -=  ((diff * 3) * result) /100;
    // console.log(result);
    //Americano 15%
    //Asiatico 5%
    //Europeo 30%
  
    //Plan 
    //Basico aumenta 20%
    // Completo 50%
  
    //Total
  }


  return ( 
    <form
      onSubmit={handleSubmit}
    >
      {error ? <Error>Todos los Campos son obligatorios</Error>  : null}   
      <Field>
        <Label htmlFor="brand">Marca</Label>
        <Select 
          name="brand"
          id="brand"
          value={brand}
          onChange={getData}
        >
          <option value="">--Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Field>

      <Field>
        <Label htmlFor="year">Año</Label>
        <Select 
          name="year"
          id="year"
          value={year}
          onChange={getData}
        >
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>

      <Field>
        <Label>Plan</Label>
        <InputRatio 
          type="radio" 
          name="plan" 
          id="basic"
          value="basic"
          checked={plan === "basic"}
          onChange={getData}
        />
        <label htmlFor="basic">Basico</label>
        <InputRatio 
          type="radio" 
          name="plan" 
          id="complete"
          value="complete"
          checked={plan === "complete"}
          onChange={getData}
        />
        <label htmlFor="complete">Completo</label>
      </Field>

      <Button type="submit">Cotizar</Button>
      
    </form>
   );
}
 
export default Form;