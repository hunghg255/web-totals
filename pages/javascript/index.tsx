import Head from 'next/head';
import { GetStaticProps } from 'next';
import Layout from '~components/Layout/Layout';
import Navbar, { menuIcon } from '~components/Navbar/Navbar';
import utilStyles from '~styles/utils.module.css';
import ActiveLink from '~components/ActiveLink/Activelink';
import { getSortedJsData } from '~lib/javascript';
import { sidebarActions } from '~store/sidebar';
import { Icon } from '~components/Icon/Icon';
import { siteTitle } from 'src/constants/constant';

export default function JavascriptPage({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <meta property='og:image' content={'https://blog.hunghg.me/og.png'}></meta>
        <meta property='twitter:image' content={'https://blog.hunghg.me/og.png'}></meta>
      </Head>
      <div className={utilStyles.blog}>
        <aside className={`${utilStyles.aside} ${utilStyles.show}`}>
          <Navbar
            title='Javascript'
            isShowTitle
            leadingItem={{
              icon: menuIcon,
              onClick: () => {
                sidebarActions.setVisible(true);
              },
            }}
          />
          <div className={utilStyles.postsContainer}>
            <nav>
              {allPostsData.map(({ id, date, title }) => (
                <div key={id}>
                  <ActiveLink href={`/javascript/${id}`}>
                    <div className={utilStyles.post}>
                      <div className={utilStyles.title}>{title}</div>
                      <span className={utilStyles.date}>
                        <Icon icon='icon-materialsymbolscalendarclockoutlinerounded' />
                        {date}
                      </span>
                    </div>
                  </ActiveLink>
                </div>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedJsData();
  return {
    props: {
      allPostsData,
    },
  };
};
