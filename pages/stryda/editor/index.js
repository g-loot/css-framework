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

const Track = ({
  trackData,
  isPlaying,
  isPlayingID,
  progress,
  playPauseTrack,
  selectedTrackID,
  selectTrack,
}) => {
  const { id, artist, name, duration } = trackData;
  return (
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
  );
};

const Playlist = () => {
  const initialTracks = [
    {
      id: 1,
      name: "Ace-High",
      artist: "Splasher!",
      duration: "3:45",
      url: "ES_Ace-High_-_Splasher.mp3",
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
  },
  {
    id: 2,
    isSelected: false,
    isAIFavored: false,
    duration: 4,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-02",
  },
  {
    id: 3,
    isSelected: false,
    isAIFavored: true,
    duration: 4,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-03",
  },
  {
    id: 4,
    isSelected: true,
    isAIFavored: true,
    duration: 4,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-04",
  },
  {
    id: 5,
    isSelected: false,
    isAIFavored: false,
    duration: 4,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-05",
  },
  {
    id: 6,
    isSelected: false,
    isAIFavored: true,
    duration: 4,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-06",
  },
  {
    id: 7,
    isSelected: false,
    isAIFavored: true,
    duration: 10,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-07",
  },
  {
    id: 8,
    isSelected: false,
    isAIFavored: false,
    duration: 11,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-08",
  },
  {
    id: 9,
    isSelected: false,
    isAIFavored: true,
    duration: 10,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-09",
  },
  {
    id: 10,
    isSelected: false,
    isAIFavored: false,
    duration: 8,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-10",
  },
  {
    id: 11,
    isSelected: false,
    isAIFavored: true,
    duration: 4,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-11",
  },
  {
    id: 12,
    isSelected: false,
    isAIFavored: true,
    duration: 10,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-12",
  },
  {
    id: 13,
    isSelected: false,
    isAIFavored: true,
    duration: 10,
    url: "https://res.cloudinary.com/gloot/video/upload/v1697464202/Stryda/demo/game%20footage/raze-split-13",
  },
];

const Clip = ({
  item,
  showOnlySelected,
  isActive,
  clipPlayingPercent,
  onLoad,
  onSelect,
  hasError,
  selectedClipsLength,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const prototype = usePrototypeData();
  const [isSelected, setIsSelected] = useState(item.isSelected);
  const [video, setVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [maxClips, setMaxClips] = useState(10);

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

  useEffect(() => {
    setVideo(document.getElementById(`video_${item.id}`));
  }, [item.id]);

  useEffect(() => {
    if (prototype.isPremium) {
      setMaxClips(20);
    } else {
      setMaxClips(3);
    }
  }, [prototype]);

  const handleSelection = () => {
    onSelect(item.id);
    setIsSelected(!isSelected);
  };

  function handleVideoPlay() {
    if (!isSelected && selectedClipsLength >= maxClips) {
    } else {
      setIsPlaying(true);
      onLoad(item.id, true);
    }
  }

  function handleVideoPause() {
    if (!isSelected && selectedClipsLength >= maxClips) {
    } else {
      setIsPlaying(false);
      onLoad(item.id, false);
    }
  }

  function formatDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.round(duration % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

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
      </div>
      <button
        type="button"
        onMouseOver={handleVideoPlay}
        onMouseOut={handleVideoPause}
        disabled={hasError || selectedClipsLength >= maxClips}
        onClick={isPlaying ? handleVideoPause : handleVideoPlay}
        className={`w-full aspect-video bg-ui-850 relative grid place-content-center`}
      >
        <div
          className={`absolute z-20 inset-0 grid place-content-center transition-all overflow-hidden pointer-events-none ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
          }`}
        >
          {isPlaying ? (
            <span className="icon icon-btn-pause text-mono-100 text-5xl" />
          ) : (
            <span className="icon icon-btn-play text-mono-100 text-5xl" />
          )}
        </div>
        {isActive && clipPlayingPercent && (
          <i className="absolute z-10 inset-0 pointer-events-none">
            <i
              className="absolute inset-0 bg-ui-900/75 transition-all"
              style={{ width: `${clipPlayingPercent}%` }}
            />
          </i>
        )}
        {selectedClipsLength >= maxClips && !isSelected && (
          <div className="absolute z-30 inset-2 grid place-content-center transition-all overflow-hidden text-ui-100 text-sm leading-tight text-center p-2 rounded bg-ui-600/90 backdrop-blur-sm animate-scale-in">
            <span>
              You have reached the {maxClips} clips limit. Increase the limit
              with{" "}
              <Link href={`/prototype/premium${prototype.getURLparams()}`}>
                <a className="link link-premium">Premium</a>
              </Link>
            </span>
          </div>
        )}

        {!hasError && (
          <>
            {/* <img
            className={`${
              !isSelected ? "opacity-50 grayscale mix-blend-lighten" : ""
            }`}
            src={`${item.url}.jpg`}
            alt=""
          /> */}
            <video
              autoPlay={false}
              controls={false}
              playsInline
              muted
              width="100%"
              height="auto"
              className="relative z-0 w-full pointer-events-none"
              id={`video_${item.id}`}
              src={`${item.url}.mp4`}
            />
          </>
        )}
        {hasError && (
          <span className="icon icon-warning-sign text-3xl text-ui-300" />
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
  const [clipPlayingPercent, setClipPlayingPercent] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const mainVideoRef = useRef(0);
  const currentVideoIndex = useRef(1);
  const [hasError, setHasError] = useState(false);
  const [hasCorruptedFiles, setHasCorruptedFiles] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (clips) {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
      const firstSelectedClip = initialClips.find(
        (clip) => clip.isSelected === true
      );
      mainVideoRef.current.src = firstSelectedClip.url + ".mp4";
    }
  }, []);

  useEffect(() => {
    // console.log("Clips updated:", clips);
    setSelectedClipsLength(getSelectedClipsLength);
    setSelectedClipsDuration(getSelectedClipsDuration);
  }, [clips]);

  const handleLoad = (itemID, plays) => {
    // console.log("handleLoad", itemID, plays);
    setPlayAllHasStarted(false);
    currentVideoIndex.current = itemID;
    const currentClip = clips.find(
      (clip) => clip.id === currentVideoIndex.current
    );
    mainVideoRef.current.src = currentClip.url + ".mp4";
    setClipPlayingID(currentClip.id);
    if (plays) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
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

  const handleMainVideoEnded = () => {
    if (isPlaying && playAllHasStarted) {
      playNextVideo();
    }
  };

  const handleVideoTimeUpdate = () => {
    const video = mainVideoRef.current;
    if (video) {
      const currentTime = video.currentTime;
      const duration = video.duration;
      const widthPercentage = (currentTime / duration) * 100;
      //console.log(widthPercentage, duration, currentTime);
      setClipPlayingPercent(widthPercentage);
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

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

  return (
    <>
      <Structure title="Highlight Editor">
        {clips && (
          <section className="hidden lg:flex flex-col gap-4 my-4 max-w-xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-stretch gap-4">
              <div className="surface rounded flex-1">
                <div className="border-b border-ui-700 p-1 pl-3 pr-4 flex items-center justify-between text-sm h-11 bg-gradient-to-b from-ui-700 to-ui-800">
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
                <div className="relative aspect-video bg-ui-850 rounded-b overflow-hidden">
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
                    onTimeUpdate={handleVideoTimeUpdate}
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
                      <Playlist />
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
                  <span className="text-sm">
                    {hasCorruptedFiles ? (
                      <>0 / {clips.length} clip selected</>
                    ) : (
                      <>
                        {selectedClipsLength} / {clips.length} clip
                        {selectedClipsLength > 1 && <>s</>} selected
                      </>
                    )}
                  </span>
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
                <div className="flex items-center justify-center gap-2 w-40">
                  <span className="icon icon-clock" />
                  <span className="text-sm">
                    Total duration:{" "}
                    <b className="text-ui-100 font-bold">
                      {formatDuration(selectedClipsDuration)}
                    </b>
                  </span>
                </div>
              </div>
              <div
                className={`relative flex justify-start z-0 overflow-y-hidden scrollbar-desktop scroll-smooth py-2 pl-2 bg-ui-850 select-none ${
                  hasCorruptedFiles || hasError
                    ? "overflow-x-hidden"
                    : "overflow-x-auto"
                }`}
              >
                {hasCorruptedFiles && (
                  <div className="absolute z-40 inset-0 grid place-content-center gap-4 text-sm text-center bg-ui-850">
                    <span className="icon icon-warning-sign text-4xl text-ui-300" />
                    <p>Corrupted clip files, we could not load them.</p>
                  </div>
                )}
                {isLoading ? (
                  <ul className="w-full inline-flex gap-2 items-stretch justify-start child:shrink-0 px-2 xl:px-0">
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
                      <ul className={`inline-flex gap-2 items-stretch justify-start child:shrink-0 px-2 xl:px-0 perspective mx-auto ${hasCorruptedFiles ? "w-0 overflow-hidden" : "w-full"}`}>
                        {clips?.map((item, itemIndex) => (
                          <Clip
                            key={item.id}
                            item={item}
                            onLoad={handleLoad}
                            onSelect={handleSelect}
                            isActive={clipPlayingID === item.id && isPlaying}
                            clipPlayingPercent={clipPlayingPercent}
                            showOnlySelected={showOnlySelected}
                            hasError={hasError}
                            selectedClipsLength={selectedClipsLength}
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
                          isActive={clipPlayingID === item.id && isPlaying}
                          clipPlayingPercent={clipPlayingPercent}
                          showOnlySelected={showOnlySelected}
                          hasError={hasError}
                          selectedClipsLength={selectedClipsLength}
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
