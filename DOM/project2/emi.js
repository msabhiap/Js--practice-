const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
   const height=parseInt( document.querySelector('#height').value);
    const weight=parseInt( document.querySelector('#weight').value);
    const results=document.querySelector('#results');


    if(height===''||height<0|| isNaN(height)){
        results.innerHTML=`Please give a Valid Height ${height}`
    }else if(weight===''||weight<0|| isNaN(weight)){
        results.innerHTML=`Please give a Valid Height ${weight}`

    }else{
      const bmi=  (weight/((height*height)/1000)).toFixed(2)
      //show the results
      //results.innerHTML=`<span>${bmi}</span>`
        if(bmi<50){
        results.innerHTML=`<span>Under weigth :${bmi}</span>`;
        }else if(bmi>50 && bmi<100){
            results.textContent=`Normal Weight:${bmi}`;
        }else{
            results.textContent=`Over Weight : ${bmi}`
        }
    }
  
   
});