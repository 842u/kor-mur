import { useRef, useState } from 'react';

import getFieldValidationInfo from '../validation/getFieldValidationInfo';

export default function useInputField(requirements) {
  const [fieldValue, setFieldValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  // Not required inputs dont have error on start
  const hasError = requirements.required ? useRef(true) : useRef(false);
  const errorMessage = useRef('');

  function validateFieldHelper(value) {
    const { hasErrorInfo, errorMessageInfo } = getFieldValidationInfo(value, requirements);

    hasError.current = hasErrorInfo;
    errorMessage.current = errorMessageInfo;
  }

  const valueChangeHandler = (event) => {
    setFieldValue(event.target.value);
    validateFieldHelper(event.target.value);
  };

  const onTouchHandler = (event) => {
    setIsTouched(true);
    validateFieldHelper(event.target.value);
  };

  const onSubmitHandler = () => {
    setFieldValue('');
    setIsTouched(false);
    hasError.current = true;
    errorMessage.current = '';
  };

  return [
    fieldValue,
    isTouched,
    hasError.current,
    errorMessage.current,
    valueChangeHandler,
    onTouchHandler,
    onSubmitHandler,
  ];
}
