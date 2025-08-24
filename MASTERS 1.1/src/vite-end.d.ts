/// <reference types="vite/client" />
declare const GITHUB_RUNTIME_PERMANENT_NAME: string
declare const BASE_KV_SERVICE_URL: string

// DEV ESCAPE START
interface ImportMetaEnv {
  readonly VITE_SHOW_DEV_ESCAPE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
// DEV ESCAPE END