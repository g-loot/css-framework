import Link from "next/link";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";

export default function Ad(props) {
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;

  const Width = props.width !== undefined ? props.width : "1005";
  const Height = props.height !== undefined ? props.height : "300";
  const URL = `https://gloot.netlify.app/ads/${Width}x${Height}/index.html`;
  return (
    <>
      {hasAds === true && (
        <div className={`flex flex-col items-center justify-center overflow-hidden mb-4 ${props.rounded === false ? "rounded-none" : "rounded-lg"}`}>
          <a
            href="http://gloot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer active:opacity-25"
          >
            <iframe
              className={`rounded-lg overflow-hidden pointer-events-none select-none ${props.rounded === false ? "rounded-none" : "rounded-lg"}`}
              src={URL}
              width={Width}
              height={Height}
              frameBorder="0"
              allowFullScreen="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </a>
          <Link href={`/prototype/premium${prototype.getURLparams()}`}>
            <a className="link link-main text-sm">Remove ads</a>
          </Link>
        </div>
      )}
    </>
  );
}
