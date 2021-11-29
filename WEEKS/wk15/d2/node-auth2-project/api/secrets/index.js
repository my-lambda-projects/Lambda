/**
  Fix this module so other modules can require JWT_SECRET into them.
  Use the || operator to fall back to the string "shh" to handle the situation
  where the process.env does not have JWT_SECRET.

  If no fallback is provided, TESTS WON'T WORK and other
  developers cloning this repo won't be able to run the project as is.
 */
module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'shh'
}
