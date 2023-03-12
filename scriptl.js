document.getElementById('submit').addEventListener('click', function(){
    const finalResult = document.getElementById('result');
    const inputNumber = document.getElementById('celsiusInput');
    const celsius = inputNumber.value;
    if(celsius !== ''){
        const result = celsius * 9 / 5 + 32;
        finalResult.classList.add("bg-gradient-to-r", "from-violet-500", "to-fuchsia-500");
        finalResult.innerText = result + ' °F';
        inputNumber.value = '';
    }else{
        alert('Input Celsiun')
    }
   
});