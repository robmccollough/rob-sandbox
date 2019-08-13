require('dotenv').config();

module.exports = {
    host: {
      port: process.env.PORT || 80
    },
    routing: {
      api: {
        location: 'api',
        path: ''
      }
    }
}