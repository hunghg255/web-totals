import React, { useEffect } from 'react';

import mermaid from 'mermaid';
mermaid.initialize({ startOnLoad: true, theme: 'dark' });

const MermaidContent = () => {
  useEffect(() => {
    if (document) {
      const eleCopy = document.querySelectorAll('.markdown-it-mermaid');

      if (eleCopy?.length) {
        eleCopy.forEach(async (el) => {
          const content = el?.textContent;
          if (content) {
            const type = mermaid.detectType(content as string);
            const { svg } = await mermaid.render(type, content as string);
            el.innerHTML = svg;
            el.classList.remove('opacity-0');
          }
        });
      }
      setTimeout(() => {
        //@ts-ignore
        window.mediumZoom('[data-zoomable]');
      }, 300);
    }
  }, [location.href]);

  return <></>;
};

export default MermaidContent;
