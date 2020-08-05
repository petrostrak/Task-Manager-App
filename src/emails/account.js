const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pit.trak@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendFarewellEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pit.trak@gmail.com',
        subject: 'Bid you farewell!',
        text: `Hope to see you again, ${name}. Let me know how you would get along with the app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFarewellEmail
}
