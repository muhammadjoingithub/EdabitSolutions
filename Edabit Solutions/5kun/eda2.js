function findBrokenKeys(correctPhrase, actualTyped) {
    let brokenKeys = [];
    for (let i = 0; i < correctPhrase.length; i++) {
    if (correctPhrase[i] !== actualTyped[i] && !brokenKeys.includes(correctPhrase[i])) {
    brokenKeys.push(correctPhrase[i]);
    }
    }
    return brokenKeys;
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));
