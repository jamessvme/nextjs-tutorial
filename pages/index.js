import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';
import { getStortedPostsData } from '../lib/post';
import Date from '../components/date';

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
      <section className='w-2/3 mx-auto'>
        <h2 className='text-center text-2xl text-red-700 tracking-wide '> Blog </h2>
        <ul className='grid grid-cols-2 mt-3'>
         {allPostData.map(({id, title, date}) => (
            <li className='' key={id}>
            <Link href={`posts/${id}`}>{title}</Link>  
              <br />
              <Date dateString={date} />               
            </li>           
         ))}
        </ul>
      </section>
    </Layout>
  )
}
