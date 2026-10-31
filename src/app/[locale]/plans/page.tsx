import PageLayout from '@/components/PageLayout';

const pages = {
  "en": {
    "title": "Plans | Autopilot",
    "description": "Plans: what it is and who it is for.",
    "h1": "Our plans",
    "html": "\u003ch2>Our plans?\u003c/h2>\u003cp>Plans for teams who want {more} & better.\u003c/p>\u003cul>\u003cli>One\u003c/li>\u003cli>Two\u003c/li>\u003c/ul>\n\u003ch2>FAQ\u003c/h2>\u003ch3>Why Plans?\u003c/h3>\u003cp>Because it's good.\u003c/p>",
    "schema": "{\"@graph\": [{\"name\": \"Plans\", \"@type\": \"WebPage\"}], \"@context\": \"https://schema.org\"}"
  },
  "de": {
    "title": "Tarife | Autopilot",
    "description": "Tarife: what it is and who it is for.",
    "h1": "Unsere Tarife",
    "html": "\u003ch2>Unsere Tarife?\u003c/h2>\u003cp>Tarife for teams who want {more} & better.\u003c/p>\u003cul>\u003cli>One\u003c/li>\u003cli>Two\u003c/li>\u003c/ul>\n\u003ch2>FAQ\u003c/h2>\u003ch3>Why Tarife?\u003c/h3>\u003cp>Because it's good.\u003c/p>",
    "schema": "{\"@graph\": [{\"name\": \"Tarife\", \"@type\": \"WebPage\"}], \"@context\": \"https://schema.org\"}"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = pages[locale as keyof typeof pages];
  return { title: copy.title, description: copy.description };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = pages[locale as keyof typeof pages];
  return (
    <PageLayout title={copy.h1}>
      <div dangerouslySetInnerHTML={{ __html: copy.html }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: copy.schema }} />
    </PageLayout>
  );
}
