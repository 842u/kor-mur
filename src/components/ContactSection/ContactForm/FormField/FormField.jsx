import styles from './FormField.module.scss';

export default function FormField({ label, type, id, placeholder, required = false }) {
  const textareaField = (
    <textarea id={id} name={id} placeholder={placeholder} required={required} />
  );

  const inputField = (
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      aria-label={`${id} input field`}
      required={required}
    />
  );

  return (
    <label className={styles['field-label']} htmlFor={id}>
      {`${label}:${required ? '*' : ''}`}
      {type === 'textarea' ? textareaField : inputField}
    </label>
  );
}
