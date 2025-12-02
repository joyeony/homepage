import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-8 border-l-4 border-[#3498DB] pl-4">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2C3E50] mb-2">
        {title}
      </h2>
      {subtitle && <p className="text-gray-500 text-sm md:text-base">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;