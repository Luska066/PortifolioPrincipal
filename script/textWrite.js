const textWelcome = document.querySelector('.text-aboutMe > p')

function typeWriter(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letra,i)=>{
        setTimeout(()=>{
            element.innerHTML += letra;
        },25*i)
    })
}

typeWriter(textWelcome)