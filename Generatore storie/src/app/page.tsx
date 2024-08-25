import styles from "./page.module.scss";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header title="Generatore di Storie..." subTitle="" />
      <div className={styles.box_form}>
        <Form />
      </div>
    </main>
  );
}
