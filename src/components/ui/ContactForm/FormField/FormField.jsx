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

  const style = `${styles.field} ${isTouched && hasError && styles.invalid} ${
    isTouched && !hasError && styles.valid
  }`;

  return (
    <label className={style} htmlFor={id}>
      <span>
        {label}
        {required && requiredFlag}
      </span>
      {type === 'textarea' ? textareaField : inputField}
      {isTouched && hasError && <span className={styles['error-message']}>{errorMessage}</span>}
    </label>
  );
}
