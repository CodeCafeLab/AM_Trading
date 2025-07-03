import Link from 'next/link';
import { Button } from './ui/button';

const WhatsAppIcon = () => {
    return (
        <Link
            href="https://wa.me/918841098469?text=I%20have%20enquiry,%20please%20arrange%20a%20call%20back.%0AThanks"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-10 right-10 z-50 group"
        >
            <Button
                size="icon"
                className="bg-[#25D366] hover:bg-[#128C7E] rounded-full w-16 h-16 shadow-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 animate-pulse-whatsapp"
            >
                <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    className="w-9 h-9"
                >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.46 3.49 1.32 4.95L2 22l5.25-1.38c1.41.79 3.06 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.92-9.91zM17.53 15.3c-.27-.13-1.59-.78-1.84-.87-.25-.09-.43-.09-.62.09-.19.18-.7.87-.86 1.04-.16.18-.32.19-.6.06-.27-.13-1.14-.42-2.17-1.34-.81-.72-1.36-1.61-1.51-1.88-.16-.27-.01-.42.12-.55.12-.12.27-.31.4-.41.13-.1.18-.18.27-.31.09-.12.04-.24 0-.36-.14-.28-1.84-4.45-2.12-4.88-.27-.43-.54-.37-.73-.37h-.42c-.19 0-.46.09-.7.31-.24.22-.94.92-.94 2.25s.96 2.61 1.1 2.79c.14.18 1.84 2.82 4.47 3.96.61.26 1.09.42 1.47.53.69.21 1.32.18 1.81.11.53-.06 1.59-.65 1.81-1.28.22-.63.22-1.17.16-1.28-.07-.12-.25-.19-.52-.32z" />
                </svg>
                <span className="sr-only">Chat on WhatsApp</span>
            </Button>
        </Link>
    );
};

export default WhatsAppIcon;
