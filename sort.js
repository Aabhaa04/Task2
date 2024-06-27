document.getElementById('alphabetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const stringInput = document.getElementById('stringInput').value;
    const sortedString = sortStringAlphabetically(stringInput);
    document.getElementById('result').textContent = `Sorted String: ${sortedString}`;
});

function sortStringAlphabetically(str) {
    // Convert the string to an array of characters
    let charArray = str.split('');
    // Sort the array alphabetically
    charArray.sort();
    // Join the sorted array back into a string
    let sortedString = charArray.join('');
    // Return the sorted string
    return sortedString;
}
