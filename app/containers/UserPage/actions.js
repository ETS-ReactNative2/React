export function Register(user) {
  return dispatch => {

    console.log('test');
    dispatch({ type: 'REGISTER_START' })

    const data = {
      email: user.email,
      username: user.username,
      password: user.password,
      role: false
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch( `http://localhost:8000/user/register`, requestOptions )
      .then( res => {
        if (res.error) {
          dispatch({ type: 'REGISTER_ERROR', payload: res.error });
        } else {
          dispatch({ type: 'REGISTER_END' });
        }
      });
  }
}