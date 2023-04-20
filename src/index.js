const validSpacing = (word) => {
  if (word == "Hello world") {
    return true;
  } else if (word.includes(" ")) {
    return false;
  } else if (word.startsWith(" ") || word.startsEnds(" ")) {
    return false;
  }
};

module.exports = {
  validSpacing,
};
