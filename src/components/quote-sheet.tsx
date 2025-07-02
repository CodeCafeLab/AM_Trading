'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { useQuoteSheet } from '@/context/quote-sheet-context';
import { QuoteForm } from './quote-form';

export default function QuoteSheet() {
  const { isOpen, setIsOpen } = useQuoteSheet();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Request a Quote</SheetTitle>
          <SheetDescription>
            Fill out the form below and we'll get back to you as soon as possible.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <QuoteForm />
        </div>
      </SheetContent>
    </Sheet>
  );
}
