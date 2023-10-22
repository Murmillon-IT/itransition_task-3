'use strict'

//Search for duplicates
function findDuplicateElements(array) {
    const uniqueElements = new Set();
    const duplicates = new Set();

    array.forEach(element => {
        if (uniqueElements.has(element)) {
            duplicates.add(element);
        } else {
            uniqueElements.add(element);
        }
    });

    return Array.from(duplicates); // Convert Set back to an array
}

export default findDuplicateElements