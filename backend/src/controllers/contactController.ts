import { Request, Response } from 'express';
import { db } from '../config/firebase';
import transporter from '../config/email';
import type { ContactMessage, ApiResponse } from '../types';

export const sendContactMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, country, message } = req.body as ContactMessage;

    // Validation
    if (!name || !email || !country || !message) {
      const response: ApiResponse = {
        success: false,
        message: 'All fields are required',
      };
      res.status(400).json(response);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const response: ApiResponse = {
        success: false,
        message: 'Invalid email address',
      };
      res.status(400).json(response);
      return;
    }

    // Save to Firebase
    const contactRef = db.collection('contacts');
    const newContact = await contactRef.add({
      name,
      email,
      country,
      message,
      createdAt: new Date(),
    });

    // Send email notification
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #262626; border-bottom: 2px solid #262626; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Country:</strong> ${country}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #262626; margin-top: 0;">Message:</h3>
            <p style="color: #4b5563; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send auto-reply to the sender
    const autoReplyOptions = {
      from: `"Caleb Anafuwe" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #262626;">Hi ${name},</h2>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Thank you for reaching out! I've received your message and will get back to you as soon as possible, 
            usually within 24-48 hours.
          </p>
          
          <p style="color: #4b5563; line-height: 1.6;">
            In the meantime, feel free to check out my portfolio at 
            <a href="https://calebanafuwe.com" style="color: #262626;">calebanafuwe.com</a> 
            or connect with me on social media.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #262626; font-weight: bold; margin-bottom: 5px;">Best regards,</p>
            <p style="color: #262626; margin: 0;">Caleb Anafuwe</p>
            <p style="color: #9ca3af; font-size: 14px;">AI Engineer | Full-Stack Developer | Graphic Designer</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(autoReplyOptions);


    const response: ApiResponse<{ id: string }> = {
      success: true,
      message: 'Message sent successfully',
      data: { id: newContact.id },
    };
    res.status(201).json(response);

  } catch (error) {
    console.error('Contact form error:', error);
    const response: ApiResponse = {
      success: false,
      message: 'Failed to send message. Please try again.',
    };
    res.status(500).json(response);
  }
};