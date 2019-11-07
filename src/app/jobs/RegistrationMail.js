import Mail from '../lib/Mail';

export default {
    // job key or name
    key: 'RegistrationMail',

    // what this job will do?
    async handle({ data }) {

        const { user } = data;

        const { name, email } = user;

        console.log("Executando job de enviar email...");

        await Mail.sendMail({
            from: 'Queue Test <queue@queuetest.com.br',
            to: `${name} <${email}>`,
            subject: 'Teste de fila',
            html: `<h1>Oi, ${name}.</h1> <br> Apenas uma teste de fila...`
        });

    }

}