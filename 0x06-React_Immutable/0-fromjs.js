// Import the Immutable.js library
const { fromJS } = require('immutable');

// Define the getImmutableObject function
function getImmutableObject(object) {
    // Convert the object to an immutable Map
    const immutableMap = fromJS(object);
    return immutableMap;
}

// Export the function for use in other files
module.exports = getImmutableObject;
