import Todo from "@/utils/components/todo/todo";
import "./page.css";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { getAlUserTodos } from "@/utils/functions/apiCalls";

export default async function Home() {
  const token = getCookie("token", { cookies });
  const user_id = getCookie("user_id", { cookies });
  const todos = await getAlUserTodos(user_id, token);
  return (
    <div className="main">
      <Todo info={todos} />{" "}
    </div>
  );
}
