import { useRouter } from 'next/router';

// import { useState } from 'react';
import styles from './SelectFilter.module.scss';

export default function SelectFilter({ options }) {
  const router = useRouter();

  const filterChangeHandler = (event) => {
    router.push(`/projects/tag/${event.target.value}`);
  };

  return (
    <label htmlFor="category">
      choose category
      <select
        className={styles.dropdown}
        id="category"
        name="category"
        value={router.query.slug}
        onChange={filterChangeHandler}
      >
        {options.map((option) => (
          <option
            key={option._id}
            aria-label={`Filter by ${option.name}`}
            value={option.slug.current}
          >
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
}
