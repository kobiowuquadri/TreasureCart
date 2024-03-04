const nodemailer = require('nodemailer')

require('dotenv').config()

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASSWORD
    }
  })
}
const sendEmail = async (to, subject, text, html) => {
  const transporter = createTransporter()

  const mailOptions = {
    from: {
      name: 'Treasure Cart',
      address: process.env.MAIL
    },
    to: Array.isArray(to) ? to.join(', ') : to,
    subject: subject,
    text: text,
    html: html
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')
  } catch (error) {
    console.error('Error sending email:', error)
  }
}

module.exports = sendEmail
