const companyResolver = require('./company');
const departmentResolver = require('./department');
const employeeResolver = require('./employee');

module.exports = [
    companyResolver,
    departmentResolver,
    employeeResolver
]