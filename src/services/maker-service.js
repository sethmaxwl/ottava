import Tone from 'tone'
const synth = new Tone.FMSynth().toMaster()
synth.triggerAttackRelease('G4', 0.5, 1)