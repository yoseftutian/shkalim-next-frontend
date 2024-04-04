import Todo from "@/utils/components/todo/todo";
import "./page.css";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { getAlUserTodos } from "@/utils/functions/apiCalls";

export default async function Home() {
  const token = getCookie("token", { cookies });
  const todos = await getAlUserTodos("65f1b4bc34de701de45fb45b", token);
  return (
    <div className="main">
      <Todo info={todos} />{" "}
    </div>
  );
}
