import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <span className="eyebrow">Error 404</span>
        <h1 className="mt-4 font-serif text-5xl text-primary">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you are looking for has been moved or no longer exists.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex h-11 items-center border border-primary bg-primary px-6 text-[12px] tracking-[0.2em] uppercase text-primary-foreground"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <span className="eyebrow">Something went wrong</span>
        <h1 className="mt-4 font-serif text-4xl text-primary">This page didn't load</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Please try again, or return home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex h-11 items-center border border-primary bg-primary px-6 text-[12px] tracking-[0.2em] uppercase text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex h-11 items-center border border-primary/40 px-6 text-[12px] tracking-[0.2em] uppercase text-primary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0F172A" },
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { name: "author", content: SITE.name },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: SITE.name,
          description: SITE.description,
          telephone: SITE.phone,
          email: SITE.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE.address.line1,
            addressLocality: "New Delhi",
            addressRegion: "DL",
            postalCode: "110013",
            addressCountry: "IN",
          },
          areaServed: ["Delhi", "Punjab", "Haryana", "Rajasthan", "Uttar Pradesh", "Chandigarh"],
          serviceType: [
            "Commercial & Corporate",
            "Civil & Property Law",
            "Dispute Resolution",
            "Family & Personal Laws",
            "Service & Insurance Law",
            "Constitutional Remedies",
            "Criminal Law",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
