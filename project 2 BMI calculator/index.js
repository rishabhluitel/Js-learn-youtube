
document.querySelector("button").addEventListener("click",(e)=>{
    let height = Number(document.querySelector('#height').value);
    let weight = Number(document.querySelector('#weight').value);
    let bmi=weight/((height**2)/10000);
    e.preventDefault();
    console.log(bmi.toFixed(2))
    document.querySelector("#results").innerHTML=bmi.toFixed(2);
  })
  