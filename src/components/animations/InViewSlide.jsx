/* eslint react/jsx-props-no-spreading: 0 */
import { easeInOut, motion } from 'framer-motion';

function animationSetup(slideFrom, offset, duration, ease) {
  switch (slideFrom) {
    case 'top':
      return {
        initial: { opacity: 0, y: `-${offset}` },
        transition: { duration, ease },
        whileInView: { opacity: 1, y: '0px' },
        // viewport: { once: true },
      };

    case 'right':
      return {
        initial: { opacity: 0, x: offset },
        transition: { duration, ease },
        whileInView: { opacity: 1, x: '0px' },
        // viewport: { once: true },
      };

    case 'bottom':
      return {
        initial: { opacity: 0, y: offset },
        transition: { duration, ease },
        whileInView: { opacity: 1, y: '0px' },
        // viewport: { once: true },
      };

    case 'left':
      return {
        initial: { opacity: 0, x: `-${offset}` },
        transition: { duration, ease },
        whileInView: { opacity: 1, x: '0px' },
        // viewport: { once: true },
      };

    default:
      return null;
  }
}
export function InViewSlide({
  children,
  slideFrom,
  offset = '100px',
  className,
  duration = 0.5,
  ease = easeInOut,
}) {
  const style = `${className}`;

  return (
    <motion.div {...animationSetup(slideFrom, offset, duration, ease)} className={style}>
      {children}
    </motion.div>
  );
}
