import getFieldValidationInfo from './getFieldValidationInfo';

describe('getFieldValidationInfo', () => {
  it('should return error info if value is required but empty', () => {
    const value = '';
    const validationRules = { type: 'text', required: true };
    const validationInfo = getFieldValidationInfo(value, validationRules);
    expect(validationInfo.hasErrorInfo).toBe(true);
    expect(validationInfo.errorMessageInfo).not.toBe('');
  });

  it('should return error info if value is too short', () => {
    const value = '123';
    const validationRules = { type: 'text', minLength: 4 };
    const validationInfo = getFieldValidationInfo(value, validationRules);
    expect(validationInfo.hasErrorInfo).toBe(true);
    expect(validationInfo.errorMessageInfo).not.toBe('');
  });

  it('should return error info if value is too long', () => {
    const value = '123';
    const validationRules = { type: 'text', maxLength: 2 };
    const validationInfo = getFieldValidationInfo(value, validationRules);
    expect(validationInfo.hasErrorInfo).toBe(true);
    expect(validationInfo.errorMessageInfo).not.toBe('');
  });

  it('should return error info if value is not a valid email', () => {
    const value = 'not/a/valid/email!';
    const validationRules = { type: 'email' };
    const validationInfo = getFieldValidationInfo(value, validationRules);
    expect(validationInfo.hasErrorInfo).toBe(true);
    expect(validationInfo.errorMessageInfo).not.toBe('');
  });

  it('should return error info if value is not a valid phone number', () => {
    const value = 'not/a/valid/phone/number!';
    const validationRules = { type: 'tel' };
    const validationInfo = getFieldValidationInfo(value, validationRules);
    expect(validationInfo.hasErrorInfo).toBe(true);
    expect(validationInfo.errorMessageInfo).not.toBe('');
  });

  it('should return no error info if value is valid', () => {
    const value = 'valid';
    const validationRules = { type: 'text' };
    const validationInfo = getFieldValidationInfo(value, validationRules);
    expect(validationInfo.hasErrorInfo).toBe(false);
    expect(validationInfo.errorMessageInfo).toBe('');
  });
});
