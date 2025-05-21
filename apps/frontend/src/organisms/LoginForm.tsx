export default function LoginForm() {

  return (
    <form action="http://localhost/login" method="post">
      <input
        type="text"
        placeholder="Email"
        required
      />
      <input
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  )
}
