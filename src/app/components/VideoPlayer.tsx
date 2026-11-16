
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Maximize,
  Minimize,
  Pause,
  Play,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
} from "lucide-react";

type VideoPlayerProps = {
  src: string;
  poster?: string;
  title?: string;
};

export default function VideoPlayer({
  src,
  poster,
  title = "Video",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasError, setHasError] = useState(false);

  const togglePlay = useCallback(async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
    }
  }, []);

  const skip = (seconds: number) => {
    const video = videoRef.current;

    if (!video || !Number.isFinite(video.duration)) return;

    video.currentTime = Math.max(
      0,
      Math.min(video.currentTime + seconds, video.duration)
    );
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVolumeChange = (value: number) => {
    const video = videoRef.current;

    if (!video) return;

    const nextVolume = Math.max(0, Math.min(1, value));

    video.volume = nextVolume;
    video.muted = nextVolume === 0;

    setVolume(nextVolume);
    setIsMuted(video.muted);
  };

  const handleSeek = (value: number) => {
    const video = videoRef.current;

    if (!video || !Number.isFinite(video.duration)) return;

    const nextTime = Math.max(0, Math.min(value, video.duration));

    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const toggleFullscreen = async () => {
    const player = playerRef.current;

    if (!player) return;

    try {
      if (document.fullscreenElement === player) {
        await document.exitFullscreen();
      } else if (!document.fullscreenElement) {
        await player.requestFullscreen();
      }
    } catch {
      // Fullscreen may be unavailable or denied by the browser.
    }
  };

  const formatTime = (time: number) => {
    if (!Number.isFinite(time) || time < 0) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const updateDuration = () => {
      setDuration(
        Number.isFinite(video.duration) ? video.duration : 0
      );
    };

    const updateTime = () => {
      setCurrentTime(video.currentTime);
    };

    const updateVolume = () => {
      setVolume(video.volume);
      setIsMuted(video.muted);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
      setHasError(true);
      setIsPlaying(false);
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === playerRef.current);
    };

    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("durationchange", updateDuration);
    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("volumechange", updateVolume);
    video.addEventListener("error", handleError);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // Handle metadata that loaded before the effect was attached.
    updateDuration();
    updateTime();
    updateVolume();

    return () => {
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("durationchange", updateDuration);
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("volumechange", updateVolume);
      video.removeEventListener("error", handleError);
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, [src]);

  return (
    <div
      ref={playerRef}
      className="group relative overflow-hidden bg-black text-white"
    >
      <video
        key={src}
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        className="block max-h-[80vh] w-full object-contain"
        aria-label={title}
        onClick={togglePlay}
      />

      {hasError && (
        <div
          role="alert"
          className="absolute inset-0 flex items-center justify-center bg-black/80 p-6 text-center"
        >
          <p className="text-sm text-white/80">
            This video couldn't be loaded. Please try again later.
          </p>
        </div>
      )}

      {!hasError && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent px-3 pb-3 pt-12 opacity-100 transition-opacity md:px-4 md:pb-4 md:pt-16 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
          {/* Progress */}
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={Math.min(currentTime, duration || 0)}
            onChange={(event) =>
              handleSeek(Number(event.target.value))
            }
            className="mb-3 w-full cursor-pointer accent-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Video progress"
            aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
          />

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Play / Pause */}
            <button
              type="button"
              onClick={togglePlay}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause size={18} aria-hidden="true" />
              ) : (
                <Play size={18} aria-hidden="true" />
              )}
            </button>

            {/* Skip backward */}
            <button
              type="button"
              onClick={() => skip(-10)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Go back 10 seconds"
            >
              <RotateCcw size={18} aria-hidden="true" />
            </button>

            {/* Skip forward */}
            <button
              type="button"
              onClick={() => skip(10)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Go forward 10 seconds"
            >
              <RotateCw size={18} aria-hidden="true" />
            </button>

            {/* Mute */}
            <button
              type="button"
              onClick={toggleMute}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted || volume === 0 ? (
                <VolumeX size={18} aria-hidden="true" />
              ) : (
                <Volume2 size={18} aria-hidden="true" />
              )}
            </button>

            {/* Volume */}
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={isMuted ? 0 : volume}
              onChange={(event) =>
                handleVolumeChange(Number(event.target.value))
              }
              className="hidden w-16 cursor-pointer accent-white sm:block sm:w-20"
              aria-label="Volume"
              aria-valuetext={`${Math.round((isMuted ? 0 : volume) * 100)}%`}
            />

            {/* Playback time */}
            <span className="ml-1 whitespace-nowrap font-mono text-[10px] tracking-wide text-white/80 sm:text-[11px]">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            {/* Fullscreen */}
            <button
              type="button"
              onClick={toggleFullscreen}
              className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"
              aria-label={
                isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
              }
            >
              {isFullscreen ? (
                <Minimize size={18} aria-hidden="true" />
              ) : (
                <Maximize size={18} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
