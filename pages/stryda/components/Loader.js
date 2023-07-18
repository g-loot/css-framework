import { useEffect, useState } from "react";

export default function Loader(props) {
  const loader = props.loader || (<div className='surface rounded-3 is-loading min-h-200px' />)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 700);
    }
  }, [loading]);

  return (
    <>
      {loading && loader}
      <div className={`${loading ? "opacity-0 h-0 overflow-hidden" : ""}`}>
        {props.children}
      </div>
    </>
  );
}
