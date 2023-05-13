import { forwardRef } from 'react';

import styles from './FormField.module.scss';

const FormField = forwardRef(function FormField(
  { label, type, id, placeholder, required = false, minLength, maxLength },
  ref
) {
  const textareaField = (
    <textarea id={id} name={id} placeholder={placeholder} ref={ref} required={required} />
  );

  const inputField = (
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      aria-label={`${id} input field`}
      ref={ref}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
    />
  );

  return (
    <label className={styles['field-label']} htmlFor={id}>
      {`${label}:${required ? '*' : ''}`}
      {type === 'textarea' ? textareaField : inputField}
    </label>
  );
});

export default FormField;
