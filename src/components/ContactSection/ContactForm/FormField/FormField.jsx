import styles from './FormField.module.scss';

export default function FormField({
  label,
  type,
  id,
  placeholder,
  value,
  required = false,
  minLength,
  maxLength,
  onChange,
  validationInfo,
}) {
  const textareaField = (
    <textarea
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={onChange}
    />
  );

  const inputField = (
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      aria-label={`${id} input field`}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      onChange={onChange}
    />
  );

  const isValid = validationInfo?.isValid;
  const validationErrorMessage = validationInfo?.errorMessage;

  return (
    <label
      className={`${styles['field-label']} ${isValid ? styles.valid : styles.invalid}`}
      htmlFor={id}
    >
      {`${required ? '* ' : ''}${label}:`}
      {type === 'textarea' ? textareaField : inputField}
      {validationErrorMessage && <p>{validationErrorMessage}</p>}
    </label>
  );
}
