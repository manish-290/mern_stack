const nameEl = document.getElementById('name');
const bioEl = document.querySelector('.bio');
const toggleBtn = document.getElementById('toggle-theme');
const sayHiBtn = document.getElementById('say-hi');

const card = document.querySelector('.card');
const toggleInfoBtn = document.getElementById('toggle-info');
const extraInfo = document.getElementById('extra-info');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

sayHiBtn.addEventListener('click', () => {
  alert(`Hello, ${nameEl.textContent}! 👋\nKeep going — you're on day 1.`);
  bioEl.textContent = 'Nice click! Keep experimenting with the code.';
});


toggleInfoBtn.addEventListener('click',()=>{
    extraInfo.classList.toggle('hidden');

    //change button text based on state
    if(extraInfo.classList.contains('hidden')){
        toggleInfoBtn.textContent = "Show-info";
    }else{
        toggleInfoBtn.textContent = "Hide-Info";
    }
});

