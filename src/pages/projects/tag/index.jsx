import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function TagPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/projects/tag/all');
  });

  return <p>Redirecting</p>;
}
