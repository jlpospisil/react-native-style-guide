// Make react native throw errors so they can be tested using expect(...).toThrowError(...)
console.error = (message) => { throw new Error(message); };
console.warn = console.error;
