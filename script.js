function convertBinary() {
    // Retrieve binary input from the user
    const binaryInput = document.getElementById('binaryInput').value;

    // Check if the input is valid binary
    if (/^[01]{1,8}$/.test(binaryInput)) {
        // Convert binary to decimal and display the result
        const decimalResult = parseInt(binaryInput, 2);
        document.getElementById('result').innerText = `Decimal Equivalent: ${decimalResult}`;
    } else {
        // Notify the user about invalid input
        alert('Please enter a valid binary number (up to 8 digits, 0 or 1).');
    }
}
