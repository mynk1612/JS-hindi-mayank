// md == markdown file 
# Projects related to DOM


## project link
[Click here ](https://stackblitz.com/edit/stackblitz-starters-yb348arc?file=page2.html,script.js)

// [main](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code 

## project 1
``` javascript 
console.log("MAYANK")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  buttons.addEventListener('click', function(event){
    console.log(event)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id
    }
  });
});

```

## project 2 solution 

```javascript 
const form = document.querySelector('form')
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
    
  if(height === '' || height < = || isNaN(height)){
    result.innerHTML = "Please give a valid height"
  }else if (weight === '' || weight < = || isNaN(weight)){
    result.innerHTML = "Please give a valid weight"
  } else {
    const bmi =  (weight / ((height*height)/10000)).toFixed(2)
    //show the result 
    results.innerHTML = <span>${bmi}</span>;
  }

})

```