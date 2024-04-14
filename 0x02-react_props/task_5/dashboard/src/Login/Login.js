import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="App-body" data-testid="login">
        <p>Login to access the full dashboard</p>
        <form data-testid="login-form">
          <label htmlFor="email" data-testid="login-label">
            Email:{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            data-testid="login-input"
          />
          <label htmlFor="password" data-testid="login-label">
            Password:{" "}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            data-testid="login-input"
          />
          <button>OK</button>
        </form>
      </div>
    </>
  );
}
