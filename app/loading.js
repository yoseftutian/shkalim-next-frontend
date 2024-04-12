"use client";
import { usePathname } from "next/navigation";
import "./loading.css";
import TodoSkeleton from "@/utils/components/todo/todoSkeleton";
export default function Loading() {
  const pathname = usePathname();
  return (
    <div className="column center middleware-height">
      {getSkeletonByPage(pathname)}
    </div>
  );
}

function getSkeletonByPage(pathname) {
  switch (pathname) {
    case "/":
      return <TodoSkeleton />;
    default:
      return <TodoSkeleton />;
  }
}