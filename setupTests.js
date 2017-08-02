import 'jest-enzyme'

// eslint-disable-next-line
console.error = jest.fn((error) => {
  throw new Error(`console.error used in test\nmessage: ${ error }`);
});

// eslint-disable-next-line
console.warn = jest.fn((warning) => {
  throw new Error(`console.warn used in test\nmessage: ${ warning }`);
});
