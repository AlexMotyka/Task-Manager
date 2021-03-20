const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'alex.motyka@ontariotechu.net',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'alex.motyka@ontariotechu.net',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}! Let me know if there's anyway I could improve the app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}


