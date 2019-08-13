const { Service, logger } = require('microstack');

const config = require('./config');

function main() {
  const service = new Service(config);

  service.start().then(() => {
    logger.info('rob-sanbox started');
  });
}

main();

