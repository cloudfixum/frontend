export const title_validators_name = [
    'isRequired',
    'lengthValue',
    'matchRegexp:^[a-zA-Z ]*$',
];

export const description_validators_name = [
    'isRequired',
    'maxLengthDescription',
    'matchRegexp:^[a-zA-Z0-9:.,?!¿; ]*$',
];

export const price_validators_name = ['isRequired', 'minNumber:100'];
