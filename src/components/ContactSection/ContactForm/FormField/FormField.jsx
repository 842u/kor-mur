import styles from './FormField.module.scss';

export default function FormField({
  label,
  type,
  id,
  placeholder,
  value,
  required,
  minLength,
  maxLength,
  onChange,
  onBlur,
  isTouched,
  hasError,
  errorMessage,
}) {
  const textareaField = (
    <textarea
      id={id}
      maxLength={maxLength}
      minLength={minLength}
      name={id}
      placeholder={placeholder}
      required={required}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
  );

  const inputField = (
    <input
      id={id}
      maxLength={maxLength}
      minLength={minLength}
      name={id}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
  );

  const requiredFlag = <span className={styles['required-flag']}> * </span>;

  const fieldClasses = `${styles.field} ${isTouched && hasError && styles.invalid} ${
    isTouched && !hasError && styles.valid
  }`;

  return (
    <label className={fieldClasses} htmlFor={id}>
      <span>
        {label}
        {required && requiredFlag}
      </span>
      {type === 'textarea' ? textareaField : inputField}
      {isTouched && hasError && <p>{errorMessage}</p>}
    </label>
  );
}
