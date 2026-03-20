import { GetServerSideProps } from "next";

interface AboutSSRProps {
  generatedAt: string;
}

export default function AboutSSR({ generatedAt }: AboutSSRProps) {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "24px", fontFamily: "Arial" }}>
      <h1>About Page (SSR)</h1>
      <p>This page was generated on every request.</p>
      <p><strong>Generated at:</strong> {generatedAt}</p>
      <p>
        SSR pages always have fresh data, but they require server work for each request.
      </p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      generatedAt: new Date().toISOString(),
    },
  };
};