export function checkFinalSound(name) {
    const lastChar = name.charCodeAt(name.length - 1);

    //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
    const consonantCode = (lastChar - 44032) % 28;

    if(consonantCode === 0) return true;
    else return false;
};
