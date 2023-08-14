export default function FeedItemAdvertising(props) {
  const item = props.item;

  return (
    <>
      {item && (
        <div className="rounded bg-ui-600 aspect-video grid place-content-center text-center text-2xl text-ui-400">
          <span>AD</span>
        </div>
      )}
    </>
  );
}
