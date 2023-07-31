import React from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  data?: IData[];
}
interface IData {
  title: string;
}
const Accordion = (props: AccordionProps) => {
  const { title, children, data = [] } = props;

  return (
    <div className="accordion" data-testid="div-accord">
      <h3 className="accordion-title">{title}</h3>
      <div className="accordion-content">{children}</div>
      {data.length ? (
        data.map((dat, index) => <p key={index}>{dat.title}</p>)
      ) : (
        <p>List void</p>
      )}
      <title>Testing</title>
    </div>
  );
};

export default Accordion;
