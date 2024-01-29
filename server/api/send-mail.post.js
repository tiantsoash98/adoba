// https://vuemail.net/integrations/sendgrid
// https://www.npmjs.com/package/@sendgrid/mail
import sendgrid from '@sendgrid/mail'
import moment from 'moment';

export default defineEventHandler(async (event) => {
    
    const config = useRuntimeConfig()
    sendgrid.setApiKey(config.sendGridApiKey)
    moment.locale('fr')

    const body = await readBody(event);
    let response = ""
    let status = 0

    const template = 
        `<h1>Nouveau formulaire reçu de ${ body.firstname } ${ body.name } (${ body.email })</h1>` +
        `<strong>Détails :</strong>` +
        `<ul>` +
        `   <li>Nom: ${ body.name }</li>` +
        `   <li>Prénom: ${ body.firstname }</li>`+
        `   <li>Email: ${ body.email }</li>`+
        `   <li>Date: ${ moment().format('LLL') }</li>`+
        `</ul>` +
        `<br/>`+
        `<strong>Message :</strong>`+
        `<p>${ body.message }}</p>`;

    const options = {
        from: config.sendGridMailFrom,
        to: config.sendGridMailTo,
        subject: 'Nouveau formulaire reçu de adoba.agency',
        html: template,
    }

    sendgrid
    .send(options)
    .then(() => {
        response = "Email sent"
        status = 200
    }, error => {
        response = error
        console.error(error);
    
        if (error.response) {
            response = error.response.body
            status = 400
            console.error(error.response.body)
        }
    })

    return {
        response,
        status
    }
})
