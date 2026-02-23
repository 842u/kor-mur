function createFieldRequirements(type, maxLength, minLength, required = false) {
  return {
    type,
    maxLength,
    minLength,
    required,
  };
}

export const nameInputRequirements = createFieldRequirements('text', 30, 3, true);

export const emailInputRequirements = createFieldRequirements('email', 40, 0, true);

export const phoneInputRequirements = createFieldRequirements('tel', 15);

export const messageInputRequirements = createFieldRequirements('textarea', 500, 0, true);
