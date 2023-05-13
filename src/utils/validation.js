export default function getValidationInfo({ value, type, minLength, maxLength, required }) {
  const trimmedValue = value.trim();

  if (required && trimmedValue.length === 0) {
    return { isValid: false, errorMessage: 'This field is required.' };
  }

  if (minLength && trimmedValue.length < minLength) {
    return {
      isValid: false,
      errorMessage: `Please enter at least ${minLength} characters.`,
    };
  }

  if (maxLength && trimmedValue.length > maxLength) {
    return {
      isValid: false,
      errorMessage: `Please enter no more than ${maxLength} characters.`,
    };
  }

  if (type === 'text') {
    return { isValid: true, errorMessage: '' };
  }

  if (type === 'email') {
    const isValid = trimmedValue.includes('@');
    const errorMessage = isValid ? '' : 'Please enter a valid email address.';
    return { isValid, errorMessage };
  }

  return { isValid: true, errorMessage: '' };
}
