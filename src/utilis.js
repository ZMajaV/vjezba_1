export const isDateEven = () => {
    const data = new Date();

    return date.getDate() % 2 === 0;
}

export const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}