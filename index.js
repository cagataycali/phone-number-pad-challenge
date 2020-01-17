const padWithRegex = input => input.match(/^\+?9?0/) ? input.replace(/^\+?9?0/, '90') : '90' + input

const padWithoutRegex = input => {
    const pLength = input.length;
    return input.padStart(12, "90").substr(pLength - 12 >= 0 ? pLength - 12 : 0, 12);
}

module.exports.padWithRegex = padWithRegex
module.exports.padWithoutRegex = padWithoutRegex