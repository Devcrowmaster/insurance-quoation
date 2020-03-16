//Obtiene diferencia de años
export function getDiffYear(year){
  return new Date().getFullYear() - year;
}

//calcula el total a pagar segun la marca
export function calcBrand(brand){
  let increment;

  switch(brand){
    case 'european':
      increment = 1.30;
      break;
    case 'american':
      increment = 1.15;
      break;
    case 'asiatic':
      increment = 1.05;
      break;
    default:
      break;
  }
  return increment;
}

// Calcula el tipo de seguro

export function getPlan(plan){
  return (plan ==='basico') ? 1.20 : 1.50;
}

//Capitalize
export function capitalizeText(text){
  return text.charAt(0).toUpperCase() + text.slice(1);
} 