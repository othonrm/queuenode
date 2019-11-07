import Mail from '../lib/Mail';
import moment from 'moment';

export default {
    // job key or name
    key: 'RegistrationMail',

    // job opts see bull docs
    options: {
        delay: 5000,
        attempts: 3,
        retryProcessDelay: 5000,
        removeOnComplete: true,
        // removeOnFail: true,
    },

    // what this job will do?
    async handle({ data }) {

        const { user } = data;

        const { name, email } = user;

        console.log("Executando job de enviar email...");

        // Delay 5 seconds
        // await new Promise(res => setTimeout(res, 5000));

        await Mail.sendMail({
            from: 'Queue Test <queue@queuetest.com.br',
            to: `${name} <${email}>`,
            subject: 'Teste de fila',
            html: `
            <h1>
                Oi, ${name}.
            </h1>
            <br>
            Apenas uma teste de fila...
            <p>
                Registration time: ${data.registration_date}
            </p>
            <p>
                Sent time: ${moment().format("HH:mm:ss DD/MM/YYYY")}
            </p>
            `
        });

        console.log("Job de enviar email executado com sucesso!");

    }

}