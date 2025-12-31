import React, { useEffect, useRef, useState } from "react";
import { FC } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

type Props = {
  src: string;
};

const Iframe: FC<Props> = ({ src }) => {
  const ref = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    if (!ref.current || !ExecutionEnvironment.canUseDOM || typeof window === 'undefined') return;
    const iFrame = ref.current;
    function integrateIframe() {
      if (!iFrame || !iFrame.contentWindow) return;
      iFrame.style.backgroundColor = "#ffffff";
      iFrame.style.height =
        iFrame.contentWindow.document.body.scrollHeight + 100 + "px";
    }
    iFrame.onload = function () {
      integrateIframe();
    };
    // Force update in case iframe loaded before the effect was bound
    const timeout = window.setTimeout(integrateIframe, 1000);
    return () => {
      window.clearTimeout(timeout);
    };
  }, [ref.current]);

  return <iframe ref={ref} src={src} width="100%" />;
};

export default Iframe;
