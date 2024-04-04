import SubmitBtn from "@/utils/components/submitBtn/submitBtn";
import { login } from "@/utils/functions/apiCalls";
import { TextField } from "@mui/material";
import { setCookie } from "cookies-next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function LoginPage() {
  async function handleSumbit(formData) {
    "use server";
    const data = Object.fromEntries(formData);
    const token = await login(data);
    setCookie("token", token, { cookies });
    redirect("/");
  }
  return (
    <form className="column form" action={handleSumbit}>
      <h1>Login form</h1>
      <TextField name="username" label="username" />
      <TextField name="password" label="password" type="password" />
      <SubmitBtn text="Login" />
    </form>
  );
}
