export default function ValorantClashTabPartake() {
  return (
    <>
      <section className="py-24">
        <div className="container max-w-lg mx-auto">
          <div className="animate-pulse">
          <img className="mx-auto animate-[loader-rotate_30s_linear_infinite] opacity-50" src="https://res.cloudinary.com/gloot/image/upload/v1663770400/Marketing/2022_Valorant_clash/Valorant_Clash_spike.svg" width="75" height="75" alt="" />
          </div>
          <h2
            className="animate-slide-in-bottom animate-delay text-center my-6"
            style={{ "--delay": "calc(1 * 0.1s)" }}
          >
            The event has not started
          </h2>
          <p
            className="text-gradient text-lg leading-loose bg-gradient-to-r from-interaction-500 to-blue-500 animate-slide-in-bottom animate-delay text-center"
            style={{ "--delay": "calc(2 * 0.1s)" }}
          >
            You can still create your account, join a clan and start practicing.
          </p>
          <div
            className="mt-10 animate-slide-in-bottom animate-delay text-center"
            style={{ "--delay": "calc(3 * 0.1s)" }}
          >
            <button type="button" className="button button-primary w-52">
              <span>Create account</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
