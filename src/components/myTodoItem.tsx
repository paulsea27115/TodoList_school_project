import { todoItem } from "@/types/todoItem";
import style from "./myTodoItem.module.css";

export default function MyTodoItem({ title, createdDate, category }: todoItem) {
  return (
    <div className={style.myTodoItem}>
      <div className={style.leftSide}>
        <h4>{title}</h4>
        <p>{createdDate}</p>
      </div>
      <p className={category.toLowerCase().replace(" ", "-")}>{category}</p>
    </div>
  );
}
