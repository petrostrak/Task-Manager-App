const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'pit.trak@gmail.com',
    from: 'pit.trak@gmail.com',
    subject: 'This is my first creation',
    text: 'I hope this one actually get to you!'
})
