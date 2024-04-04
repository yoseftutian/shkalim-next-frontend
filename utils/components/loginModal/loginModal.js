import { Close } from "@mui/icons-material";
import { Button, CircularProgress, TextField } from "@mui/material";
import "./loginModal.css";
import { login } from "@/utils/functions/apiCalls";
import { setCookie } from "cookies-next";

export default function LoginModal({ setOpen }) {
  // const { loading, setLoading } = useLoadingContext();
  const loading = false;
  async function handleSumbit(e) {
    try {
      e.preventDefault();
      // setLoading(true);
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      const token = await login(data);
      setCookie("token", token);
      console.log(token);
      // setToken(token);
      // setOpen(false);
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
    }
  }
  return (
    <div className="column navbar-modal">
      <button
        className="navbar-modal-close-button"
        onClick={() => setOpen(false)}
      >
        <Close />
      </button>
      <form className="column form" onSubmit={handleSumbit}>
        <h1>Login form</h1>
        <TextField name="username" label="username" />
        <TextField name="password" label="password" type="password" />
        {loading ? (
          <CircularProgress />
        ) : (
          <Button variant="contained" type="submit">
            Submit
          </Button>
        )}
      </form>
    </div>
  );
}
