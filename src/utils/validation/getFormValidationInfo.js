import {
  emailInputRequirements,
  messageInputRequirements,
  nameInputRequirements,
  phoneInputRequirements,
} from './fieldRequirements';
import getFieldValidationInfo from './getFieldValidationInfo';

export default function getFormValidationInfo(formData) {
  const fields = [
    { name: 'name', value: formData.name, requirements: nameInputRequirements },
    { name: 'email', value: formData.email, requirements: emailInputRequirements },
    { name: 'phone', value: formData.phone, requirements: phoneInputRequirements },
    { name: 'message', value: formData.message, requirements: messageInputRequirements },
  ];

  const formValidationInfo = {
    hasError: false,
    errorMessage: [],
  };

  fields.forEach(({ name, value, requirements }) => {
    const { hasErrorInfo, errorMessageInfo } = getFieldValidationInfo(value, requirements);
    if (hasErrorInfo) {
      formValidationInfo.hasError = true;
      formValidationInfo.errorMessage.push(
        `${name.charAt(0).toUpperCase() + name.slice(1)} validation error: ${errorMessageInfo}!`
      );
    }
  });

  return formValidationInfo;
}
