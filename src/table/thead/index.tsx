import React from "react";
import { useComponent } from "../hooks/useComponents";
import { THeadProps } from "../types";

function THead<T>(props: THeadProps) {
  const { className } = props;
  const { ComponentThead, ComponentHeaderRow } = useComponent();
  return (
    <ComponentThead>
      <ComponentHeaderRow>
          
      </ComponentHeaderRow>
    </ComponentThead>
  );
}

export default THead;
