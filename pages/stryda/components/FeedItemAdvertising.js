export default function FeedItemAdvertising(props) {
  const item = props.item;

  return (
    <>
      {item && (
        <div className="surface-ui-600 sm:rounded aspect-video grid place-content-center text-center text-2xl text-ui-400">
          <span>AD</span>
        </div>
      )}
    </>
  );
}
