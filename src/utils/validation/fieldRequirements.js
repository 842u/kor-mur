function createFieldRequirements(type, maxLength, minLength, required = false) {
  return {
    type,
    maxLength,
    minLength,
    required,
  };
}

export const nameInputReqirements = createFieldRequirements('text', 30, 3, true);

export const emailInputReqirements = createFieldRequirements('email', 40, 0, true);

export const phoneInputReqirements = createFieldRequirements('tel', 15);

export const messageInputReqirements = createFieldRequirements('textarea', 500, 0, true);
