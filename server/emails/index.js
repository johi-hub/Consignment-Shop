const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Thanks for signing up.',
    text: `Hi ${name}! Thanks for signing up for our consignment shop!.`,
    // html: exampleHTMLEmail
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Sorry to see you go.',
    text: `Bye ${name}. Hope to see you soon.`,
  });
};

const forgotPasswordEmail = (email, token) => {
    const exampleHTMLEmail = `
    <a target="_blank" rel="noopener noreferrer" href="${process.env.APP_URL}/api/password/${token}">Reset Password</a>
    `;
  
    sgMail.send({
      to: email,
      from: `${process.env.FROM_EMAIL}`,
      subject: 'Password Reset.',
      text: `Hi ${name}! Please click the link below to reset your password.`
      // html: exampleHTMLEmail
    });
  };

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
  forgotPasswordEmail
};