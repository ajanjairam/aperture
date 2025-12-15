export interface PlayOptions {
  id: string;
  name: string;
  type: "Movie" | "Series" | "Episode" | "TvChannel";
  resumePositionTicks?: number;
  selectedVersion?: any; // Keeping generic for now to avoid deep type dependencies immediately
}

export function usePlayback() {
  const play = (options: PlayOptions) => {
    console.log("usePlayback play called with:", options);
  };

  return {
    play,
  };
}
