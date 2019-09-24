const { Errors } = require('microstack');

module.exports = service => async (parameters, user) => {
  return {
        from: parameters,
        message: 'new kitchen stuff'
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
      post: true
    }
  },
  authentication: {
    isRequired: false
  }
};