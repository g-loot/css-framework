import { useEffect, useState } from "react";
import { usePrototypeData } from "@/contexts/prototype";

export default function Loader(props) {
  const prototype = usePrototypeData();
  const loader = props.loader || (
    <div className="surface rounded is-loading min-h-200px" />
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 700);
    }
  }, [loading]);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 700);
  // }, [prototype.defaultGameID]);

  return (
    <>
      {loading && loader}
      <div className={`${loading ? "opacity-0 h-0 overflow-hidden" : ""}`}>
        <div
          className={`transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        >
          {props.children}
        </div>
      </div>
    </>
  );
}
