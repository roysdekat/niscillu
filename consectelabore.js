// Assume this is part of a larger function or script
function calculateY(yi, data) {
    // Perform the calculation
    let y = yi - data.y - data.vy;
    
    // Return or use the result
    return y;
}

// Example usage
let yi = 10;
let data = {
    y: 3,
    vy: 2
};

let result = calculateY(yi, data);
console.log(result); // Output: 5
