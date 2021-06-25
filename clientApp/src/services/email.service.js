import axios from 'axios';

export default class EmailService {

  sendEmail({name, email, subject, message}) {
    const text = `Name: ${name}\n Email: ${email}\n Message: ${message}`;

    return axios.post('http://localhost:1337/email', {
      to: 'waltersajtos@outlook.com',
      subject: subject,
      text: text
    })
      .catch(err => console.error(err));
  }
}
