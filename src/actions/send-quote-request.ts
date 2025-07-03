'use server';

import nodemailer from 'nodemailer';
import { QuoteRequestSchema, type QuoteRequestState } from '@/lib/schemas';

export async function sendQuoteRequest(
  prevState: QuoteRequestState,
  formData: FormData
): Promise<QuoteRequestState> {
  const validatedFields = QuoteRequestSchema.safeParse({
    name: formData.get('name'),
    mobile: formData.get('mobile'),
    query: formData.get('query'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid form data. Please check your entries.',
      success: false,
    };
  }

  const { name, mobile, query } = validatedFields.data;

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true, 
    auth: {
      user: 'testcode@codecafelab.in',
      pass: 'CCl@1234@1234',
    },
  });

  try {
    await transporter.sendMail({
      from: '"AM Trading Website" <testcode@codecafelab.in>',
      to: 'codecafelabtechnologies@gmail.com', // The recipient email address
      subject: 'New Quote Request',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <br/>
        <p><strong>Query:</strong></p>
        <p>${query}</p>
        <br/>
        <p>
          Regards,<br/>
          AM Trading Team<br/>
          📞 +91 8841098469
        </p>
      `,
    });
    return {
      message: 'Your request has been sent successfully!',
      success: true,
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      message: 'Failed to send your request. Please try again later.',
      success: false,
    };
  }
}
