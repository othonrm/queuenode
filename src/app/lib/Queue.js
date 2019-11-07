import Queue from 'bull';
import queueConfig from '../../config/redis';

import RegistrationMail from '../jobs/RegistrationMail';

const mailQueue = new Queue(RegistrationMail.key, queueConfig);

export default mailQueue;