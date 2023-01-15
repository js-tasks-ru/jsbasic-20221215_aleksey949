function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  button.addEventListener('click', () => {
    document.querySelector('#text').hidden = !document.querySelector('#text').hidden;
  });
}
