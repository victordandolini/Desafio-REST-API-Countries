const btnDarkmode = document.querySelector('.btn-darkmode');

btnDarkmode.addEventListener('click', () => {
    console.log('clickou')
    document.body.classList.toggle('darkmode');
    
    if(document.body.className === 'darkmode'){
        btnDarkmode.innerHTML = `
        <i class="far fa-moon"></i> 
        Dark Mode
        ` 
    } else {
        btnDarkmode.innerHTML = `
        <i class="far fa-sun"></i> 
        Light Mode
        `
    }
})