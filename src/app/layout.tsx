import type { Metadata } from "next";
import "./../shared/styles/globals.scss";

export const metadata: Metadata = {
  title: "Statements",
  description: "Statements",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
