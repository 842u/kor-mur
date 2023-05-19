export const nameInputReqirements = {
  type: 'text',
  minLength: 3,
  maxLength: 30,
  required: true,
};

export const emailInputReqirements = {
  type: 'email',
  maxLength: 40,
  required: true,
};

export const phoneInputReqirements = {
  type: 'tel',
  maxLength: 15,
};

export const messageInputReqirements = {
  type: 'textarea',
  maxLength: 500,
  required: true,
};
