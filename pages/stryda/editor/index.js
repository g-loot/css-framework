import { useContext, useEffect, useState, useRef } from "react";
import Structure from "@/pages/stryda/components/Structure";
import { useRouter } from "next/router";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import GameIcon from "@/components/GameIcon/GameIcon";
import Tooltip from "@/components/Tooltip/Tooltip";
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { CSS } from "@dnd-kit/utilities";
import Link from "next/link";
import PremiumLogo from "@/components/PremiumLogo/PremiumLogo";

const Track = ({
  trackData,
  isPlaying,
  isPlayingID,
  progress,
  playPauseTrack,
  selectedTrackID,
  selectTrack,
  isWithButton,
  isFree,
}) => {
  const { id, artist, name, duration } = trackData;
  return (
    <>
      {isWithButton ? (
        <li className="item py-0">
          <div className="item-image pl-0 relative">
            <div
              className={`form-radio ${
                !isFree ? "pointer-events-none opacity-0" : ""
              }`}
            >
              <input
                type="radio"
                name="trackSelection"
                id={`trackSelection_${id}`}
                defaultChecked={id === 1}
              />
              <label htmlFor={`trackSelection_${id}`} />
            </div>
            {!isFree && (
              <div className="grid place-items-center absolute inset-0 w-full h-full">
                <Tooltip
                  tooltip={
                    <span>
                      Select this song with{" "}
                      <Link href={`/prototype/premium`}>
                        <a className="link link-premium">Premium</a>
                      </Link>
                    </span>
                  }
                >
                  <span className="icon icon-crown text-lg text-premium-300" />
                </Tooltip>
              </div>
            )}
          </div>
          <button
            onClick={() => playPauseTrack(trackData)}
            className="flex-1 flex gap-2 items-center relative p-2 pl-1 [&>div]:relative [&>div]:z-10 overflow-hidden cursor-pointer"
          >
            <div className="item-body">
              <div
                className={`item-title text-sm truncate ${
                  isPlaying && isPlayingID === id && id !== selectedTrackID
                    ? "!text-ui-100"
                    : "text-ui-300"
                } ${id === selectedTrackID ? "!text-main" : ""}`}
              >
                {name}
              </div>
              <div
                className={`item-description text-xs truncate ${
                  isPlaying && isPlayingID === id && id !== selectedTrackID
                    ? "!text-ui-100"
                    : "text-ui-400"
                } ${id === selectedTrackID ? "!text-main" : ""}`}
              >
                {artist}
              </div>
            </div>
            <div className="relative z-10 item-actions">
              <div className="text-xs text-ui-300 text-right">{duration}</div>
            </div>
            {isPlaying && isPlayingID === id && progress > 0 && (
              <i className="absolute z-0 inset-0 pointer-events-none bg-ui-200/5 animate-scale-in-x-left">
                <i
                  className="absolute inset-0 bg-mono-100/20"
                  style={{ width: `${progress}%` }}
                />
              </i>
            )}
          </button>

          <div className="item-actions">
            <button
              className="button button-tertiary button-sm rounded-full"
              onClick={() => playPauseTrack(trackData)}
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
      ) : (
        <button
          type="button"
          onClick={() => selectTrack(trackData)}
          onMouseEnter={() => playPauseTrack(trackData)}
          onMouseLeave={() => playPauseTrack(trackData)}
          className="item item-interactive"
        >
          <div className="relative z-10 item-image pl-0">
            <div className="form-radio">
              <input
                type="radio"
                name="trackSelection"
                id={`trackSelection_${id}`}
                readOnly
                checked={id === selectedTrackID}
              />
              <label htmlFor={`trackSelection_${id}`} />
            </div>
          </div>
          <div className="relative z-10 item-body pl-1">
            <div
              className={`item-title text-sm truncate ${
                isPlaying && isPlayingID === id && id !== selectedTrackID
                  ? "!text-ui-100"
                  : "text-ui-300"
              } ${id === selectedTrackID ? "!text-main" : ""}`}
            >
              {name}
            </div>
            <div
              className={`item-description text-xs truncate ${
                isPlaying && isPlayingID === id && id !== selectedTrackID
                  ? "!text-ui-100"
                  : "text-ui-400"
              } ${id === selectedTrackID ? "!text-main" : ""}`}
            >
              {artist}
            </div>
          </div>
          <div className="relative z-10 item-actions">
            <div className="text-xs text-ui-300 text-right">{duration}</div>
          </div>
          <div className="relative z-10 item-actions overflow-hidden">
            <img
              src="https://res.cloudinary.com/gloot/image/upload/v1697790771/Stryda/icons/svg/bars-anim.svg"
              alt=""
              className={`h-4 w-4 transition ease-out ${
                isPlaying && isPlayingID === id
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            />
            {/* <div className="button button-tertiary button-sm rounded-full">
              <span
                className={`icon ${
                  isPlaying && isPlayingID === id
                    ? "icon-button-pause"
                    : "icon-triangle-right"
                }`}
              />
            </div> */}
          </div>
          {isPlaying && isPlayingID === id && progress > 0 && (
            <i className="absolute z-0 inset-0 pointer-events-none bg-ui-200/5 animate-scale-in-x-left">
              <i
                className="absolute inset-0 bg-mono-100/20"
                style={{ width: `${progress}%` }}
              />
            </i>
          )}
        </button>
      )}
    </>
  );
};

const Playlist = (props) => {
  const initialTracks = [
    {
      id: 1,
      name: "Ace-High",
      artist: "Splasher!",
      duration: "3:45",
      url: "ES_Ace-High_-_Splasher.mp3",
      isFree: true,
    },
    {
      id: 2,
      name: "Adventure Awaits",
      artist: "Dream Cave",
      duration: "4:15",
      url: "ES_Adventure_Awaits_-_Dream_Cave.mp3",
    },
    {
      id: 3,
      name: "Application",
      artist: "Autohacker",
      duration: "5:12",
      url: "ES_Application_-_Autohacker.mp3",
    },
    {
      id: 4,
      name: "Balls of Steel",
      artist: "Balls of Steel",
      duration: "3:09",
      url: "ES_Balls_of_Steel_-_Rymdklang_Soundtracks.mp3",
    },
    {
      id: 5,
      name: "Bam Bam",
      artist: "Bambi Haze",
      duration: "3:16",
      url: "ES_Bam_Bam_-_Bambi_Haze.mp3",
    },
    {
      id: 6,
      name: "Bam Bam (Instrumental Version)",
      artist: "Bambi Haze",
      duration: "2:12",
      url: "ES_Bam_Bam_Instrumental_Version_-_Bambi_Haze.mp3",
    },
    {
      id: 7,
      name: "Beast Mode",
      artist: "Nbhd Nick",
      duration: "2:45",
      url: "ES_Beast_Mode_-_Nbhd_Nick.mp3",
    },
    {
      id: 8,
      name: "Big Ballin",
      artist: "Cushy",
      duration: "3:22",
      url: "ES_Big_Ballin_-_Cushy.mp3",
    },
    {
      id: 9,
      name: "Bird Flex",
      artist: "Bonkers Beat Club",
      duration: "3:43",
      url: "ES_Bird_Flex_-_Bonkers_Beat_Club.mp3",
    },
    {
      id: 10,
      name: "Blade Running",
      artist: "Cushy",
      duration: "2:33",
      url: "ES_Blade_Running_-_Cushy.mp3",
    },
    {
      id: 11,
      name: "Bop Bop Bop",
      artist: "Bonkers Beat Club",
      duration: "4:01",
      url: "ES_Bop_Bop_Bop_-_Bonkers_Beat_Club.mp3",
    },
    {
      id: 12,
      name: "Break Your Chains (Instrumental Version)",
      artist: "Happy Republic",
      duration: "3:54",
      url: "ES_Break_Your_Chains_Instrumental_Version_-_Happy_Republic.mp3",
    },
  ];

  const audioRef = useRef(null);
  const [selectedTrackID, setSelectedTrackID] = useState(1);
  const [playingTrack, setPlayingTrack] = useState(initialTracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const audioElement = audioRef.current;
      const currentProgress =
        (audioElement.currentTime / audioElement.duration) * 100;
      setProgress(currentProgress);
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener("timeupdate", updateProgress);
        }
      };
    }
  }, []);

  const selectTrack = (track) => {
    setSelectedTrackID(track.id);
  };

  useEffect(() => {
    if (isPlaying) {
      props.onTrackIsPlaying();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (props.mainVideoIsPlaying) {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  }, [props.mainVideoIsPlaying]);

  const playPauseTrack = (track) => {
    if (playingTrack.name === track.name) {
      if (isPlaying) {
        setIsPlaying(false);
        audioRef.current.pause();
      } else {
        setIsPlaying(true);
        audioRef.current.play();
      }
    } else {
      setPlayingTrack(track);
      setIsPlaying(true);
      audioRef.current.src =
        "https://res.cloudinary.com/gloot/video/upload/v1697718160/Stryda/demo/music/Epidemic%20Sound/" +
        track.url;
      audioRef.current.play();
    }
  };

  return (
    <>
      <div className="absolute inset-0 overflow-y-auto scrollbar-desktop">
        {initialTracks.map((track) => (
          <Track
            key={track.id}
            id={track.id}
            trackData={track}
            isPlaying={isPlaying}
            isPlayingID={playingTrack.id}
            progress={progress}
            selectedTrackID={selectedTrackID}
            playPauseTrack={playPauseTrack}
            selectTrack={selectTrack}
            isWithButton={props.isWithButton}
            isFree={track.isFree}
          />
        ))}
      </div>
      <audio ref={audioRef}>
        {playingTrack && (
          <source
            src={`https://res.cloudinary.com/gloot/video/upload/v1697718160/Stryda/demo/music/Epidemic%20Sound/${playingTrack.url}`}
            type="audio/mpeg"
          />
        )}
      </audio>
    </>
  );
};

const initialClips = [
  {
    id: 1,
    isSelected: true,
    isAIFavored: true,
    duration: 4,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-01",
    spriteUrl:
      "https://res.cloudinary.com/gloot/image/upload/v1698070980/Stryda/demo/sprites/01.png",
  },
  {
    id: 2,
    isSelected: false,
    isAIFavored: false,
    duration: 4,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-02",
    spriteUrl:
      "https://res.cloudinary.com/gloot/image/upload/v1698070980/Stryda/demo/sprites/02.png",
  },
  {
    id: 3,
    isSelected: false,
    isAIFavored: true,
    duration: 4,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-03",
    spriteUrl:
      "https://res.cloudinary.com/gloot/image/upload/v1698070980/Stryda/demo/sprites/03.png",
  },
  {
    id: 4,
    isSelected: true,
    isAIFavored: true,
    duration: 4,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-04",
    spriteUrl:
      "https://res.cloudinary.com/gloot/image/upload/v1698070980/Stryda/demo/sprites/04.png",
  },
  {
    id: 5,
    isSelected: false,
    isAIFavored: false,
    duration: 4,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-05",
    spriteUrl:
      "https://res.cloudinary.com/gloot/image/upload/v1698070980/Stryda/demo/sprites/05.png",
  },
  {
    id: 6,
    isSelected: false,
    isAIFavored: true,
    duration: 4,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-06",
    spriteUrl:
      "https://res.cloudinary.com/gloot/image/upload/v1698070980/Stryda/demo/sprites/06.png",
  },
  {
    id: 7,
    isSelected: false,
    isAIFavored: true,
    duration: 10,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-07",
    spriteUrl:
      "https://res.cloudinary.com/gloot/image/upload/v1698070980/Stryda/demo/sprites/07.png",
  },
  {
    id: 8,
    isSelected: false,
    isAIFavored: false,
    duration: 11,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-08",
    spriteUrl:
      "https://res.cloudinary.com/gloot/image/upload/v1698070980/Stryda/demo/sprites/08.png",
  },
  {
    id: 9,
    isSelected: false,
    isAIFavored: true,
    duration: 10,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-09",
    spriteUrl:
      "https://res.cloudinary.com/gloot/image/upload/v1698070980/Stryda/demo/sprites/09.png",
  },
  {
    id: 10,
    isSelected: false,
    isAIFavored: false,
    duration: 8,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-10",
    spriteUrl:
      "https://res.cloudinary.com/gloot/image/upload/v1698070980/Stryda/demo/sprites/10.png",
  },
  {
    id: 11,
    isSelected: false,
    isAIFavored: true,
    duration: 4,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-11",
    spriteUrl:
      "https://res.cloudinary.com/gloot/image/upload/v1698070980/Stryda/demo/sprites/11.png",
  },
  {
    id: 12,
    isSelected: false,
    isAIFavored: true,
    duration: 10,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-12",
    spriteUrl:
      "https://res.cloudinary.com/gloot/image/upload/v1698070980/Stryda/demo/sprites/12.png",
  },
  {
    id: 13,
    isSelected: false,
    isAIFavored: true,
    duration: 10,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-13",
    spriteUrl:
      "https://res.cloudinary.com/gloot/image/upload/v1698070980/Stryda/demo/sprites/13.png",
  },
];

function SpriteScrubber({ spriteUrl, totalFrames, isPlaying }) {
  const [selectedFrame, setSelectedFrame] = useState(0);
  const spriteRef = useRef(null);

  const handleMouseMove = (e) => {
    if (isPlaying) return;

    const rect = spriteRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const widthPerFrame = rect.width / totalFrames;
    let currentFrame = Math.floor(x / widthPerFrame);
    currentFrame = Math.max(0, Math.min(currentFrame, totalFrames - 1));

    setSelectedFrame(currentFrame);
  };

  return (
    <div
      className="w-[170px] h-[96px] overflow-hidden relative cursor-pointer"
      onMouseMove={handleMouseMove}
      ref={spriteRef}
    >
      <div
        className="w-full h-full bg-cover"
        style={{
          backgroundImage: `url(${spriteUrl})`,
          backgroundPositionX: selectedFrame ? -selectedFrame * 100 + "%" : 0,
        }}
      />
    </div>
  );
}

const Clip = ({
  item,
  showOnlySelected,
  isActive,
  onLoad,
  onSelect,
  hasError,
  selectedClipsLength,
  isPlaying,
  mainVideoEnded,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const prototype = usePrototypeData();
  const [isSelected, setIsSelected] = useState(item.isSelected);
  const [maxClips, setMaxClips] = useState(10);

  useEffect(() => {
    if (prototype.isPremium) {
      setMaxClips(20);
    } else {
      setMaxClips(3);
    }
  }, [prototype]);

  useEffect(() => {
    if (!hasError) {
      setIsSelected(item.isSelected);
    }
  }, [item.isSelected]);

  useEffect(() => {
    if (!hasError) {
      setIsSelected(item.isSelected);
    }
  }, [isSelected]);

  const handleSelection = () => {
    onSelect(item.id);
    setIsSelected(!isSelected);
  };

  function handleVideoPlay() {
    onLoad(item.id, true);
  }

  useEffect(() => {
    console.log("reset", mainVideoEnded);
    if (mainVideoEnded && isActive) {
      resetAnimation();
    }
  }, [mainVideoEnded]);

  function handleVideoPause() {
    onLoad(item.id, false);
  }

  function formatDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.round(duration % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  const [animationOn, setAnimationOn] = useState(true);

  function resetAnimation() {
    setAnimationOn(false);
    setTimeout(() => {
      setAnimationOn(true);
    }, 100);
  }

  const isClipPlaying = isActive && isPlaying;

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={`relative text-0 rounded-2 overflow-hidden duration-500 ease-[cubic-bezier(.85,0,.2,1)] transition-[width] h-40 flex flex-col ${
        isSelected ? "!border-main surface-ui-600" : "surface"
      } ${isActive ? "!bg-ui-500 text-ui-100" : "text-ui-300"} ${
        showOnlySelected && !isSelected
          ? "w-2 child:!opacity-0 pointer-events-none"
          : "w-44"
      } ${hasError ? "pointer-events-none" : ""}
      `}
    >
      <div
        className={`flex items-center justify-between px-1 h-7 ${
          !isSelected ? "opacity-50" : ""
        }`}
      >
        {item.isAIFavored ? (
          <Tooltip
            placement="top"
            tooltip={
              <div className="max-w-xs text-sm text-center leading-tight">
                AI favored this clip
              </div>
            }
          >
            <button type="button" className="text-0">
              <span className="icon icon-robot text-lg" />
            </button>
          </Tooltip>
        ) : (
          <div />
        )}
        <div className="flex items-center gap-1 text-xs">
          <span className="icon icon-clock" />
          <span>{formatDuration(item.duration)}</span>
        </div>
        <div className="w-4 flex justify-center items-center">
          {!isSelected && selectedClipsLength >= maxClips ? (
            <Tooltip
              tooltip={
                <span>
                  You have reached the {maxClips} clips limit. Increase the
                  limit with{" "}
                  <Link href={`/prototype/premium${prototype.getURLparams()}`}>
                    <a className="link link-premium">Premium</a>
                  </Link>
                </span>
              }
            >
              <span className="icon icon-crown text-lg text-premium-300" />
            </Tooltip>
          ) : (
            <div className="form-checkbox form-sm">
              <input
                type="checkbox"
                name={`item_${item.id}`}
                id={`item_${item.id}`}
                checked={isSelected}
                disabled={!isSelected && selectedClipsLength >= maxClips}
                onChange={handleSelection}
              />
              <label htmlFor={`item_${item.id}`} />
            </div>
          )}
        </div>
      </div>
      <button
        type="button"
        disabled={hasError}
        onClick={isClipPlaying ? handleVideoPause : handleVideoPlay}
        className={`w-full aspect-video bg-ui-850 relative grid place-content-center`}
      >
        <div
          className={`absolute z-20 inset-0 grid place-content-center transition-all overflow-hidden ${
            isActive
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-1 pointer-events-none"
          }`}
        >
          {isClipPlaying ? (
            <span className="icon icon-btn-pause text-mono-100 text-5xl" />
          ) : (
            <span className="icon icon-btn-play text-mono-100 text-5xl" />
          )}
        </div>
        <i
          className={`absolute z-10 inset-0 bg-ui-900/75 ${
            isActive && animationOn
              ? "animate-scale-in-x-left"
              : "opacity-0 scale-x-0 pointer-events-none"
          }`}
          style={{
            animationDuration: isActive ? `${item.duration}s` : "0s",
            animationPlayState: isClipPlaying ? "running" : "paused",
            animationTimingFunction: "linear",
            animationFillMode: "forwards",
          }}
        />
        {hasError ? (
          <span className="icon icon-warning-sign text-3xl text-ui-300" />
        ) : (
          <SpriteScrubber
            spriteUrl={item.spriteUrl}
            totalFrames={item.duration * 4}
            isPlaying={isClipPlaying}
          />
        )}
      </button>
      <button
        type="button"
        {...attributes}
        {...listeners}
        className="flex-1 w-full flex text-lg cursor-grab items-center justify-center hover:text-ui-800 hover:bg-mono-100 active:text-ui-800 active:bg-mono-100"
      >
        <span className="icon icon-handle" />
      </button>
    </li>
  );
};

export default function HighlightEditor() {
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [clips, setClips] = useState(initialClips);
  const [isPlaying, setIsPlaying] = useState(false);
  const [clipPlayingID, setClipPlayingID] = useState(0);
  const [selectedClipsLength, setSelectedClipsLength] = useState();
  const [selectedClipsDuration, setSelectedClipsDuration] = useState();
  const [playAllHasStarted, setPlayAllHasStarted] = useState(false);
  const [showOnlySelected, setShowOnlySelected] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const mainVideoRef = useRef();
  const currentVideoIndex = useRef(1);
  const [hasError, setHasError] = useState(false);
  const [hasCorruptedFiles, setHasCorruptedFiles] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [maxClips, setMaxClips] = useState(10);
  const [isWithButton, setIsWithButton] = useState(true);

  useEffect(() => {
    if (prototype.isPremium) {
      setMaxClips(20);
    } else {
      setMaxClips(3);
    }
  }, [prototype]);

  useEffect(() => {
    if (clips) {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
      const firstSelectedClip = initialClips.find(
        (clip) => clip.isSelected === true
      );
      setClipPlayingID(firstSelectedClip.id);
      mainVideoRef.current.src = firstSelectedClip.url + ".mp4";
    }
  }, []);

  useEffect(() => {
    setSelectedClipsLength(getSelectedClipsLength);
    setSelectedClipsDuration(getSelectedClipsDuration);
  }, [clips]);

  const handleLoad = (itemID, plays) => {
    setPlayAllHasStarted(false);
    if (plays) {
      setIsPlaying(true);
      mainVideoRef.current.play();
    } else {
      setIsPlaying(false);
      mainVideoRef.current.pause();
    }
    if (itemID !== clipPlayingID) {
      currentVideoIndex.current = itemID;
      const currentClip = clips.find(
        (clip) => clip.id === currentVideoIndex.current
      );
      mainVideoRef.current.src = currentClip.url + ".mp4";
      setClipPlayingID(currentClip.id);
    }
  };

  const handleSelect = (id) => {
    const updatedClips = clips.map((item) =>
      item.id === id ? { ...item, isSelected: !item.isSelected } : item
    );
    setClips(updatedClips);
  };

  const getSelectedClipsLength = () => {
    return Math.round(clips?.filter((item) => item.isSelected).length);
  };

  const getSelectedClipsDuration = () => {
    const totalDuration = clips
      ?.filter((clip) => clip.isSelected)
      .reduce((acc, clip) => acc + clip.duration, 0);
    return totalDuration;
  };

  const handleMainVideoLoaded = () => {
    if (isPlaying) {
      mainVideoRef.current.play();
    } else {
      mainVideoRef.current.pause();
    }
  };

  const handlePlayPauseAllVideos = () => {
    if (playAllHasStarted) {
      if (isPlaying) {
        mainVideoRef.current.pause();
        setIsPlaying(false);
      } else {
        mainVideoRef.current.play();
        setIsPlaying(true);
      }
    } else {
      currentVideoIndex.current = 0;
      playNextVideo();
      setIsPlaying(true);
      setPlayAllHasStarted(true);
    }
  };

  const playNextVideo = () => {
    const filteredClips = clips.filter((clip) => clip.isSelected === true);
    const currentClip = filteredClips[currentVideoIndex.current];
    if (currentClip && currentVideoIndex.current < clips.length) {
      setClipPlayingID(currentClip.id);
      mainVideoRef.current.src = currentClip.url + ".mp4";
      mainVideoRef.current.play();
      currentVideoIndex.current++;
    } else {
      setIsPlaying(false);
      setPlayAllHasStarted(false);
    }
  };

  const [mainVideoEnded, setMainVideoEnded] = useState(false);

  const handleMainVideoEnded = () => {
    setMainVideoEnded(true);

    if (isPlaying && playAllHasStarted) {
      playNextVideo();
    }
    if (!playAllHasStarted) {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (mainVideoEnded) {
      setMainVideoEnded(false);
    }
  }, [mainVideoEnded]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setActiveId(null);
      setClips((clips) => {
        const oldIndex = clips.findIndex((clip) => clip.id === active.id);
        const newIndex = clips.findIndex((clip) => clip.id === over.id);
        const newItemsArray = arrayMove(clips, oldIndex, newIndex);
        return newItemsArray;
      });
    }
  }

  function formatDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.round(duration % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  const [showMainPlayerPauseButton, setShowMainPlayerPauseButton] =
    useState(false);

  const timeout = useRef(null);

  const handleShowMainPlayerPauseOnHover = () => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      if (isPlaying) {
        setShowMainPlayerPauseButton(false);
      }
    }, 1000);
  };

  useEffect(() => {
    handleShowMainPlayerPauseOnHover();
  }, [isPlaying]);

  function handleOnMouseMoveMainVideo() {
    setShowMainPlayerPauseButton(true);

    if (isPlaying) {
      handleShowMainPlayerPauseOnHover();
    }
  }

  function handleOnMouseLeaveMainVideo() {
    setShowMainPlayerPauseButton(false);
  }

  function handleOnClickMainVideo() {
    toggleMainVideo();
  }

  function handleOnTrackIsPlaying() {
    if (isPlaying) {
      setIsPlaying(false);
      mainVideoRef.current.pause();
    }
  }

  function toggleMainVideo() {
    if (isPlaying) {
      setIsPlaying(false);
      mainVideoRef.current.pause();
    } else {
      setIsPlaying(true);
      mainVideoRef.current.play();
    }
  }

  return (
    <>
      <Structure title="Highlight Editor">
        {clips && (
          <section className="hidden lg:flex flex-col gap-4 my-4 max-w-xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-stretch gap-4">
              <div className="surface rounded flex-1">
                <div className="border-b border-ui-700 p-1 pl-1.5 pr-4 flex items-center justify-between text-sm h-11 bg-gradient-to-b from-ui-700 to-ui-800">
                  <div className="flex items-center gap-1">
                    <GameIcon id={1} />
                    <span>Today at 10:30am</span>
                  </div>
                  <div className="flex items-center gap-3 divide-x divide-ui-400/20">
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
                    <div className="pl-3">Fracture</div>
                    <div className="pl-3">Unrated</div>
                    <div className="pl-3">
                      Recorded clips:{" "}
                      <b className="text-ui-100">{clips.length}</b>
                    </div>
                  </div>
                </div>
                <div
                  onMouseMove={handleOnMouseMoveMainVideo}
                  onMouseLeave={handleOnMouseLeaveMainVideo}
                  onClick={handleOnClickMainVideo}
                  className="relative aspect-video bg-ui-850 rounded-b overflow-hidden cursor-pointer"
                >
                  {isLoading && (
                    <div className="absolute z-40 inset-0 grid place-content-center gap-4 text-sm text-center bg-ui-850">
                      <div role="loading" className="loader loader-sm">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <p>
                        Loading clips, this might take a few minutes.
                        <br />
                        Grab a glass of water and stay hydrated while you wait.
                      </p>
                    </div>
                  )}
                  {hasError && (
                    <div className="absolute z-40 inset-0 grid place-content-center gap-4 text-sm text-center bg-ui-850">
                      <span className="icon icon-warning-sign text-4xl text-ui-300" />
                      <p>
                        Video does not load.
                        <br />
                        Try to reload the app.
                      </p>
                    </div>
                  )}
                  {!prototype.isPremium && selectedClipsLength >= maxClips && (
                    <div className="absolute z-40 top-0 inset-x-0 bg-ui-850/95 px-4 py-3 flex items-center gap-4 justify-around animate-fade-in">
                      <Link href={`/stryda/premium${prototype.getURLparams()}`}>
                        <PremiumLogo
                          src="https://res.cloudinary.com/gloot/image/upload/v1684315905/Stryda/logos/stryda-premium-logo-main-white.svg"
                          width="auto"
                          height="auto"
                          className="w-36 interactive"
                        />
                      </Link>
                      <p className="text-sm leading-tight">
                        Add more clips to your highlight and get a lot more
                        features by becoming{" "}
                        <Link
                          href={`/stryda/premium${prototype.getURLparams()}`}
                        >
                          <span className="link link-premium">Premium</span>
                        </Link>
                      </p>
                      <Link href={`/stryda/premium${prototype.getURLparams()}`}>
                        <button
                          type="button"
                          className="button button-premium is-shining"
                        >
                          <span>Get Premium</span>
                          <span className="icon icon-crown" />
                        </button>
                      </Link>
                    </div>
                  )}
                  <div
                    className={`absolute z-20 inset-0 grid place-content-center transition-all overflow-hidden pointer-events-none ${
                      showMainPlayerPauseButton
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-1"
                    }`}
                  >
                    {isPlaying ? (
                      <span className="icon icon-btn-pause text-mono-100 text-5xl" />
                    ) : (
                      <span className="icon icon-btn-play text-mono-100 text-5xl" />
                    )}
                  </div>
                  <video
                    //controls
                    ref={mainVideoRef}
                    //loop
                    muted
                    width="100%"
                    height="auto"
                    className="w-full"
                    onLoadedMetadata={handleMainVideoLoaded}
                    onEnded={handleMainVideoEnded}
                    // src={selectedClip.url}
                  />
                </div>
              </div>
              <div className="surface rounded w-80 flex flex-col">
                <div className="flex-1 relative flex flex-col">
                  <ul className="tabs tabs-secondary border-b border-ui-700 bg-gradient-to-b from-ui-700 to-ui-800">
                    <li>
                      <a
                        className="is-active"
                        onClick={() => setIsWithButton(!isWithButton)}
                      >
                        <span>Music</span>
                      </a>
                    </li>
                  </ul>
                  <div className="relative flex-1">
                    {hasError && (
                      <div className="absolute z-40 inset-0 grid place-content-center gap-4 text-sm text-center bg-ui-850">
                        <span className="icon icon-warning-sign text-4xl text-ui-300" />
                        <p>
                          Could not load music.
                          <br />
                          Try to reload the app.
                        </p>
                      </div>
                    )}
                    {isLoading ? (
                      <ul className="is-loading">
                        <li className="item">
                          <div className="item-body">
                            <div className="item-title">Loading</div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="item-body">
                            <div className="item-title">Loading</div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="item-body">
                            <div className="item-title">Loading</div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="item-body">
                            <div className="item-title">Loading</div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="item-body">
                            <div className="item-title">Loading</div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="item-body">
                            <div className="item-title">Loading</div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="item-body">
                            <div className="item-title">Loading</div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="item-body">
                            <div className="item-title">Loading</div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="item-body">
                            <div className="item-title">Loading</div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="item-body">
                            <div className="item-title">Loading</div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="item-body">
                            <div className="item-title">Loading</div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="item-body">
                            <div className="item-title">Loading</div>
                          </div>
                        </li>
                      </ul>
                    ) : (
                      <Playlist
                        isWithButton={isWithButton}
                        onTrackIsPlaying={handleOnTrackIsPlaying}
                        mainVideoIsPlaying={isPlaying}
                      />
                    )}
                  </div>
                </div>
                <div className="p-2 text-center space-y-2 border-t border-ui-700 rounded-b bg-gradient-to-t from-ui-700 to-ui-800">
                  <button
                    type="button"
                    className="button button-primary w-full"
                    disabled={
                      selectedClipsLength === 0 ||
                      isLoading ||
                      hasError ||
                      hasCorruptedFiles
                    }
                  >
                    <span>Create highlight</span>
                  </button>
                  <span
                    className={`text-xs leading-none ${
                      isLoading ? "opacity-0" : ""
                    }`}
                  >
                    Estimated time to render:{" "}
                    <b className="text-ui-100">
                      {formatDuration(
                        selectedClipsDuration * (selectedClipsLength * 22)
                      )}
                    </b>
                  </span>
                </div>
              </div>
            </div>
            <div className="surface rounded">
              <div className="border-b border-ui-700 flex items-center gap-2 justify-between h-11 px-2 bg-gradient-to-b from-ui-700 to-ui-800">
                <button
                  type="button"
                  className="button button-sm button-secondary w-56"
                  onClick={handlePlayPauseAllVideos}
                  disabled={
                    selectedClipsLength === 0 ||
                    isLoading ||
                    hasError ||
                    hasCorruptedFiles
                  }
                >
                  {isPlaying && playAllHasStarted ? (
                    <>
                      <span className="icon icon-btn-pause" />
                      <span>Pause selected clips</span>
                    </>
                  ) : (
                    <>
                      <span className="icon icon-btn-play" />
                      <span>Play selected clips</span>
                    </>
                  )}
                </button>
                <div className="flex items-center gap-2 w-40">
                  <span className="icon icon-film" />
                  {!prototype.isPremium ? (
                    <Tooltip
                      placement="top"
                      tooltip={
                        <>
                          {selectedClipsLength === maxClips && (
                            <span>
                              You have reached the {maxClips} clips limit.
                            </span>
                          )}
                          <span>
                            Increase the limit with{" "}
                            <Link
                              href={`/prototype/premium${prototype.getURLparams()}`}
                            >
                              <a className="link link-premium">Premium</a>
                            </Link>
                          </span>
                        </>
                      }
                    >
                      <span className="text-sm">
                        {hasCorruptedFiles ? (
                          <>0 / {clips.length} clip selected</>
                        ) : (
                          <>
                            {selectedClipsLength} /{" "}
                            {prototype.isPremium ? clips.length : <>3</>} clip
                            {selectedClipsLength > 1 && <>s</>} selected
                          </>
                        )}
                      </span>
                    </Tooltip>
                  ) : (
                    <span className="text-sm">
                      {hasCorruptedFiles ? (
                        <>0 / {clips.length} clip selected</>
                      ) : (
                        <>
                          {selectedClipsLength} /{" "}
                          {prototype.isPremium ? clips.length : <>3</>} clip
                          {selectedClipsLength > 1 && <>s</>} selected
                        </>
                      )}
                    </span>
                  )}
                </div>
                <div className="form-toggle form-sm text-sm">
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
                {/* <div className="flex items-center justify-center gap-2 w-40">
                  <span className="icon icon-clock" />
                  <span className="text-sm">
                    Total duration:{" "}
                    <b className="text-ui-100 font-bold">
                      {formatDuration(selectedClipsDuration)}
                    </b>
                  </span>
                </div> */}
              </div>
              <div
                className={`relative flex justify-start z-0 overflow-hidden bg-ui-850 select-none`}
              >
                {hasCorruptedFiles && (
                  <div className="absolute z-40 inset-0 grid place-content-center gap-4 text-sm text-center bg-ui-850">
                    <span className="icon icon-warning-sign text-4xl text-ui-300" />
                    <p>Corrupted clip files, we could not load them.</p>
                  </div>
                )}
                {isLoading ? (
                  <ul
                    className={`p-2 inline-flex gap-2 items-stretch justify-start child:shrink-0 first:ml-2 last:mr-2 px-2 xl:px-0 perspective mx-auto ${
                      hasCorruptedFiles ? "w-0 overflow-hidden" : "w-full"
                    }`}
                  >
                    <li className="h-40 w-44 rounded-2 surface is-loading" />
                    <li className="h-40 w-44 rounded-2 surface is-loading" />
                    <li className="h-40 w-44 rounded-2 surface is-loading" />
                    <li className="h-40 w-44 rounded-2 surface is-loading" />
                    <li className="h-40 w-44 rounded-2 surface is-loading" />
                    <li className="h-40 w-44 rounded-2 surface is-loading" />
                    <li className="h-40 w-44 rounded-2 surface is-loading" />
                    <li className="h-40 w-44 rounded-2 surface is-loading" />
                  </ul>
                ) : (
                  <DndContext
                    sensors={sensors}
                    modifiers={[restrictToHorizontalAxis]}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                  >
                    <SortableContext
                      items={clips}
                      strategy={horizontalListSortingStrategy}
                    >
                      <ul
                        style={{
                          height: "100%",
                          overflow: "auto",
                        }}
                        className={`p-2 inline-flex gap-2 items-stretch justify-start child:shrink-0 first:ml-2 last:mr-2 px-2 xl:px-0 perspective mx-auto ${
                          hasCorruptedFiles ? "w-0 overflow-hidden" : "w-full"
                        }`}
                      >
                        {clips?.map((item, itemIndex) => (
                          <Clip
                            key={item.id}
                            item={item}
                            onLoad={handleLoad}
                            onSelect={handleSelect}
                            isActive={clipPlayingID === item.id}
                            showOnlySelected={showOnlySelected}
                            hasError={hasError}
                            selectedClipsLength={selectedClipsLength}
                            isPlaying={isPlaying}
                            mainVideoEnded={mainVideoEnded}
                          />
                        ))}
                      </ul>
                    </SortableContext>
                    <DragOverlay
                      dropAnimation={{
                        duration: 0,
                        easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
                      }}
                    >
                      {activeId ? (
                        <Clip
                          key={activeId}
                          item={clips.findIndex((clip) => clip.id === activeId)}
                          onLoad={handleLoad}
                          onSelect={handleSelect}
                          isActive={clipPlayingID === item.id}
                          showOnlySelected={showOnlySelected}
                          hasError={hasError}
                          selectedClipsLength={selectedClipsLength}
                          isPlaying={isPlaying}
                          mainVideoEnded={mainVideoEnded}
                        />
                      ) : null}
                    </DragOverlay>
                  </DndContext>
                )}
              </div>
            </div>
          </section>
        )}

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
            <div>
              <h3 className="text-sm">Global states:</h3>
              <div className="form-group pl-4 mt-2">
                <div className="form-xs form-toggle">
                  <input
                    type="checkbox"
                    name="state"
                    id="state-loading"
                    onChange={() => setIsLoading(!isLoading)}
                  />
                  <label htmlFor="state-loading">Loading state</label>
                </div>
                <div className="form-xs form-toggle">
                  <input
                    type="checkbox"
                    name="state"
                    id="state-premium"
                    checked={prototype.isPremium}
                    onChange={() => prototype.togglePremium()}
                  />
                  <label htmlFor="state-premium">Premium state</label>
                </div>
                <div className="form-xs form-toggle">
                  <input
                    type="checkbox"
                    name="state"
                    id="state-error"
                    onChange={() => setHasError(!hasError)}
                  />
                  <label htmlFor="state-error">Error state</label>
                </div>
                <div className="form-xs form-toggle">
                  <input
                    type="checkbox"
                    name="state"
                    id="state-corruptedfiles"
                    onChange={() => setHasCorruptedFiles(!hasCorruptedFiles)}
                  />
                  <label htmlFor="state-corruptedfiles">
                    Corrupted file state
                  </label>
                </div>
              </div>
            </div>
          </section>
        )}
      </Structure>
    </>
  );
}
