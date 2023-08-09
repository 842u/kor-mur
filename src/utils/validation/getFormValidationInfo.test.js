import getFormValidationInfo from './getFormValidationInfo';

describe('getFormValidationInfo', () => {
  it('should return error info if any field is invalid', () => {
    const formData = {
      name: 'Valid Name',
      email: 'not/a/valid/email!',
      phone: 'not/a/valid/phone/number!',
      message: 'Valid Message',
    };

    const formValidationInfo = getFormValidationInfo(formData);

    expect(formValidationInfo.hasError).toBe(true);
    expect(formValidationInfo.errorMessage.length).toBeGreaterThan(0);
  });

  it('should return no error message if all fields are valid', () => {
    const formData = {
      name: 'Valid Name',
      email: 'valid@email.com',
      phone: '1234567890',
      message: 'Valid Message',
    };

    const formValidationInfo = getFormValidationInfo(formData);

    expect(formValidationInfo.hasError).toBe(false);
    expect(formValidationInfo.errorMessage).toHaveLength(0);
  });
});
