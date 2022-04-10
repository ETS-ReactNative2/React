export function Register(user) {
  
  const data = {
    email: user.email,
    username: user.username,
    password: user.password,
    role: false
  }
  console.log('1', data);
    const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch( `http://localhost:8000/user/register`, requestOptions )
      .then( res => {console.log('reponse', res)});
}