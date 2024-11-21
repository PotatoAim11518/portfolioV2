import Heading from "../../Heading";
import React, { useState } from "react";
import { SkillsNav } from "./SkillsNav";

type SkillsProps = {
  children: React.ReactNode;
  labels: string[];
};
export default function Skills({ children, labels }: SkillsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };
  const childNodes = React.Children.toArray(children);

  return (
    <section className="flex flex-col justify-center items-center">
      <Heading>Skills</Heading>
      <div className="flex flex-col gap-8 w-full mt-10">
        <SkillsNav
          labels={labels}
          activeTab={activeTab}
          onClick={handleActiveTab}
        />
        {childNodes[activeTab]}
      </div>
    </section>
  );
}
