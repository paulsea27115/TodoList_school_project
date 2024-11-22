import style from "./page.module.css";
import Image from "next/image";
import Intro from "@/components/intro";

import MyTodoItem from "@/components/myTodoItem";
import MyToDoList from "@/mock/TodoList.json";
import { todoItem } from "@/types/todoItem";

export default function Page() {
  return (
    <div className={style.container}>
      <header className={style.logo}>
        <Image
          src={"/logo.png"}
          width={200}
          height={120}
          alt={"todoList 로고 입니다."}
        />
        <Intro name="다렐" />
      </header>
      <main className={style.todoContainer}>
        <section className={style.myTodo}>
          <h2>MY TODO</h2>
          <div className={style.myTodoContainer}>
            <div className={style.myTodoList}>
              {MyToDoList.map((item: todoItem) => (
                <MyTodoItem key={item.id} {...item} />
              ))}
            </div>
            <div className={style.myTodoListMore}>
              <Image
                src={"/arrow.png"}
                width={15}
                height={9}
                alt="나의 할일 더보기"
              />
            </div>
          </div>
        </section>
        <section className={style.todoList}></section>
      </main>
    </div>
  );
}
