
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Ilony.github.io/2.merfoldko/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/2.merfoldko"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23772, hash: 'cdcf55a7177321d014e310c01b27e2f12aa5827c5fa6b527947dd0ed087fd1ea', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17346, hash: '987681f43aa6c2226898593963bc6591d3cc4dbde28e0ea747fb29d925bba7a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 123184, hash: '0cf76616d92832be5eba93f844928f71878e794644d222fbfb971f0a72887e5e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
