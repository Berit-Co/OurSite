export default {
  "*.{js,jsx}": ["prettier --write", "eslint --fix"],
  "*.{json,css,md}": ["prettier --write"],
  "*.css": ["stylelint --fix"],
}
