import React, { useEffect, useRef } from "react";

export function useInfiniteScroll({
  root,
  rootMargin = "0px",
  threshold = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  onIntersect,
}: useIntersectionObserverProps) {
  const target = useRef(null);

  useEffect(() => {
    if (!target.current) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold }
    );
    observer.observe(target.current);

    return () => {
      if (target.current) observer.unobserve(target.current);
    };
  }, [onIntersect, root, rootMargin, target, threshold]);

  return { target };
}

interface useIntersectionObserverProps {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
  onIntersect: IntersectionObserverCallback;
}
