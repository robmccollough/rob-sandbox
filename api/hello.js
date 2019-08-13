const { Errors } = require('microstack');

module.exports = service => async (parameters, user) => {
  return {
      message: "Hello World!"
  }
};

module.exports.config = {
  parameters: {
    type: 'object',
    properties: {},
    required: []
  },
  routing: {
    http: { 
      get: true
    }
  },
  authentication: {
    isRequired: false
  }
};