import { useEffect, useState, useRef, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import { dataMatches } from "@/mock-data/data-matches";

export default function TopbarHighlightsSettings() {
  const { query } = useRouter();
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);
  const [inputValue, setInputValue] = useState(30);
  const uiContext = useContext(UiContext);
  const [submitting, setSubmitting] = useState(false);

  function handleSave() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "medium",
        text: `Settings saved successfully.`,
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      uiContext.closeModal();
      setSubmitting(false);
    }, 3000);
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="form-group">
        <label for="file-input">Destination folder</label>
        <button
          type="button"
          className="flex h-11 items-stretch gap-0 justify-start group overflow-hidden max-w-[100%]"
        >
          <div className="relative flex items-center z-10 p-0 bg-ui-600 cursor-pointer px-4 rounded-l-sm border border-ui-500 font-bold w-full text-sm text-ui-200 whitespace-nowrap flex-[0] group-hover:text-ui-100 group-hover:bg-ui-500 group-hover:border-ui-400 focus:outline-none group-active:text-ui-100 group-active:bg-ui-500 group-active:border-ui-300">
            <span>Choose folder</span>
          </div>
          <div className="relative inline-flex items-center z-0 rounded-r w-full -ml-px bg-ui-700 border border-ui-500 shadow-[inset_2px_2px_6px_0px_rgb(0,0,0,0.25)] focus-visible:-outline-offset-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-ui-300 focus-visible:z-20 p-2 text-sm truncate child:truncate group-hover:text-ui-100 group-hover:bg-ui-500 group-hover:border-ui-400 group-hover:z-20 focus:outline-none group-active:text-ui-100 group-active:bg-ui-500 group-active:border-ui-300 group-active:z-20">
            <span>
              C:\Program Files\My Softwares\Gaming\Esports\Recording Devices\
            </span>
          </div>
        </button>
      </div>
      <div className="form-group">
        <label for="range">Allocated space</label>
        <ul className="space-y-1 mt-2 mb-3 list-outside list-disc pl-4 text-sm text-ui-300">
          <li>
            More hours of gameplay require more allocated space on your drive.
          </li>
          <li>
            When the storage hits its maximum space, the oldest recording gets
            removed.
          </li>
        </ul>
        <div className="flex items-start gap-6 leading-none">
          <div className="flex-1">
            <input
              type="range"
              className="form-range"
              id="range"
              min="10"
              max="100"
              value={inputValue}
              onChange={handleInputChange}
              step="10"
            />
            <div className="w-full flex justify-between text-xs text-ui-400 px-2">
              <span className="h-2 w-px bg-ui-400/20" />
              <span className="h-2 w-px bg-ui-400/20" />
              <span className="h-2 w-px bg-ui-400/20" />
              <span className="h-2 w-px bg-ui-400/20" />
              <span className="h-2 w-px bg-ui-400/20" />
              <span className="h-2 w-px bg-ui-400/20" />
              <span className="h-2 w-px bg-ui-400/20" />
              <span className="h-2 w-px bg-ui-400/20" />
              <span className="h-2 w-px bg-ui-400/20" />
            </div>
          </div>
          <div
            className={`flex-none whitespace-nowrap ${
              inputValue < 30 ? "text-error-500" : ""
            }`}
          >
            {inputValue} GB
          </div>
        </div>
        <div
          className={`text-xs ${
            inputValue < 30 ? "text-error-300 animate-shake" : "text-ui-300"
          }`}
        >
          {inputValue} GB ≈ {Math.round(inputValue * 3.75)} min. of gameplay
        </div>
      </div>
      <button
        type="button"
        className={`button button-primary ${submitting ? "is-loading" : ""}`}
        onClick={handleSave}
      >
        <span>Save settings</span>
      </button>
    </div>
  );
}
