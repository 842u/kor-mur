export default function getFieldValidationInfo(value, { type, minLength, maxLength, required }) {
  const trimmedValue = value.trim();

  function createErrorInfo(message) {
    return { hasErrorInfo: true, errorMessageInfo: message };
  }

  if (required && trimmedValue.length === 0) {
    return createErrorInfo('This field is required.');
  }

  if (minLength && trimmedValue.length < minLength) {
    return createErrorInfo(`Please enter at least ${minLength} characters.`);
  }

  if (maxLength && trimmedValue.length > maxLength) {
    return createErrorInfo(`Please enter no more than ${maxLength} characters.`);
  }

  const validationRules = {
    email: {
      regexp: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
      errorMessage: 'Please enter a valid email address.',
    },
    tel: {
      regexp: /^[0-9]+$/,
      errorMessage: 'Phone number should contain only digits.',
    },
  };

  if (validationRules[type] && trimmedValue.length > 0) {
    const { regexp, errorMessage } = validationRules[type];
    if (!regexp.test(trimmedValue)) {
      return createErrorInfo(errorMessage);
    }
  }

  return { hasErrorInfo: false, errorMessageInfo: '' };
}
