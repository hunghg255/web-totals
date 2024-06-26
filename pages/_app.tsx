import '~styles/globals.css';
import 'markdown-it-github-alerts/styles/github-colors-light.css';
import 'markdown-it-github-alerts/styles/github-colors-dark-media.css';
import 'markdown-it-github-alerts/styles/github-base.css';

import 'markdown-it-code-group/styles/code-group-colors-light.css';
import 'markdown-it-code-group/styles/code-group-colors-dark-media.css';
import 'markdown-it-code-group/styles/code-group-base.css';

import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const CopyContent = dynamic(() => import('~components/CopyContent/CopyContent'), { ssr: false });
const CodeGroup = dynamic(() => import('~components/CodeGroup/CodeGroup'), { ssr: false });

const MermaidContent = dynamic(() => import('~components/MermaidContent/MermaidContent'), {
  ssr: false,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <CopyContent />
      <CodeGroup />
      <MermaidContent />

      <Script src='https://cdn.jsdelivr.net/npm/medium-zoom@1.1.0/dist/medium-zoom.min.js' />
    </>
  );
}

export default App;
