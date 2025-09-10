import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const SectionWrapper = ({
  children,
  className = '',
  id = '',
  fullWidth = false,
  padding = 'md',
}: SectionWrapperProps) => {
  const paddingClasses = {
    none: 'py-0',
    sm: 'py-6',
    md: 'py-8',
    lg: 'py-10',
    xl: 'py-12',
  };

  return (
    <section 
      id={id}
      className={`${paddingClasses[padding]} ${className}`}
    >
      <div className={`mx-auto ${!fullWidth ? 'max-w-7xl' : ''} px-4 sm:px-6 lg:px-8`}>
        {children}
      </div>
    </section>
  );
};
