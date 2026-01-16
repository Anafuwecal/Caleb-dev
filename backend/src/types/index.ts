export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  country: string;
  message: string;
  createdAt?: Date;
}

export interface NewsletterSubscriber {
  id?: string;
  email: string;
  subscribedAt?: Date;
  isActive?: boolean;
}

export interface ApiResponse<T = null> {
  success: boolean;
  message: string;
  data?: T;
}