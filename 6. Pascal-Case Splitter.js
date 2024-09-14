function pascalCaseSplitter(string) {
    let result = [];
    let first = 0;
    for (let i = 1; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            result.push(string.slice(first, i));
            first = i;
        }
    }
    result.push(string.slice(first));
    console.log(result.join(`, `));
}
pascalCaseSplitter(`SplitMeIfYouCanHaHaYouCantOrYouCan`);
