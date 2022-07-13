export default function TabWalletVoucher() {
  return (
    <>
      <div className="py-16 relative">
        <img
          className="hidden lg:block absolute animate-fade-in animate-delay z-20 pointer-events-none -top-4 right-[calc(50%-250px)] rotate-[33deg]"
          src="https://res.cloudinary.com/gloot/image/upload/v1657625027/Marketing/2022_prototype/3D_object_crown.webp"
          width="175"
          height="auto"
          alt=""
          style={{'--delay':'calc(2 * 0.05s)'}}
        />
        <img
          className="hidden lg:block absolute animate-fade-in animate-delay z-20 pointer-events-none bottom-4 left-[calc(50%-275px)] -rotate-[33deg]"
          src="https://res.cloudinary.com/gloot/image/upload/v1657625027/Marketing/2022_prototype/3D_object_star.webp"
          width="125"
          height="auto"
          alt=""
          style={{'--delay':'calc(3 * 0.05s)'}}
        />
        <div className="relative z-10 surface rounded-xl p-4 w-full max-w-xs mx-auto animate-slide-in-bottom">
          <h2 className="text-2xl text-center mt-4">Claim your voucher</h2>
          <p className="text-sm text-ui-300 mt-4 mb-8 text-center max-w-[25ch] mx-auto">
            Enter your voucher code below and click on Claim voucher.
          </p>
          <div className="form-group">
            <label htmlFor="voucher">Voucher code:</label>
            <input type="text" name="voucher" id="voucher" />
          </div>
          <hr className="my-4" />
          <button type="button" className="button button-primary w-full">
            <span>Claim voucher</span>
          </button>
        </div>
      </div>
    </>
  );
}
