import 'dotenv/config';

import Queue from './app/lib/Queue';
import RegistrationMail from './app/jobs/RegistrationMail';

console.log(`Running queue on ${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`);

Queue.process(RegistrationMail.handle);