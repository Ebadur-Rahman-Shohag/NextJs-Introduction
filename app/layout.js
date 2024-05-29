import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Logo />
        <Navigation />

        <main>{children}</main>
        <footer>Copyright by Shohag</footer>
      </body>
    </html>
  );
}

/*

In Next.js, a layout component is a React component used to define a consistent structure or layout that can be shared across multiple pages of an application. Layout components typically include common elements like headers, footers, navigation bars, and sidebars, ensuring that these elements are present on every page where the layout is used.

Using a layout component helps in maintaining a consistent look and feel across the application and reduces code duplication by centralizing common layout code.
*/
