export const datauser_validators_name = [
    'isRequired',
    'lenghtValueDataUser',
    'matchRegexp:^[a-zA-Z ]*$',
];
export const address_validators_name = [
    'isRequired',
    'lenghtValueAddress',
    'matchRegexp:^[a-zA-Z0-9 ]*$',
];
export const dni_validators_name = [
    'isRequired',
    'lenghtValueDni',
    'matchRegexp:^[0-9]*$',
];
export const phone_validators_name = ['isRequired', 'matchRegexp:^[0-9]*$'];
