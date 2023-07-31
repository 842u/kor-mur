import styles from './Credits.module.scss';

export default function Credits({ className }) {
  const style = `${className} ${styles.credits}`;

  return (
    <article className={style}>
      <p>MURAWSKA.STUDIO ©2023</p>
      <div>
        <p>Web Design & Dev</p>
        <p>auth</p>
      </div>
    </article>
  );
}
