function getMiddle(s) {
    let word = s.split('');
    let middleChar = word[Math.floor(word.length / 2)];
    return (word.length % 2 !== 0) ? middleChar : word[Math.floor(word.length / 2) - 1] + middleChar;
}