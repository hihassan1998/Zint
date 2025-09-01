import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1>Display content main page</h1>
        <hr />
        <br />
        <ul>
          <li> <Link href="/cars"> View cars from api + delete car
          </Link>
          </li>
          <li>List item</li>
        </ul>


      </main>
    </div>
  );
}
