export default function SignInForm() {

  return (
    <form action={ } method="post">
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
      <button type="submit">Sign In</button>
    </form>
  )
}
