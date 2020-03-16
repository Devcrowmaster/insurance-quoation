import React from 'react'
const Form = () => {
  return ( 
    <form>
      <div>
        <label htmlFor="brand">Marca</label>
        <select id="brand">
          <option value="">--Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </select>
      </div>

      <div>
        <label htmlFor="year">Año</label>
        <select id="year">
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
        </select>
      </div>

      <div>
        <label>Plan</label>
        <input 
          type="radio" 
          name="plan" 
          id="basic"
          value="basic"
        />
        <label htmlFor="basic">Basico</label>
        <input 
          type="radio" 
          name="plan" 
          id="complete"
          value="complete"
        />
        <label htmlFor="complete">Completo</label>
      </div>

      <button type="button">Cotizar</button>
      
    </form>
   );
}
 
export default Form;