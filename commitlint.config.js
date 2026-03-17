export default {
  extends: ['@commitlint/config-conventional'],

  rules: {
    // allowed commit types
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],

    // type formatting
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],

    // scope (optional but if used must be lower-case)
    'scope-empty': [0],
    'scope-case': [2, 'always', 'lower-case'],

    // subject rules
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
  },
};
