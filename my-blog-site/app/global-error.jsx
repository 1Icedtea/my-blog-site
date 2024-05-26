import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default function GlobalError({ error }) {
  useEffect(() => {
    Sentry.captureException(error);

    return () => {
      second;
    };
  }, [error]);
  return (
    <html>
      <body>{GlobalError}</body>
    </html>
  );
}
