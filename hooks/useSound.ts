import { useCallback, useRef } from 'react';

export const useSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const initAudio = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume().catch(() => {});
    }
    return audioContextRef.current;
  }, []);

  const playTone = useCallback((freq: number, type: OscillatorType, duration: number, vol: number = 0.05) => {
    const ctx = initAudio();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      
      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Ignore audio errors (e.g. if user hasn't interacted yet)
    }
  }, [initAudio]);

  const playHover = useCallback(() => {
    // High tech chirp
    playTone(1200, 'sine', 0.05, 0.02);
    setTimeout(() => playTone(1800, 'sine', 0.05, 0.01), 30);
  }, [playTone]);

  const playClick = useCallback(() => {
    // Heavy confirm sound
    playTone(400, 'square', 0.1, 0.05);
    setTimeout(() => playTone(200, 'sawtooth', 0.15, 0.05), 20);
  }, [playTone]);

  const playError = useCallback(() => {
    playTone(150, 'sawtooth', 0.3, 0.1);
    setTimeout(() => playTone(100, 'sawtooth', 0.3, 0.1), 50);
  }, [playTone]);

  return { playHover, playClick, playError, initAudio };
};