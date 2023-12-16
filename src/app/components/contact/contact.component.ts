import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactData = {
    nombre: '',
    email: '',
    motivo: '',
    _subject: 'Contacto desde Portfolio'
  }

  constructor(private http: HttpClient, private emailService : EmailService) { }

  sendMail() : void {
    this.emailService.sendEmail(this.contactData)
    alert("Se ha enviado el mail!")
  }
}
