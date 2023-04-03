
const form = document.querySelector('form')

form.addEventListener('submit', (event)=> {
    event.preventDefault()
console.log(event)
// console.log(name.value)

  const name = event.target.name.value;
  const idnumber = event.target.idnumber.value;
  const address = event.target.address.value;
  const funfact = event.target.funfact.value;
//   const name = event.target.name.value;
  console.log(name.value)
  
  const div = document.createElement('div')
  document.body.appendChild(div)

  const img_div =document.createElement('div')
  div.appendChild(img_div)

  img_div.innerHTML = '<img width="100" height="100" src="https://images.cdn4.stockunlimited.net/preview1300/silhouette-of-a-man_1441194.jpg">';

  const p = document.createElement('p')
  p.innerText = event.target.name.value
  div.appendChild(p)

  const p1 = document.createElement('p')
  p1.innerText = event.target.idnumber.value
  div.appendChild(p1)

  const p2 = document.createElement('p')
  p2.innerText = event.target.address.value
  div.appendChild(p2)

  const p3 = document.createElement('p')
  p3.innerText = event.target.funfact.value
  div.appendChild(p3)
})