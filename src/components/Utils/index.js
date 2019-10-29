export const setSearchUrlFriendly = (string) => {
  return string.replace(/[^a-z0-9À-ÿ]/gi, "-").toLowerCase()
}

export const getStringFromUrlFriendly = (string) => {
  return string.replace(/-/gi, " ").toLowerCase()
}

export const onlyAlphanumericAndSpace = (string) => {
  return string.replace(/[^a-z0-9À-ÿ\s]/gi, "")
}
