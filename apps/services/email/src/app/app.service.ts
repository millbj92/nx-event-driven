import { Injectable, Logger } from '@nestjs/common';
import * as Sendgrid from '@sendgrid/mail';

@Injectable()
export class AppService {
  constructor() {
    Sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  }

  public sendVerificationEmail(value: any) {
    const request: Sendgrid.MailDataRequired = {
      to: value.email,
      from: 'no-reply@sociium.io',
      subject: 'Welcome to Sociium',
        personalizations: [
          {
            to: [
              {
                email: value.email,
              }
            ],
            dynamicTemplateData: {
              "colors": {
                "primary": "#3448c5",
                "primary_dark": "#0f1a61",
                "primary_light": "#6678ec",
                "secondary": "#d66853",
                "secondary_dark": "#a63d2d",
                "secondary_light": "#f28f6c",
                "primary_text": "#171123",
                "secondary_text": "#757575",
                "white": "#FFFFFF",
                "background": "#e8e9eb",
                "accent": "#e20c69",
                "gray": "#9b9b9b",
                "gray_light": "#f5f5f5",
                "light_text": "#fafafa",
                "purple": "#553c87"
             },
             
             verification_link: `http://localhost:3002/verify?token=${value.verification}`
            },
          },
        ],
        templateId: process.env.VERIFY_TEMPLATE_ID,
       }
    Sendgrid.send(request);
  }

  public sendForgotPasswordEmail(value: any) {
    throw new Error("Method not implemented.");
  }
      
}
