import {use} from 'react';
import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import PageLayout from '@/components/PageLayout';

export default function PathnamesPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = use(params);
  setRequestLocale(locale as Locale);
  const t = useTranslations('PathnamesPage');

  return (
    <PageLayout title={t('title')}>
      <div className="max-w-[490px]">
        {t.rich('description', {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          )
        })}
      </div>
      <h2>Autopilot section</h2>
      <p>A short section, with <a href="/x">a link</a> &amp; &#123;braces&#125;.</p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "name": "Autopilot FAQ",
        "@type": "FAQPage",
        "@context": "https://schema.org",
        "mainEntity": []
      }) }} />
    </PageLayout>
  );
}
