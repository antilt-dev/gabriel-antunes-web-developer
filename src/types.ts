export type Service = {
  id: string;
  title: string;
  description: string;
  icon?: string;
};

export type ContactForm = {
  name: string;
  email: string;
  phone: string;
  country: string
  message?: string;
};
