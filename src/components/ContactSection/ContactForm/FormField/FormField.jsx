import styles from './FormField.module.scss';

export default function FormField({ label, type, id, placeholder, rows = 5 }) {
  const textareaField = <textarea id={id} name={id} placeholder={placeholder} rows={rows} />;

  const inputField = (
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      aria-label={`${id} input field`}
    />
  );

  return (
    <label className={styles['field-label']} htmlFor={id}>
      {label}
      {type === 'textarea' ? textareaField : inputField}
    </label>
  );
}
