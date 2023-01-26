let message = "For further information, contact me!";
let id = "text";
let delay = 150;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, Math.random() * 5 * ms));
}
async function typeWriter(id, message, delay) {
  for (i = 0; i < message.length; i++) {
    document.getElementById(id).innerHTML += message.charAt(i);
    await sleep(delay);
  }
  await sleep(delay*3)
  document.getElementById(id).innerHTML = ""
  typeWriter(id, message, delay)
}

typeWriter(id,message,delay)