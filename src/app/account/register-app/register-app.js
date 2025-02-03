const register = document.querySelector('#register-user')

register.addEventListener('submit', (event) => {
  event.preventDefault();

  const usernameRegister = document.querySelector('#username').value
  const passwordRegister = document.querySelector('#password').value

  localStorage.setItem('user', JSON.stringify({ name: usernameRegister, passwd: passwordRegister }))

  document.querySelector('#username').value = ''
  document.querySelector('#password').value = ''
  document.querySelector('#email').value = ''
  document.querySelector('#confirm-password').value = ''

  alert('Usuário registrado com sucesso!')
})
