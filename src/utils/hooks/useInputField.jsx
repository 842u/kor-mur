import { useRef, useState } from 'react';

import getFieldValidationInfo from '@/utils/validation/getFieldValidationInfo';

export default function useInputField() {
  const [fieldValue, setFieldValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const hasError = useRef(true);
  const errorMessage = useRef('');

  const valueChangeHandler = (event) => {
    setFieldValue(event.target.value);

    const fieldRequirements = {
      type: event.target.type,
      minLength: event.target.minLength,
      maxLength: event.target.maxLength,
      required: event.target.required,
    };

    const { hasErrorInfo, errorMessageInfo } = getFieldValidationInfo(
      event.target.value,
      fieldRequirements
    );

    hasError.current = hasErrorInfo;
    errorMessage.current = errorMessageInfo;
  };

  const isTouchedHandler = (event) => {
    setIsTouched(true);

    const fieldRequirements = {
      type: event.target.type,
      minLength: event.target.minLength,
      maxLength: event.target.maxLength,
      required: event.target.required,
    };

    const { hasErrorInfo, errorMessageInfo } = getFieldValidationInfo(
      event.target.value,
      fieldRequirements
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
