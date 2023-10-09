import { useEffect, useState, useRef, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import { dataMatches } from "@/mock-data/data-matches";

export default function TopbarHighlightsSettings() {
  const { query } = useRouter();
  const isEmpty = query.empty === "true" ? true : false;
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
        <input type="file" name="file-input" id="file-input" webkitdirectory directory multiple />
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
          <div className={`flex-none whitespace-nowrap ${inputValue < 30 ? 'text-error-500' : ''}`}>{inputValue} GB</div>
        </div>
        {inputValue < 30 ? (
          <div className="text-xs text-error-300 animate-shake">
            {inputValue} GB ≈ {Math.round(inputValue * 3.75)} min. of gameplay
          </div>
        ) : (
          <div className="text-xs text-ui-300">
            {inputValue} GB ≈ {Math.round(inputValue * 3.75)} hours of gameplay
          </div>
        )}
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
