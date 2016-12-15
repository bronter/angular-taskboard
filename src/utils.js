function spacialListSearch(v, nodes, axis="vertical") {
  const length = nodes.length;
  let first = 0;
  let last = length - 1;
  let found = false;
  let index;

  while (first <= last && !found) {
    index = Math.floor((first + last) / 2);

    let rekt = nodes[index].getBoundingClientRect();
    let upper, lower;
    if (axis === "vertical") {
      lower = rekt.top, upper = rekt.bottom;
    } else {
      lower = rekt.left, upper = rekt.right;
    }
    if (v >= lower) {
      if (v <= upper) {
        found = true;
      } else {
        first = index + 1;
      }
    } else {
      last = index - 1;
    }
  }

  return index;
}

export {
  spacialListSearch,
};
