const nameEl = document.getElementById('name');
const bioEl = document.querySelector('.bio');
const toggleBtn = document.getElementById('toggle-theme');
const sayHiBtn = document.getElementById('say-hi');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

sayHiBtn.addEventListener('click', () => {
  alert(`Hello, ${nameEl.textContent}! 👋\nKeep going — you're on day 1.`);
  bioEl.textContent = 'Nice click! Keep experimenting with the code.';
});
