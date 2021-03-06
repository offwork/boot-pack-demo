import './scss/app.scss';

async function getComponent() {
  const button = document.createElement('a');
  const container = document.createElement('div');
  container.className = 'container';
  container.appendChild(button);
  button.innerHTML = 'Go to About Page!';
  button.href = 'about.html';
  button.role = 'button';
  button.className = 'btn btn-primary';
  return container;
}

getComponent().then(component => {
  document.body.appendChild(component);
});
