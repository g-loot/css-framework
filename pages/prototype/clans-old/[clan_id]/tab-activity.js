import Link from "next/link";
import SectionClanActivity from "./section-activity";
import { useRouter } from "next/router";

export default function TabClanActivity() {
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  return (
    <>
      <div className="space-y-4">
        <SectionClanActivity />
      </div>
    </>
  );
}
