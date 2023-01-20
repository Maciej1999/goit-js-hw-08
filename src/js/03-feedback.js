import _ from 'lodash';
const form = document.querySelector('.feedback-form');

window.addEventListener('load', () => {
  const valueJSON = localStorage.getItem('feedback-form-state');
  const data = JSON.parse(valueJSON);
  try {
    Array.from(form.elements).forEach(el => {
      if (el.name === 'email') {
        el.value = data.email;
      }
      if (el.name === 'message') {
        el.value = data.message;
      }
    });
  } catch (error) {}
});

form.addEventListener(
  'input',
  _.throttle(e => {
    e.preventDefault();
    let data = {};
    Array.from(form.elements).forEach(el => {
      if (el.name === 'email') {
        data.email = el.value;
      }
      if (el.name === 'message') {
        data.message = el.value;
      }
    });
    const dataJSON = JSON.stringify(data);
    localStorage.setItem('feedback-form-state', dataJSON);
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  Array.from(form.elements).forEach(el => {
    if (el.name === 'email' || el.name === 'message') {
      el.value = '';
    }
  });
  const valueJSON = localStorage.getItem('feedback-form-state');
  const data = JSON.parse(valueJSON);
  console.log(data);
  localStorage.clear();
});
