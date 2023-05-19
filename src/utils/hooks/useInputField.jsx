import { useRef, useState } from 'react';

import getFieldValidationInfo from '../validation/getFieldValidationInfo';

export default function useInputField() {
  const [fieldValue, setFieldValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const hasError = useRef(true);
  const errorMessage = useRef('');

  function validateFieldHelper(value, event) {
    const fieldRequirements = {
      type: event.type,
      minLength: event.minLength,
      maxLength: event.maxLength,
      required: event.required,
    };

    const { hasErrorInfo, errorMessageInfo } = getFieldValidationInfo(value, fieldRequirements);

    hasError.current = hasErrorInfo;
    errorMessage.current = errorMessageInfo;
  }

  const valueChangeHandler = (event) => {
    setFieldValue(event.target.value);
    validateFieldHelper(event.target.value, event.target, hasError, errorMessage);
  };

  const isTouchedHandler = (event) => {
    setIsTouched(true);
    validateFieldHelper(event.target.value, event.target, hasError, errorMessage);
  };

  return [
    fieldValue,
    setFieldValue,
    isTouched,
    hasError.current,
    errorMessage.current,
    valueChangeHandler,
    isTouchedHandler,
  ];
}
