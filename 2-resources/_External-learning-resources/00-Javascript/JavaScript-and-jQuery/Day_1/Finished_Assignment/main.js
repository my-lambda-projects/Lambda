function sentence1(state, adjective1, noun1) {
  return (
    "Super Man Paul Revere was born in Boston, " +
    state +
    ", in 1735. His father taught him to work with metals, and he soon became a " +
    adjective1 +
    " " +
    noun1
  );
}

/**
 * MAD LIB FUNCTION
 *  - A function that replaces normal words in a normal
 *    story, with normal words from a user (that's us),
 *    and returns a string with a story that is anything
 *    but normal!
 */
function madLibPaulRevere(
  adjective1,
  adverb1,
  maleCeleb,
  nationality,
  noun1,
  noun2,
  noun3,
  noun4,
  noun5,
  place1,
  pluralNoun1,
  state,
  typeOfLiquid
) {
  return `
    ${sentence1(state, adjective1, noun1)}. He was 
    a soldier in the French and ${nationality} War
    and was at the famous Boston ${noun2} Party when
    Americans dressed as Indians dumped tons of 
    ${typeOfLiquid} into the ocean. 
    On April 18, 1775, Paul Revere waited in 
    ${place1} for a signal light from a church
    tower. The signal was to be one if by ${noun3},
    two if by ${noun4}. 
  When he got the message, he mounted his faithful
  ${noun5} and rode off ${adverb1}. On the way, he
  kept yelling, "The ${pluralNoun1} are coming! The
  ${pluralNoun1} are coming! This was the beginning
  of the American War for Independence from King ${maleCeleb}. 
  `;
}

var theStory = madLibPaulRevere(
  "wonderful",
  "silently",
  "Tom Cruise",
  "Canadian",
  "submarine",
  "footnote",
  "tiger",
  "panther",
  "thumb",
  "Outback Steak House",
  "penquins",
  "Florida",
  "Coca-Cola"
);

console.log(theStory);
