function createErrorInfo(message) {
  return { hasErrorInfo: true, errorMessageInfo: message };
}

const uniqueValidationRules = {
  email: {
    regexp: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    errorMessage: 'Wprowadź poprawny adres email.',
  },

  tel: {
    regexp: /^[0-9]+$/,
    errorMessage: 'Wprowadź tylko cyfry.',
  },
};

export default function getFieldValidationInfo(value, { type, minLength, maxLength, required }) {
  const trimmedValue = value.trim();

  if (required && trimmedValue.length === 0) {
    return createErrorInfo('To pole jest wymagane.');
  }

  if (minLength && trimmedValue.length < minLength) {
    return createErrorInfo(`Minimalna ilość znaków: ${minLength}.`);
  }

  if (maxLength && trimmedValue.length > maxLength) {
    return createErrorInfo(`Maksymalna ilość znaków: ${maxLength}.`);
  }

  if (uniqueValidationRules[type] && trimmedValue.length > 0) {
    const { regexp, errorMessage } = uniqueValidationRules[type];

    if (!regexp.test(trimmedValue)) {
      return createErrorInfo(errorMessage);
    }
  }

  return { hasErrorInfo: false, errorMessageInfo: '' };
}
