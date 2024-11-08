import { create } from "zustand";
import { reelprev } from "../utils/assets";



const useReel = create((set) => ({
  isPlaying: true,
  isMuted: true,
  source: reelprev,
  onPause: () => set({ isPlaying: false }),
  onPlay: () => set({ isPlaying: true }),
  onMute: () => set({ isMuted: true }),
  onUnmute: () => set({ isMuted: false }),
}))

export default useReel;