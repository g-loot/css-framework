export default function TabWalletVoucher() {
  return (
    <div className="relative z-10 surface rounded-xl p-4 w-full max-w-xs mx-auto my-8 animate-slide-in-bottom">
      <h2 className="text-2xl text-center mt-4">Claim your voucher</h2>
      <div className="form-group my-8">
        <label htmlFor="voucher">Voucher code</label>
        <input type="text" name="voucher" id="voucher" />
      </div>
      <button type="button" className="button button-primary w-full">
        <span>Claim voucher</span>
      </button>
    </div>
  );
}
