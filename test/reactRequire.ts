const RESET_MODULE_EXCEPTIONS = [
  "react",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockActualRegistry: any = {};

RESET_MODULE_EXCEPTIONS.forEach(moduleName => {
  jest.doMock(moduleName, () => {
    if (!mockActualRegistry[moduleName]) {
      mockActualRegistry[moduleName] = jest.requireActual(moduleName);
    }
    return mockActualRegistry[moduleName];
  });
});