import { Request, Response } from 'express';
import { db } from '../config/firebase';
import transporter from '../config/email';
import type { ApiResponse } from '../types';

export const subscribeToNewsletter = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email } = req.body;

    // Validation
    if (!email) {
      const response: ApiResponse = {
        success: false,
        message: 'Email is required',
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

    // Check if already subscribed
    const subscribersRef = db.collection('newsletter');
    const existingSubscriber = await subscribersRef
      .where('email', '==', email)
      .get();

    if (!existingSubscriber.empty) {
      const response: ApiResponse = {
        success: false,
        message: 'This email is already subscribed',
      };
      res.status(400).json(response);
      return;
    }

    // Add to Firebase
    const newSubscriber = await subscribersRef.add({
      email,
      subscribedAt: new Date(),
      isActive: true,
    });

    // Send welcome email
    const welcomeEmailOptions = {
      from: `"Caleb Anafuwe" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Welcome to My Newsletter! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #262626; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0;">Welcome! 🎉</h1>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="color: #4b5563; line-height: 1.6; font-size: 16px;">
              Thank you for subscribing to my newsletter! You'll now receive updates on:
            </p>
            
            <ul style="color: #4b5563; line-height: 2;">
              <li>Latest AI and machine learning trends</li>
              <li>Web development tips and tutorials</li>
              <li>Design inspiration and resources</li>
              <li>New projects and case studies</li>
              <li>Exclusive insights and behind-the-scenes content</li>
            </ul>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://calebanafuwe.com" 
                 style="background-color: #262626; color: #ffffff; padding: 12px 30px; 
                        text-decoration: none; border-radius: 6px; font-weight: bold;">
                Visit My Portfolio
              </a>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #9ca3af; font-size: 12px;">
                You can unsubscribe at any time by clicking the unsubscribe link in our emails.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(welcomeEmailOptions);


    const response: ApiResponse<{ id: string }> = {
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: { id: newSubscriber.id },
    };
    res.status(201).json(response);

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    const response: ApiResponse = {
      success: false,
      message: 'Failed to subscribe. Please try again.',
    };
    res.status(500).json(response);
  }
};