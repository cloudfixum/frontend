export const datauser_validators_name = [
    'isRequired',
    'lengthValueDataUser',
    'matchRegexp:^[a-zA-Z ]*$',
];
export const address_validators_name = [
    'isRequired',
    'lengthValueAddress',
    "matchRegexp:^[a-zA-Z0-9' ]*$",
];
export const dni_validators_name = [
    'isRequired',
    'lengthValueDni',
    'matchRegexp:^[0-9]*$',
];
export const phone_validators_name = ['isRequired', 'matchRegexp:^[0-9+ ]*$'];
export const password_validators_name = ['isRequired', 'lengthValuePassword'];
export const confirm_password_validators_name = [
    'isRequired',
    'confirmPassword',
];
export const date_validators_name =[ 'isRequired', 'minimumYearDate'];
