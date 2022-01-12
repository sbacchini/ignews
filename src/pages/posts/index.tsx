import Head from 'next/head';
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de janeiro de 2022</time>
            <strong>Titulo</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti, laborum temporibus eligendi praesentium, nostrum fugiat esse doloremque quod sequi deserunt expedita quaerat, ratione dignissimos alias? Vero expedita possimus enim?</p>
          </a>
          <a href="#">
            <time>12 de janeiro de 2022</time>
            <strong>Titulo</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto deserunt fuga ratione asperiores quae facere soluta blanditiis consequatur iusto dicta dolores consequuntur sapiente possimus minima at vero, commodi rerum.</p>
          </a>
          <a href="#">
            <time>12 de janeiro de 2022</time>
            <strong>Titulo</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero nihil ad fugiat dignissimos quia? Optio sed est a quis aliquid asperiores dignissimos minima tempora illo. Dignissimos maxime distinctio minima!</p>
          </a>
        </div>
      </main>
    </>
  );
}