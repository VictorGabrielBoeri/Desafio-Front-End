module.exports = {
  overrides: [
    {
      files: ['src/bootstrap.d.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};