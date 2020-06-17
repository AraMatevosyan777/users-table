export const required = value => {
    if(value) return undefined;
    return "field is required";
};
export const maxLengthCreator = (maxLenght) => (value) => {
    if(value.length > maxLenght) return `max length is  ${maxLenght}  symbols`;

    return undefined;
};