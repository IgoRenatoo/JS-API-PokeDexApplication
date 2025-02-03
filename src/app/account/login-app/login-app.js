const login = document.querySelector('#login-form')

login.addEventListener('submit', (event) => {
  event.preventDefault()
  
  const usernameLogin = document.querySelector('#username').value
  const passwordLogin = document.querySelector('#password').value
  const user = JSON.parse(localStorage.getItem('user'))
  
  if(usernameLogin === user.name && passwordLogin === user.passwd){
    alert('Logado com sucesso!')
  }else{
    alert('Login ou senha incorretos!')
    document.querySelector('#password').value = ''    
  }
})
