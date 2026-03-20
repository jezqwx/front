import { GetStaticProps } from "next";

interface AboutProps {
  generatedAt: string;
}

export default function About({ generatedAt }: AboutProps) {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "24px", fontFamily: "Arial" }}>
      <h1>About Page (SSG)</h1>
      <p>This page was generated at build time.</p>
      <p><strong>Generated at:</strong> {generatedAt}</p>
      <p>
        SSG pages are pre-rendered, so they are usually faster on first load.
      </p>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      generatedAt: new Date().toISOString(),
    },
  };
};