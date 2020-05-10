'use strict';
const db = require('./database/db');

module.exports.registerEmployee = async (event) => {
  try {
    console.log('event is', JSON.parse(event.body));
    const payload = JSON.parse(event.body);

    await db.insertCompanyDetails(payload);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Successfuly Created.',
      }),
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
};

module.exports.getEmployeeData = async (event) => {
  try {
    const result = await db.queryCompanyDetails();

    return {
      statusCode: 200,
      body: JSON.stringify({
        result,
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
};
