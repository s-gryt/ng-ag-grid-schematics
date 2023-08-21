module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (message) =>
      /chore\(release\): \d+\.\d+\.\d+ \[skip ci\]\n\n.+/.test(message), // Ignore semantic-release commit messages
  ],
};
