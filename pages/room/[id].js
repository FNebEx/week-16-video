import { useRouter } from "next/router";
import Script from "next/script";

export default function Room(params) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Script 
        src="https://unpkg.com/peerjs@1.4.5/dist/peerjs.min.js"
        onLoad={async () => {
          const peer = new Peer(`room-${id}-first`);

          const localStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
          });
        
          document.querySelector('video#local').srcObject = localStream;
        }}
      />

      <h1 className='mt-20 text-center text-3xl uppercase font-black'>
        Room #{id}
      </h1>

      <div className="flex">
        <video id="local" autoPlay playsInline muted></video>
      </div>
    </>
  );
};

export async function getServerSideProps() {

  return {
    props: {
    }
  }
}