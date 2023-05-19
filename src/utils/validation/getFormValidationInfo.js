import {
  emailInputReqirements,
  messageInputReqirements,
  nameInputReqirements,
  phoneInputReqirements,
} from './fieldRequirements';
import getFieldValidationInfo from './getFieldValidationInfo';

export default function getFormValidationInfo(formData) {
  const errorsMessages = [];

  const formValidationInfo = {
    hasError: false,
    errorMessage: errorsMessages,
  };

  const { hasErrorInfo: nameHasError, errorMessageInfo: nameErrorMessage } = getFieldValidationInfo(
    formData.name,
    nameInputReqirements
  );

  const { hasErrorInfo: emailHasError, errorMessageInfo: emailErrorMessage } =
    getFieldValidationInfo(formData.email, emailInputReqirements);

  const { hasErrorInfo: phoneHasError, errorMessageInfo: phoneErrorMessage } =
    getFieldValidationInfo(formData.phone, phoneInputReqirements);

  const { hasErrorInfo: messageHasError, errorMessageInfo: messageErrorMessage } =
    getFieldValidationInfo(formData.message, messageInputReqirements);

  function createErrorInfo(field, errorMessage) {
    formValidationInfo.hasError = true;
    errorsMessages.push(
      `${field.charAt(0).toUpperCase() + field.slice(1)} server validation error: ${errorMessage}!`
    );
  }

  if (nameHasError) {
    createErrorInfo('name', nameErrorMessage);
  }

  if (emailHasError) {
    createErrorInfo('email', emailErrorMessage);
  }

  if (phoneHasError) {
    createErrorInfo('phone', phoneErrorMessage);
  }

  if (messageHasError) {
    createErrorInfo('message', messageErrorMessage);
  }

  return formValidationInfo;
}
