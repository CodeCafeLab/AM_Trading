import { z } from 'zod';

export const QuoteRequestSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  mobile: z.string().min(10, { message: 'Please enter a valid mobile number.' }),
  query: z.string().min(10, { message: 'Query must be at least 10 characters.' }),
});

export type QuoteRequestState = {
  errors?: {
    name?: string[];
    mobile?: string[];
    query?: string[];
  };
  message?: string | null;
  success?: boolean;
};
