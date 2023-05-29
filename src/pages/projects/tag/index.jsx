import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function TagPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/projects');
  });

  return <p>Redirecting</p>;
}
