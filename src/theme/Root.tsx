import React, { PropsWithChildren } from "react";
import BraveShieldsWarning from "@site/src/components/BraveShieldsWarning";

export default function Root({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <BraveShieldsWarning />
    </>
  );
}

