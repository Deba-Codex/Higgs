// src/global.d.ts
export {};

declare global {
  interface Window {
    JSROOT: any; // 'any' because JSROOT doesn't have official TypeScript types
  }
}
