/*
 * This file defines all of the app's global style variables
 */

export default {
  // Dark color scheme
  $darkBackground: '#1C1D31', // Used for backgrounds with other Views on top (no white text/icons directly on this color)
  $focusAreaDarker: '#2F3050', // Used for areas with text/icons directly on it (e.g. side bar or a search bar)
  $focusAreaLighter: '#3A3B61', // Used for areas with text/icons directly on it (e.g. top bar and focused areas)
  $focusAreaDarkerTranslucent: 'rgba(47,48,80,0.9)', // A translucent version of $focusAreaLighter
  $white: '#F2F6F5', // Off-white text/icons/graphics
  $greyWhite: '#74749C', // Less important text/icons/graphics (somewhat darker than $white)
  $green: '#50D862', // Green text/icons/graphics
  $red: '#F43181', // Red text/icons/graphics (can also use with low opacity on map)
  $yellow: '#D8AC50', // Yellow text/icons/graphics
  $lightBorder: '#363758', // Used on all borders
  // Other properties
  $appBoldWeight: '600' // Used for any bold text
};
