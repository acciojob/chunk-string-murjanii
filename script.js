function chunkString(str, chunkLength) {
    if (!str || typeof str !== "string") return [];
    if (chunkLength <= 0) throw new Error("Chunk length must be a positive integer.");

    const result = [];
    for (let i = 0; i < str.length; i += chunkLength) {
        result.push(str.slice(i, i + chunkLength));
    }
    return result;
}
console.log(chunkString("Hello, world!", 5)); // ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2));         // ["12", "34", "5"]
console.log(chunkString("abc", 5));           // ["abc"]
console.log(chunkString(null, 3));            // []

