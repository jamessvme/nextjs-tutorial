import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'your Name';
export const siteTitle = 'Next js Sample Website';

export default function({ children, home }) {
  
  return (
    <div className=''>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta 
          name="description"
          content='Learn how to build a personal website using Next.js'
        />
        <meta 
          property='og:image'
          content="sdfa"
        />
        <meta 
          name='og:title'  
          content={siteTitle}  
        />
        <meta 
          name='twitter:card'
          content='summary_large_image'
        />
      </Head>
      <header className=''>
        {home ? (
          <>
            <Image
              priority
              src='/images/profile.jpg'
              className=''
              height={144}
              width={144}
              />
          </>
        ) : (
          <>
            <Link href="/">
              <Image 
                priority
                src='/images/profile.jpg'
                className=''
                height={108}
                width={108}
                alt=''
                />
            </Link>
            <h2>
              <Link href="/" className=''>{name}</Link>
            </h2>  
          </>
        )}
      </header>
      <main>{children}</main>
      {!home&& (
        <div>
          <Link href="/">Back to home</Link>
        </div>
      )}
    </div>  
  )
}