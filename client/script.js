
fetch('http://localhost:3002')
.then(res => res.json())
.then(data => display(data))

function display (data){
  
    data.forEach(user => {
        const {name} = user
        document
        .querySelector('ul')
        .innerHTML += `<li>${name}</li>`
        
    });
}


function postData (id, name){

fetch('http://localhost:3002', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'  
     
  },
  body: JSON.stringify({id: 7, name: 'Some'})
}).then(res => res.json())
  .then(res => console.log(res));
}

//postData ()