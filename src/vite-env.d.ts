/// <reference types="vite/client" />

declare module '*.{png,jpg,svg}' {
  const value: string;
  export default value;
}