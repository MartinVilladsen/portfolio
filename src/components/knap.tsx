'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FloatingButton() {
    const [isVisible, setIsVisible] = useState(false);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function handleScroll() {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 100
            }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20
            }}
            className="fixed bottom-8 right-8 z-50"
        >
            <Button
                onClick={scrollToTop}
                className="rounded-full shadow-lg size-12 gap-2 hover:scale-105 transition-transform"
                variant="default"
            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                        scale: 0.9,
                        transition: { type: 'spring', stiffness: 300 }
                    }}
                >
                    <ArrowUp className="size-6" />
                </motion.div>
            </Button>
        </motion.div>
    );
}