import React from 'react';
import { motion } from 'framer-motion';

interface FadeTextProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export default function FadeText({ text, as = 'span', className }: FadeTextProps) {
  const Tag = as as any;
  return (
    <motion.span
      key={text}
      initial={{ opacity: 0, y: 2 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <Tag className={className}>{text}</Tag>
    </motion.span>
  );
}

