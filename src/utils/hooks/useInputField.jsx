import { useRef, useState } from 'react';

import getValidationInfo from '../validation';

export default function useInputField() {
  const [fieldValue, setFieldValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const hasError = useRef(true);
  const errorMessage = useRef('');

  const valueChangeHandler = (event) => {
    setFieldValue(event.target.value);

    const { hasErrorInfo, errorMessageInfo } = getValidationInfo(
      event.target.value,
      event.target.type,
      event.target.minLength,
      event.target.maxLength,
      event.target.required
    );

    hasError.current = hasErrorInfo;
    errorMessage.current = errorMessageInfo;
  };

  const isTouchedHandler = (event) => {
    setIsTouched(true);

    const { hasErrorInfo, errorMessageInfo } = getValidationInfo(
      event.target.value,
      event.target.type,
      event.target.minLength,
      event.target.maxLength,
      event.target.required
    );

    hasError.current = hasErrorInfo;
    errorMessage.current = errorMessageInfo;
  };

  return [
    fieldValue,
    isTouched,
    hasError.current,
    errorMessage.current,
    valueChangeHandler,
    isTouchedHandler,
  ];
}
