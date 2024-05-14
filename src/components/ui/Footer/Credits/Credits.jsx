import styles from './Credits.module.scss';

export default function Credits({ className }) {
  const style = `${className} ${styles.credits}`;

  return (
    <article className={style}>
      <p>MURAWSKA.STUDIO ©2024</p>
      <div>
        <p>
          Made by{' '}
          <a href="https://www.842u.dev/" rel="noreferrer" target="_blank">
            842u
          </a>
        </p>
      </div>
    </article>
  );
}
