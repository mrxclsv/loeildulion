import { useState } from "react"

const useMedia = () => {

  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  
  return {isMuted, setIsMuted, isPlaying, setIsPlaying}
}

export default useMedia