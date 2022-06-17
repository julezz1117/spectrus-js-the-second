const noteFreqTable = { // eslint-disable-line no-unused-vars
  C0: 16.351,
  'C#0': 17.324,
  D0: 18.354,
  'D#0': 19.445,
  E0: 20.601,
  F0: 21.827,
  'F#0': 23.124,
  G0: 24.499,
  'G#0': 25.956,
  A0: 27.5,
  'A#0': 29.135,
  B0: 30.868,
  C1: 32.703,
  'C#1': 34.648,
  D1: 36.708,
  'D#1': 38.891,
  E1: 41.203,
  F1: 43.654,
  'F#1': 46.249,
  G1: 48.999,
  'G#1': 51.913,
  A1: 55,
  'A#1': 58.27,
  B1: 61.735,
  C2: 65.406,
  'C#2': 69.296,
  D2: 73.416,
  'D#2': 77.782,
  E2: 82.407,
  F2: 87.307,
  'F#2': 92.499,
  G2: 97.999,
  'G#2': 103.826,
  A2: 110,
  'A#2': 116.541,
  B2: 123.471,
  C3: 130.813,
  'C#3': 138.591,
  D3: 146.832,
  'D#3': 155.563,
  E3: 164.814,
  F3: 174.614,
  'F#3': 184.997,
  G3: 195.998,
  'G#3': 207.652,
  A3: 220,
  'A#3': 233.082,
  B3: 246.942,
  C4: 261.626,
  'C#4': 277.183,
  D4: 293.665,
  'D#4': 311.127,
  E4: 329.628,
  F4: 349.228,
  'F#4': 369.994,
  G4: 391.995,
  'G#4': 415.305,
  A4: 440,
  'A#4': 466.164,
  B4: 493.883,
  C5: 523.251,
  'C#5': 554.365,
  D5: 587.33,
  'D#5': 622.254,
  E5: 659.255,
  F5: 698.456,
  'F#5': 739.989,
  G5: 783.991,
  'G#5': 830.609,
  A5: 880,
  'A#5': 932.328,
  B5: 987.767,
  C6: 1046.502,
  'C#6': 1108.731,
  D6: 1174.659,
  'D#6': 1244.508,
  E6: 1318.51,
  F6: 1396.913,
  'F#6': 1479.978,
  G6: 1567.982,
  'G#6': 1661.219,
  A6: 1760,
  'A#6': 1864.655,
  B6: 1975.533,
  C7: 2093.005,
  'C#7': 2217.461,
  D7: 2349.318,
  'D#7': 2489.016,
  E7: 2637.021,
  F7: 2793.826,
  'F#7': 2959.955,
  G7: 3135.964,
  'G#7': 3322.438,
  A7: 3520,
  'A#7': 3729.31,
  B7: 3951.066,
  C8: 4186.009,
  'C#8': 4434.922,
  D8: 4698.636,
  'D#8': 4978.032,
  E8: 5274.042,
  F8: 5587.652,
  'F#8': 5919.91,
  G8: 6271.928,
  'G#8': 6644.876,
  A8: 7040,
  'A#8': 7458.62,
  B8: 7902.132,
  C9: 8372.018,
  'C#9': 8869.844,
  D9: 9397.272,
  'D#9': 9956.064,
  E9: 10548.084,
  F9: 11175.304,
  'F#9': 11839.82,
  G9: 12543.856,
  'G#9': 13289.752,
  A9: 14080,
  'A#9': 14917.24,
  B9: 15804.264,
};
function getNoteHz(note) { // eslint-disable-line no-unused-vars
  return noteFreqTable[note];
}
function lookupNote(hz) { // eslint-disable-line no-unused-vars
  const keys = Object.keys(noteFreqTable);

  // lowerBound < hz < upperBound
  let upperBound = null;
  let lowerBound = null;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const diff = keys[i] - hz;
    if (diff === 0) { // exactly the same
      return key;
    } if (diff > 0) { // key is higher than hz
      if (upperBound === null || noteFreqTable[upperBound] > noteFreqTable[key]) {
        upperBound = key; // reduce upper bound
      }
    } else if (diff < 0) { // key is lower than hz
      if (lowerBound === null || noteFreqTable[lowerBound] < noteFreqTable[key]) {
        lowerBound = key; // increase lower bound
      }
    }
  }

  if (upperBound === null || lowerBound === null || upperBound === lowerBound) {
    return false;
  }

  const upperError = Math.abs(hz - noteFreqTable[upperBound]);
  const lowerError = Math.abs(hz - noteFreqTable[lowerBound]);

  return upperError < lowerError ? upperBound : lowerBound;
}
