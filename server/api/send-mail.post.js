// https://vuemail.net/integrations/sendgrid
// https://www.npmjs.com/package/@sendgrid/mail
import sendgrid from '@sendgrid/mail'
import moment from 'moment';

export default defineEventHandler(async (event) => {
    
    const config = useRuntimeConfig()
    sendgrid.setApiKey(config.sendGridApiKey)
    moment.locale('fr')

    const body = await readBody(event);

    const template = 
        `<h1>Nouveau formulaire reçu de ${ body.firstname } ${ body.name } (${ body.email })</h1>` +
        `<h4>Détails :</h4>` +
        `<ul>` +
        `   <li>Nom: ${ body.name }</li>` +
        `   <li>Prénom: ${ body.firstname }</li>`+
        `   <li>Email: ${ body.email }</li>`+
        `   <li>Date: ${ moment().format('LLL') }</li>`+
        `</ul>` +
        `<br/>`+
        `<h4>Message :</h4>`+
        `<p style="font-size: 20px">${ body.message }</p>`;

    const options = {
        from: config.sendGridMailFrom,
        to: config.sendGridMailTo,
        cc: config.sendGridMailCC,
        subject: 'Nouveau formulaire reçu de adoba.agency',
        html: template,
    }

    sendgrid
    .send(options)
    .then(() => {}, error => {
        return error
    })

    return {
        responseMessage : "Email sent"
    }
})
