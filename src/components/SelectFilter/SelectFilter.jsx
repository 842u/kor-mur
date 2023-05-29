import styles from './SelectFilter.module.scss';

export default function SelectFilter({ options }) {
  return (
    <label htmlFor="category">
      choose category
      <select className={styles.dropdown} defaultValue="all" id="category" name="category">
        <option aria-label="Filter by all" value="all">
          All
        </option>
        {options.map((option) => (
          <option key={option} aria-label={`Filter by ${option}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
