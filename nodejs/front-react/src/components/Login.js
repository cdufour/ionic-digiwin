import { useState } from 'react'

export default function Login() {

  const auth_server = "http://localhost:3001"

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [access, setAccess] = useState(false);

  const onClick = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    }
    fetch(auth_server + '/login', options)
      .then(res => {
        console.log(res.headers.get("X-Token"))
        return res.json()
      })
      .then(res => {
        setAccess(res.access)
      })
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="email" 
        value={email} 
        onChange={e => setEmail(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="password"
        value={password} 
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={onClick}>Se connecter</button>

      <div>
        { access &&
          <p>Accès autorisé</p>
        }
        { !access &&
          <p>Accès refusé</p>
        }
      </div>
    </div>
  )
}