import style from "./intro.module.css";

export default function intro({ name }: { name: string }) {
  return (
    <h1 className={style.introTitle}>
      안녕하세요 {name}님!<br></br>프로젝트 업무들은 다음과 같습니다!
    </h1>
  );
}
