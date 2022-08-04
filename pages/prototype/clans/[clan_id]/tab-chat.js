import Chat from "../../../../components/Chat/Chat";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TabClanChat() {
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  return (
    <>
      <div className="flex-1 surface sm:rounded-lg">
        <Chat maxheight="" />
      </div>
    </>
  );
}
