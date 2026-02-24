/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme') // Required to extend default fonts

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // Add Lora and Inter fonts
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans], // Make Inter the default sans-serif
        'serif': ['Lora', ...defaultTheme.fontFamily.serif], // Add Lora as serif option
        // 'sans': ['Geist Variable', ...defaultTheme.fontFamily.sans], // Make Geist Sans the default sans-serif
        // 'serif': ['Geist Variable', ...defaultTheme.fontFamily.serif], // Temporarily use Geist Sans for serif too
      },
      // Ensure your colour palette is defined
      colors: {
        'kw-deep-blue': '#112B3A',
        'kw-light-beige': '#F4EFEE',
        'kw-mid-beige': '#CDBBB9',
        'kw-teal': '#49747F',
        'kw-orange': '#E34B26',
        'kw-dark-blue': '#003447',
        'kw-dark-red': '#441111',

        // === Gradient 01 Intermediate Colours ===
        'kw-g1-platinum': '#EAE2E1',    // from --platinum
        'kw-g1-timberwolf-1': '#E1D5D4',// from --timberwolf
        'kw-g1-timberwolf-2': '#D7C8C6',// from --timberwolf-2
        // ============================================

         // === Gradient 02 Intermediate Colours ===
         'kw-g2-silver': '#B7AFAF',   // from --silver
         'kw-g2-cadet-1': '#A1A3A6',  // from --cadet-gray
         'kw-g2-cadet-2': '#8B989C',  // from --cadet-gray-2
         'kw-g2-slate-1': '#758C92',  // from --slate-gray
         'kw-g2-slate-2': '#5F8089',  // from --slate-gray-2
         // ============================================

          // === Gradient 03 Intermediate Colours ===
        'kw-g3-tea-rose': '#D0ABA4',  // from --tea-rose-red
        'kw-g3-rosy-brown': '#D39B8F',// from --rosy-brown
        'kw-g3-coral-pink': '#D68B7A',// from --coral-pink
        'kw-g3-sienna-1': '#DA7B65', // from --burnt-sienna
        'kw-g3-sienna-2': '#DD6B50', // from --burnt-sienna-2
        'kw-g3-cinnabar': '#E05B3B',  // from --cinnabar
        // ============================================

        // === Gradient 04 Intermediate Colours ===
        // G4 Main (Teal -> Dark Blue)
        'kw-g4a-paynes-2': '#3D6976',
        'kw-g4a-slate': '#315F6C',
        'kw-g4a-midnight-1': '#255463',
        'kw-g4a-midnight-2': '#18495A',
        'kw-g4a-midnight-3': '#0C3F50',

        // G4 Subset "Light Blues"
        'kw-g4b-slate-light': '#6A868E',
        'kw-g4b-french-gray': '#ACA9AB',

        // G4 Subset "Dark Blue -> Reddish"
        'kw-g4c-gunmetal-1': '#0B2E3E',
        'kw-g4c-gunmetal-2': '#172835',
        'kw-g4c-raisin': '#22232C',
        'kw-g4c-licorice': '#2D1D23',
        'kw-g4c-bean': '#39171A',

        // === Gradient 05 Intermediate Colours ===
        'kw-g5-rust': '#BB3D21',     // from --rust
        'kw-g5-sienna': '#942E1C',   // from --sienna
        'kw-g5-falu-red': '#6C2016', // from --falu-red
        // ============================================
      }
    },
  },
  plugins: [],
}