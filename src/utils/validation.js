export default function getValidationInfo(value, type, minLength, maxLength, required) {
  const trimmedValue = value.trim();

  if (required && trimmedValue.length === 0) {
    return { hasErrorInfo: true, errorMessageInfo: 'This field is required.' };
  }

  if (minLength && trimmedValue.length < minLength) {
    return {
      hasErrorInfo: true,
      errorMessageInfo: `Please enter at least ${minLength} characters.`,
    };
  }

  if (maxLength && trimmedValue.length > maxLength) {
    return {
      hasErrorInfo: true,
      errorMessageInfo: `Please enter no more than ${maxLength} characters.`,
    };
  }

  if (type === 'email' && trimmedValue.length > 0) {
    const emailRegexp = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;

    const hasErrorInfo = !emailRegexp.test(trimmedValue);
    const errorMessageInfo = hasErrorInfo ? 'Please enter a valid email address.' : '';

    return { hasErrorInfo, errorMessageInfo };
  }

  if (type === 'tel' && trimmedValue.length > 0) {
    const phoneRegexp = /^[0-9]+$/;

    const hasErrorInfo = !phoneRegexp.test(trimmedValue);
    const errorMessageInfo = hasErrorInfo ? 'Phone number should contain only digits.' : '';

    return { hasErrorInfo, errorMessageInfo };
  }

  return { hasErrorInfo: false, errorMessageInfo: '' };
}
