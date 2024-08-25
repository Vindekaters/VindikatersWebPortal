
  const btn = document.getElementById('sendmail');

  document.getElementById('form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      btn.value = 'Requesting...';

      const serviceID = 'default_service';
      const templateID = 'vindikaters_contactus';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Request';
          alert('Checkyour email inbox');
        }, (err) => {
          btn.value = 'Request';
          alert(JSON.stringify(err));
        });
    });


