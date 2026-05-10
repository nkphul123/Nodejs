let x = 2;
let y = 3;
let result = x+y;
// async function fetchalldata(){
//   let fetchdata = await fetch('https://jsonplaceholder.typicode.com/todos'); 
//   console.log(await fetchdata.json()); 
// }
// fetchalldata()
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((data) => data.json())      // Convert to JSON
  .then((jsonData) => console.log(jsonData))  // Log JSON
  .catch((error) => console.log(error));
  
console.log(result);