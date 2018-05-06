function shout(string) {
  return string.toUpperCase()
  console.log(shout.toUpperCase)
}

function whisper(string) {
  return string.toLowerCase()
  console.log(whisper.toLowerCase())
}

function sayHiToGrandma('hello') {
  if ('hello' === 'hello'.toUpperCase()) {
    return "YES INDEED!"
  } else if ('hello'.toLowerCase()) {
    return "I can't hear you!"
  } else {
    return `"I love you, Grandma."`
  }