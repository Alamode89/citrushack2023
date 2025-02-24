import Head from 'next/head';
import { Layout } from '@/components/Page/Layout';

interface Props {
  /** Content of the page. */
  children: React.ReactNode | React.ReactNode[];
  /** Title of the page displayed in the head tag. */
  title?: string;
}

export function Page({ children, title }: Props) {
  return (
    <Layout>
      <Head>
        <title>Citrus Hack 2023 {title && '| ' + title}</title>
      </Head>
      <section className="flex flex-col w-full justify-center items-center bg-sky">
        {children}
      </section>
    </Layout>
  );
}
