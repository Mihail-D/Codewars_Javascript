function areYouPlayingBanjo(name) {
  let firstLetter = name.charAt(0).toUpperCase();
  return (
    (firstLetter === "R" ? name + " plays" : name + " does not play") + " banjo"
  );
}

console.log(areYouPlayingBanjo("Mick"));
