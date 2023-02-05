
import Head from "next/head";

import Layout from "../../components/layout";
import { getAllPostIds, getPostdata } from "../../lib/post";
import Date from "../../components/date";

export async function getStaticProps( {params}) {
  const postData = await getPostdata(params.id);
  return {
    props: {
      postData,
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{ postData.title }</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <div dangerouslySetInnerHTML={{__html: postData.contentHTML}} />
    </Layout>
  )
}

