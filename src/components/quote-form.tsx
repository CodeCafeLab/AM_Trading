'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { sendQuoteRequest } from '@/actions/send-quote-request';
import { QuoteRequestSchema, type QuoteRequestState } from '@/lib/schemas';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { useQuoteSheet } from '@/context/quote-sheet-context';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit Request'}
    </Button>
  );
}

export function QuoteForm() {
  const { toast } = useToast();
  const { setIsOpen } = useQuoteSheet();
  const formRef = useRef<HTMLFormElement>(null);

  const initialState: QuoteRequestState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useFormState(sendQuoteRequest, initialState);

  const form = useForm<z.infer<typeof QuoteRequestSchema>>({
    resolver: zodResolver(QuoteRequestSchema),
    defaultValues: { name: '', mobile: '', query: '' },
  });

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Request Sent!",
        description: state.message,
      });
      formRef.current?.reset();
      form.reset();
      // Close the sheet on successful submission
      const timer = setTimeout(() => setIsOpen(false), 1000);
      return () => clearTimeout(timer);
    } else if (state.message && state.errors) {
       toast({
        title: "Error",
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast, form, setIsOpen]);

  return (
    <form ref={formRef} action={dispatch} className="space-y-4">
      <div>
        <Input 
          {...form.register('name')}
          placeholder="Your Name" 
        />
        {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
      </div>
      <div>
        <Input 
          {...form.register('mobile')}
          placeholder="Mobile Number" 
        />
        {state.errors?.mobile && <p className="text-sm text-destructive mt-1">{state.errors.mobile[0]}</p>}
      </div>
      <div>
        <Textarea 
          {...form.register('query')}
          placeholder="Your Query" 
          rows={5} 
        />
        {state.errors?.query && <p className="text-sm text-destructive mt-1">{state.errors.query[0]}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
