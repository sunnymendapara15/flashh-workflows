import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('animate-fade-up');
          element.style.opacity = '1';
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}

export function useStaggeredReveal(delay = 100) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = Array.from(element.children);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, index) => {
            setTimeout(() => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
            }, index * delay);
          });
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    children.forEach((child) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(20px)';
      child.style.transition = `opacity 0.5s ease-out ${delay * 0.5}ms, transform 0.5s ease-out ${delay * 0.5}ms`;
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}