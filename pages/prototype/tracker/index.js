import Image from "next/image";
import PrototypeStructure from "@/components/Prototype/PrototypeStructure";
import useFetch from "../../../hooks/use-fetch";
import { useRouter } from "next/router";

export default function Tracker() {
  const router = useRouter();
  const { data, loading } = useFetch("/api/ladders", { delay: 1000 });

  return (
    <>
      <PrototypeStructure title="Tracker">
        <section className="min-h-[calc(100vh-120px)] flex items-center justify-center relative">
          <div
            className="surface p-4 rounded-lg max-w-sm mx-auto text-center animate-slide-in-bottom animate-delay"
            style={{ "--delay": "calc(2 * 0.05s)" }}
          >
            <span className="icon icon-stryda-symbol text-main text-7xl mx-auto animate-slide-in-top my-4" />
            <div className="flex gap-4 items-center justify-center">
              <span className="icon icon-data-download text-4xl text-ui-200" />
              <h2 className="modal-title h3">Download started</h2>
            </div>
            <ul className="rounded-lg p-6 space-y-2 bg-gradient-to-b from-ui-800 to-ui-800/50 my-4 text-left">
              <li
                className="flex gap-2 items-center animate-slide-in-bottom animate-delay"
                style={{ "--delay": "calc( 2 * 0.05s)" }}
              >
                <span className="icon icon-check text-main text-2xl" />
                <span className="flex-1">
                  An official Overwolf app for Windows
                </span>
                <span className="icon icon-overwolf-symbol text-2xl text-ui-300" />
                <span className="icon icon-windows-symbol text-2xl text-ui-300" />
              </li>
              <li
                className="flex gap-2 items-center animate-slide-in-bottom animate-delay"
                style={{ "--delay": "calc( 3 * 0.05s)" }}
              >
                <span className="icon icon-check text-main text-2xl" />
                <span className="flex-1">Lightweight</span>
              </li>
              <li
                className="flex gap-2 items-center animate-slide-in-bottom animate-delay"
                style={{ "--delay": "calc( 4 * 0.05s)" }}
              >
                <span className="icon icon-check text-main text-2xl" />
                <span className="flex-1">
                  Doesn’t affect your game performance
                </span>
              </li>
            </ul>
            <p className="leading-tight text-center text-sm text-ui-300 max-w-[45ch] mx-auto">
              Your download should start automatically. If it does not, please
              click{" "}
              <a href="#" className="link link-main">
                here
              </a>{" "}
              to download.
            </p>
          </div>
        </section>
      </PrototypeStructure>
    </>
  );
}
