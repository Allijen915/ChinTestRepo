const btn = document.getElementById('inc');
const msg = document.getElementById('message');
let clicks = 0;
btn.addEventListener('click', () => {
  clicks++;
  msg.textContent = `Button clicked ${clicks} time${clicks===1 ? '' : 's'}`;
});
