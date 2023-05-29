export function markThousand(number) {
    //천자리마다 쉼표
    const result = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return result;
};