import { useContext, useEffect, useState, useRef } from "react";
import Structure from "@/pages/stryda/components/Structure";
import { useRouter } from "next/router";
import { UiContext } from "@/contexts/ui";
import ModalBuyPremium from "./modal-buypremium";
import PremiumLogo from "@/components/PremiumLogo/PremiumLogo";
import { usePrototypeData } from "@/contexts/prototype";
import GameIcon from "@/components/GameIcon/GameIcon";
import Tooltip from "@/components/Tooltip/Tooltip";

const Track = ({
  trackData,
  isPlaying,
  isPlayingID,
  progress,
  playPauseTrack,
}) => {
  const { id, image, name, duration } = trackData;
  return (
    <li className="item py-0">
      <div className="item-image pl-0">
        <div className="form-radio">
          <input
            type="radio"
            name="trackSelection"
            id={`trackSelection_${id}`}
          />
          <label htmlFor={`trackSelection_${id}`} />
        </div>
      </div>
      <div className="flex-1 flex gap-2 items-center relative p-2 [&>div]:relative [&>div]:z-10 overflow-hidden">
        <div className="item-image">
        <img
          src={image}
          alt={name}
          className={`h-8 w-8 rounded object-cover ${
            isPlaying && isPlayingID === id
              ? "opacity-100"
              : "opacity-25 grayscale-0"
          }`}
        />
      </div>
        <div className="item-body">
          <div
            className={`item-title text-sm truncate ${
              isPlaying && isPlayingID === id ? "text-main" : "text-ui-300"
            }`}
          >
            {name}
          </div>
        </div>
        <div className="item-actions">
          <div className="text-xs text-ui-300 text-right">{duration}</div>
        </div>
        {isPlaying && isPlayingID === id && progress > 0 && (
          <i className="absolute z-0 inset-0 pointer-events-none bg-ui-200/5 animate-slide-in-bottom">
            <i
              className="absolute inset-0 bg-mono-100/20"
              style={{ width: `${progress}%` }}
            />
          </i>
        )}
      </div>

      <div className="item-actions">
        <button
          onClick={() => playPauseTrack(trackData)}
          className="button button-tertiary button-sm rounded-full"
        >
          <span
            className={`icon ${
              isPlaying && isPlayingID === id
                ? "icon-button-pause"
                : "icon-triangle-right"
            }`}
          />
        </button>
      </div>
    </li>
  );
};

const Playlist = () => {
  const initialTracks = [
    {
      id: 1,
      name: "What It Is",
      duration: "3:45",
      image:
        "https://res.cloudinary.com/gloot/image/upload/v1697525867/Stryda/demo/music/Doechii_-_What_It_Is_Block_Boy_feat.webp",
      audio:
        "https://res.cloudinary.com/gloot/video/upload/v1697525510/Stryda/demo/music/Doechii_-_What_It_Is_Block_Boy_feat._Kodak_Black_Official_Video.mp3",
    },
    {
      id: 2,
      name: "Makeba",
      duration: "4:15",
      image:
        "https://res.cloudinary.com/gloot/image/upload/v1697525862/Stryda/demo/music/Jain_-_Makeba_cover.webp",
      audio:
        "https://res.cloudinary.com/gloot/video/upload/v1697525506/Stryda/demo/music/Jain_-_Makeba.mp3",
    },
    {
      id: 3,
      name: "As It Was",
      duration: "4:15",
      image:
        "https://res.cloudinary.com/gloot/image/upload/v1697525863/Stryda/demo/music/Harry_Styles_-_As_It_Was_Official_Video_cover.webp",
      audio:
        "https://res.cloudinary.com/gloot/video/upload/v1697525503/Stryda/demo/music/Harry_Styles_-_As_It_Was_Official_Video.mp3",
    },
  ];

  const audioRef = useRef(null);
  const [selectedTrack, setSelectedTrack] = useState(initialTracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const audioElement = audioRef.current;
      const currentProgress =
        (audioElement.currentTime / audioElement.duration) * 100;
      setProgress(currentProgress);
    };

    audioRef.current.addEventListener("timeupdate", updateProgress);

    return () => {
      audioRef.current.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const playPauseTrack = (track) => {
    if (selectedTrack.name === track.name) {
      if (isPlaying) {
        setIsPlaying(false);
        audioRef.current.pause();
      } else {
        setIsPlaying(true);
        audioRef.current.play();
      }
    } else {
      setSelectedTrack(track);
      setIsPlaying(true);
      audioRef.current.src = track.audio;
      audioRef.current.play();
    }
  };

  return (
    <>
      <ul>
        {initialTracks.map((track) => (
          <Track
            key={track.id}
            id={track.id}
            trackData={track}
            isPlaying={isPlaying}
            isPlayingID={selectedTrack.id}
            progress={progress}
            playPauseTrack={playPauseTrack}
          />
        ))}
      </ul>
      <audio ref={audioRef}>
        {selectedTrack && (
          <source src={selectedTrack.audio} type="audio/mpeg" />
        )}
      </audio>
    </>
  );
};

const Clips = [
  {
    id: 1,
    isSelected: true,
    isAIFavored: true,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-01.mp4",
  },
  {
    id: 2,
    isSelected: false,
    isAIFavored: false,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-02.mp4",
  },
  {
    id: 3,
    isSelected: true,
    isAIFavored: true,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-03.mp4",
  },
  {
    id: 4,
    isSelected: true,
    isAIFavored: true,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-04.mp4",
  },
  {
    id: 5,
    isSelected: false,
    isAIFavored: false,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-05.mp4",
  },
  {
    id: 6,
    isSelected: true,
    isAIFavored: true,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-06.mp4",
  },
  {
    id: 7,
    isSelected: true,
    isAIFavored: true,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-07.mp4",
  },
  {
    id: 8,
    isSelected: false,
    isAIFavored: false,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-08.mp4",
  },
  {
    id: 9,
    isSelected: true,
    isAIFavored: true,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-09.mp4",
  },
  {
    id: 10,
    isSelected: false,
    isAIFavored: false,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-10.mp4",
  },
  {
    id: 11,
    isSelected: true,
    isAIFavored: true,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-11.mp4",
  },
  {
    id: 12,
    isSelected: true,
    isAIFavored: true,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-12.mp4",
  },
  {
    id: 13,
    isSelected: true,
    isAIFavored: true,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-13.mp4",
  },
];

const getClipByID = (id) => {
  const selectedClip = Clips.find((clip) => {
    return clip.id === parseInt(id);
  });
  return selectedClip;
};

const Clip = ({ item, showOnlySelected, onLoad, onSelect }) => {
  const [isSelected, setIsSelected] = useState(item.isSelected);
  const id = RandomNumber(1000, 100000);
  const [video, setVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    if (item.isSelected) {
      setIsSelected(true);
    }
  }, [item]);

  useEffect(() => {
    if (isSelected) {
      onSelect(+1);
    } else {
      onSelect(-1);
    }
  }, [isSelected]);

  useEffect(() => {
    setVideo(document.getElementById(`video_${id}`));
  }, [id]);

  const handleSelection = () => {
    setIsSelected(!isSelected);
  };

  function handleVideoPlay() {
    setIsPlaying(true);
    onLoad(item.id, true);
  }
  function handleVideoPause() {
    setIsPlaying(false);
    onLoad(item.id, false);
  }

  return (
    <li
      className={`surface-ui-600 text-0 rounded-2 overflow-hidden duration-200 transition-[width] child:transition child:duration-300 ${
        isSelected ? "!border-main" : "opacity-60 child:grayscale"
      } ${
        showOnlySelected && !isSelected
          ? "w-2 child:opacity-0 pointer-events-none"
          : "w-44"
      }`}
    >
      <div className="flex items-center justify-between px-1 h-7">
        {item.isAIFavored ? (
          <Tooltip
            placement="top"
            tooltip={
              <div className="max-w-xs text-sm text-center leading-tight">
                AI favored this clip
              </div>
            }
          >
            <button type="button" className="text-ui-300 text-0">
              <span className="icon icon-robot text-lg" />
            </button>
          </Tooltip>
        ) : (
          <div />
        )}
        <div className="flex items-center gap-1 text-xs text-ui-300">
          <span className="icon icon-clock" />
          <span>12s</span>
        </div>
        <div className="form-checkbox form-sm">
          <input
            type="checkbox"
            name={`item_${item.id}`}
            id={`item_${item.id}`}
            checked={isSelected}
            onChange={handleSelection}
          />
          <label htmlFor={`item_${item.id}`} />
        </div>
      </div>
      <button
        type="button"
        onMouseOver={handleVideoPlay}
        onMouseOut={handleVideoPause}
        className="w-full aspect-video bg-ui-850 relative child:pointer-events-none"
      >
        <div
          className={`absolute z-10 inset-0 grid place-content-center transition-all overflow-hidden ${
            isPlaying ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
          }`}
        >
          <span className="icon icon-circle-caret-right text-mono-100 text-5xl" />
        </div>
        <video
          autoPlay={false}
          controls={false}
          playsInline
          // loop
          muted
          width="100%"
          height="auto"
          className="relative z-0 w-full pointer-events-none"
          id={`video_${id}`}
          src={`${item.url}#t=1`}
        />
      </button>
      <button
        type="button"
        className="w-full flex text-lg cursor-grab items-center justify-center text-ui-300 hover:text-ui-100 h-7"
      >
        <span className="icon icon-handle" />
      </button>
    </li>
  );
};

export default function HighlightEditor() {
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const isPremium = prototype.isPremium;
  const uiContext = useContext(UiContext);
  const [selectedClip, setSelectedClip] = useState(getClipByID(1));
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedClipsLength, setSelectedClipsLength] = useState();
  const [isHovered, setIsHovered] = useState(false);
  const [showOnlySelected, setShowOnlySelected] = useState(false);
  const mainVideoRef = useRef(null);

  const handleLoad = (itemID, plays) => {
    mainVideoRef.current.src = getClipByID(itemID).url;
    if (plays) {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  };

  const handleSelect = (plus) => {
    setSelectedClipsLength(selectedClipsLength + plus);
  };

  useEffect(() => {
    setSelectedClipsLength(getSelectedClipsLength);
  }, []);

  const getSelectedClipsLength = () => {
    return Math.round(Clips?.filter((g) => g.isSelected).length);
  };

  function openModalBuyPremium() {
    uiContext.openModal(<ModalBuyPremium></ModalBuyPremium>);
  }

  const handleMainVideoLoaded = () => {
    if (isHovered) {
      mainVideoRef.current.play();
    }
  };

  return (
    <>
      <Structure title="Highlight Editor">
        <section className="hidden md:flex flex-col gap-4 my-4 max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-stretch gap-4">
            <div className="surface rounded flex-1">
              <div className="border-b border-ui-700 p-1 pr-3 flex items-center justify-between text-xs h-11 bg-gradient-to-b from-ui-700 to-ui-800">
                <div className="flex items-center gap-1">
                  <GameIcon id={1} />
                  <span>Today at 10:30am</span>
                </div>
                <div className="flex items-center gap-2 divide-x divide-ui-600">
                  <div className="flex items-center gap-2">
                    <div className="avatar avatar-simple avatar-tiny">
                      <div>
                        <img
                          src="https://res.cloudinary.com/gloot/image/upload/Stryda/stats/valorant/agent-avatar-phoenix.webp"
                          alt="avatar"
                        />
                      </div>
                    </div>
                    <span>Phoenix</span>
                  </div>
                  <div className="pl-2">Fracture</div>
                  <div className="pl-2">Unrated</div>
                  <div className="pl-2">
                    Recorded clips: <b>{Clips.length}</b>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video bg-ui-850 rounded-b overflow-hidden">
                <video
                  //controls
                  ref={mainVideoRef}
                  loop
                  muted
                  width="100%"
                  height="auto"
                  className="w-full"
                  onLoadedMetadata={handleMainVideoLoaded}
                  // src={selectedClip.url}
                />
              </div>
            </div>
            <div className="surface rounded w-80 flex flex-col">
              <div className="flex-1 relative flex flex-col">
                <ul className="tabs tabs-secondary border-b border-ui-700 bg-gradient-to-b from-ui-700 to-ui-800">
                  <li>
                    <a className="is-active">
                      <span>Music</span>
                    </a>
                  </li>
                </ul>
                <div className="flex-1 overflow-y-auto scrollbar-desktop">
                  <Playlist />
                </div>
              </div>
              <div className="p-2 text-center space-y-2 border-t border-ui-700">
                <button
                  type="button"
                  className="button button-primary w-full"
                  disabled={selectedClipsLength === 0}
                >
                  <span>Create highlight</span>
                </button>
                <span className="text-xs leading-none">
                  Estimated time to render: <b className="text-ui-100">02:30</b>
                </span>
              </div>
            </div>
          </div>
          <div className="surface rounded">
            <div className="border-b border-ui-700 flex items-center gap-2 justify-between h-11 px-2 bg-gradient-to-b from-ui-700 to-ui-800">
              <div className="flex items-center gap-2 w-24">
                <span className="icon icon-film" />
                <span className="text-sm">
                  {selectedClipsLength} / {Clips.length}
                </span>
              </div>
              <div className="form-toggle form-sm text-sm text-ui-300">
                <input
                  type="checkbox"
                  name="notification"
                  id="showOnlySelected"
                  onChange={(event) =>
                    setShowOnlySelected(event.target.checked)
                  }
                />
                <label htmlFor="showOnlySelected">
                  <i className="form-icon" /> Show selected clips only
                </label>
              </div>
              <button
                type="button"
                className="button button-sm button-secondary"
              >
                <span className="icon icon-circle-caret-right" />
                <span>Play selected clips</span>
              </button>
            </div>
            <div className="relative flex justify-start z-0 overflow-x-auto scrollbar-desktop scroll-smooth py-2 pl-2 bg-ui-850">
              <ul className="w-full inline-flex gap-2 items-stretch justify-start child:shrink-0 px-2 xl:px-0 perspective mx-auto ">
                {Clips.map((item, itemIndex) => (
                  <Clip
                    key={itemIndex}
                    item={item}
                    onLoad={handleLoad}
                    onSelect={handleSelect}
                    showOnlySelected={showOnlySelected}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* for demo purposes only */}
        {prototype.showDemo && (
          <section className="fixed z-[9999] bottom-4 left-4 surface-ui-500 rounded shadow-md p-4 pr-16 text-sm text-ui-100 flex flex-col items-start">
            <div className="absolute top-1 right-1">
              <button
                type="button"
                className="button button-sm button-secondary button-close"
                onClick={() => prototype.setShowDemo(!prototype.showDemo)}
              >
                <span className="icon icon-e-remove" />
              </button>
            </div>
            <div className="form-group pl-4">
              <div className="form-xs form-toggle">
                <input
                  type="checkbox"
                  name="feed"
                  id="feed-premium"
                  defaultChecked={prototype.isPremium}
                  onClick={() => prototype.togglePremium()}
                />
                <label htmlFor="feed-premium">Premium state</label>
              </div>
            </div>
          </section>
        )}
      </Structure>
    </>
  );
}
