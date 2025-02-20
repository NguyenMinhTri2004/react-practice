import React from 'react';

type SectionBodyProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionBody: React.FC<SectionBodyProps> = ({ children, className }) => {
  return <div className={`section__body my-6 relative ${className}`}>{children}</div>;
};

export default SectionBody;
