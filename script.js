function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}
async function typeWriter(id, message, delay) {
  for ( i=0; i < message.length; i++) {
    document.getElementById(id).innerHTML += message.charAt(i);
    await sleep(delay);
  }
}
