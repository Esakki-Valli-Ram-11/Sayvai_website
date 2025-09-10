import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Sayvai',
  description: 'Explore our latest posts and insights where we share valuable information, industry trends, and expert advice.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
