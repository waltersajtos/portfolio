import sgMail from '@sendgrid/mail';
import axios from "axios";

export default class EmailService {
  constructor() {
    if(import.meta.env.SEND_GRID_API_KEY) {
      sgMail.setApiKey(import.meta.env.SEND_GRID_API_KEY as string)
    }
  }

  public sendEmail({name, email, message}) {
    return axios.post("http://localhost:1337/email", {to: "waltersajtos@outlook.com", text: message})
  }
}
