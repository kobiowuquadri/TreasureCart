 // Create a func for generating this userId ->  TCart000001
 let userCounter = 1;

function generateUserId() {
  // Format the user ID with "TCart" and leading zeros
  const userId = `TCart${userCounter.toString().padStart(4, '0')}`;

  // Increment the user counter for the next registration
  userCounter++;

  return userId;
}

module.exports = generateUserId