import React from "react";


export interface TaskProps {
  value?: string
}

export default function Task({ value }: TaskProps) {
  console.log('value=',value)
  return (
    <div>
      <input value={value} readOnly/>
    </div>
  );
}


