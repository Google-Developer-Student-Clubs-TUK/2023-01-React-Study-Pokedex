import 'twin.macro';

import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { imageViewMotions } from '@/motions';

type ImageViewProps = HTMLMotionProps<'img'>;

const ImageView = ({ alt, onLoad, ...props }: ImageViewProps) => {
  const [loaded, setLoaded] = useState(false);

  const handleOnload = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setLoaded(true);
    onLoad?.(e);
  };

  return (
    <motion.div
      initial='none'
      animate={loaded ? 'loaded' : 'none'}
      variants={imageViewMotions.wrapper}
      tw='w-full h-full'>
      <motion.img
        {...props}
        alt={alt}
        onLoad={handleOnload}
        variants={imageViewMotions.image}
      />
    </motion.div>
  );
};

export default ImageView;
