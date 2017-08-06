import _ from "lodash";

const MAX_ENTRIES = 21;
export const filterEntries = (entries, type) => {
  let data = _.filter(
    _.sortBy(entries, "title"),
    o => o.releaseYear >= 2010 && o.programType === type
  );
  if (_.size(data) < MAX_ENTRIES) {
    return data;
  }
  return _.take(data, MAX_ENTRIES);
};
