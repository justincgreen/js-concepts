async function fetchData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    if (response.status == 200) {
     let data = await response.json();    
     console.log(data);
    }   
  } catch(error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();