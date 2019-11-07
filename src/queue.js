import 'dotenv/config';

import Queue from './app/lib/Queue';

console.log(`Running queue on ${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`);

Queue.process();