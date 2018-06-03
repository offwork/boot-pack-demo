import '../scss/app.scss';

async function getComponent() {
  const button = document.createElement('a');
  const container = document.createElement('div');
  container.className = 'container';
  container.appendChild(button);
  button.innerHTML = 'Back to Home Page!';
  button.href = '/';
  button.role = 'button';
  button.className = 'btn btn-success';
  return container;
}

getComponent().then(component => {
  document.body.appendChild(component);
});
