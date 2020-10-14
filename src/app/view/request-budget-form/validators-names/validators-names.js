export const title_validators_name = [
    'isRequired',
    'lengthValue',
    'matchRegexp:^[a-zA-Z ]*$',
];

export const description_validators_name = [
    'isRequired',
    'maxLengthDescription',
    'matchRegexp:^[a-zA-Z.,?!¿; ]*$',
];

export const address_validators_name = [
    'isRequired',
    'lengthValueAddress',
    "matchRegexp:^[a-zA-Z0-9' ]*$",
];
