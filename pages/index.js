import Head from 'next/head'
import Router from 'next/router'

export default function Home() {
  const handleclick = () => {
    Router.push(`/room/${crypto.randomUUID().split('-')[0]}`);
    // console.log(crypto.randomUUID().split('-')[0]);
  }

  return (
    <div>
      <Head>
        <title>Video App</title>
        <meta name='description' content='Videoconf' />
      </Head>

      <h1 className='mt-20 text-center text-3xl uppercase font-black'>Video App</h1>
      <button 
        onClick={handleclick}
        className='block mx-auto bg-black text-white p-3 rounded-2xl mt-20 text-2xl'>
          Create a new chat room
        </button>
    </div>
  )
}
