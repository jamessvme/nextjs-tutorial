import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import { getStortedPostsData } from '../lib/post';
export async function getStaticProps() {
  const allPostData = getStortedPostsData();
  return {
    props: {
      allPostData,
    }
  }
}
export default function Home({ allPostData }) {
  console.log(allPostData);
  return (
    <Layout home>
      <section>
        <h2> Blog </h2>
        <ul>
         {allPostData.map(({id, title, date}) => (
            <li className='' key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>           
         ))}
        </ul>
      </section>
    </Layout>
  )
}
