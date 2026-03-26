function copyPix() {
  const pixKey = document.getElementById('pixKey').textContent;
  navigator.clipboard.writeText(pixKey).then(() => {
    const msg = document.getElementById('copyMsg');
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', 2000);
  });
}

function sendWhatsApp(event) {
  event.preventDefault();
  let phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  phone = phone.replace(/\D/g, '');

  if (phone.length < 10) {
    alert("Digite um número válido com DDD e número.");
    return;
  }

  /*if (phone.length === 10 || phone.length === 11) {
    phone = '55' + phone;
  }*/

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phone}${message ? `?text=${encodedMessage}` : ''}`;
  window.location.href = url;
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('public/sw.js')
      .then(() => console.log('PWA ativo'))
      .catch(err => console.log('Erro SW:', err));
  });
}