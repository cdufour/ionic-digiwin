const generate_token = (len) => {
  const charset = ["a", "b", "c", "!", "%", "p", "L", "m", "8", "0", "3"];
  let token = "";

  for (let i=0; i<len; i++) {
    let rand_index = Math.floor(Math.random() * charset.length)
    token += charset[rand_index]
  }

  return token

}

module.exports = { generate_token }