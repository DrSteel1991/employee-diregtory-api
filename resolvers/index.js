const companyResolver = require('./company');
const locationResolver = require('./location');
const employeeResolver = require('./employee');

module.exports = [
    companyResolver,
    locationResolver,
    employeeResolver
]