export default function MissionsCompletedList() {
  return (
    <ul className="rounded-lg text-left text-sm">
      <li className="flex gap-3 py-1 items-center">
        <div className="rarity rarity-category-4 w-28">
          <span className="icon icon-category-4" />
          <span>legendary</span>
        </div>
        <span className="text-right w-5">3</span>
      </li>
      <li className="flex gap-3 py-1 items-center">
        <div className="rarity rarity-category-3 w-28">
          <span className="icon icon-category-3" />
          <span>epic</span>
        </div>
        <span className="text-right w-5">5</span>
      </li>
      <li className="flex gap-3 py-1 items-center">
        <div className="rarity rarity-category-2 w-28">
          <span className="icon icon-category-2" />
          <span>rare</span>
        </div>
        <span className="text-right w-5">8</span>
      </li>
      <li className="flex gap-3 py-1 items-center">
        <div className="rarity rarity-category-1 w-28">
          <span className="icon icon-category-1" />
          <span>common</span>
        </div>
        <span className="text-right w-5">16</span>
      </li>
    </ul>
  );
}
