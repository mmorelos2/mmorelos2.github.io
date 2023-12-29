import React from "react";

type ExperienceProps = {
  companyName: string;
  jobTitle: string;
  dateWorked: string;
  description: React.ReactNode;
};

export default function Experience({
  companyName,
  jobTitle,
  dateWorked,
  description,
}: ExperienceProps) {
  return (
    <li className="mb-6 pl-6 relative">
      <div className="border-l-2 border-gray-300 hover:border-gray-400 transition duration-300 pl-8 py-2">
        <h2 className="text-lg font-semibold">{companyName}</h2>
        <p className="text-sm text-gray-600">{jobTitle}</p>
        <p className="text-sm text-gray-600">{dateWorked}</p>
        <div className="text-sm">{description}</div>
      </div>
    </li>
  );
}
