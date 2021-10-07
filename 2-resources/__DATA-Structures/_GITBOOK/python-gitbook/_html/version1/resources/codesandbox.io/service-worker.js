'use strict';
var precacheConfig = [
    [
      'https://codesandbox.io/0.babel-transpiler.62fa3392.worker.js',
      '648abe12b87aba62969eb9bb2350fbab',
    ],
    [
      'https://codesandbox.io/0.client-ext-host-worker.2d18ddc5.worker.js',
      '64e4c3aca85379b3b3084e398a570e31',
    ],
    [
      'https://codesandbox.io/0.container-ext-host-worker.0a59ca23.worker.js',
      'f2ef165e52ecadaaabf7801b8a03924c',
    ],
    [
      'https://codesandbox.io/0.monaco-linter.0c347b7e.worker.js',
      '4046d3a061cdef6405d37aec94713c07',
    ],
    [
      'https://codesandbox.io/0.sass-transpiler.44b2cc35.worker.js',
      'c2cabdf74b55ac242bf500e92cf3600b',
    ],
    [
      'https://codesandbox.io/a4ee82d260bdf9a0007e.worker.js',
      'bf4039503a5bfb119a168b4105819037',
    ],
    ['https://codesandbox.io/app.html', '2bfd01e986189016fd22ac3f06146d1b'],
    [
      'https://codesandbox.io/babel-plugin-jsx-pragmatic.babel-transpiler.62fa3392.worker.js',
      'b18b55c742b73000d1a0694aca668eba',
    ],
    [
      'https://codesandbox.io/babel-plugin-transform-vue-jsx.babel-transpiler.62fa3392.worker.js',
      'ed440c1ed318d158dfbd0b73b240f48f',
    ],
    [
      'https://codesandbox.io/babel-transpiler.62fa3392.worker.js',
      '09eb9258b5299ff43ee4d046ab969e08',
    ],
    [
      'https://codesandbox.io/client-ext-host-worker.2d18ddc5.worker.js',
      '938c3b5c57c4e59ccde7557762203787',
    ],
    [
      'https://codesandbox.io/coffee-transpiler.0038bf56.worker.js',
      '783addc1289574f5b471d3b3356a3c35',
    ],
    [
      'https://codesandbox.io/container-ext-host-worker.0a59ca23.worker.js',
      '1c94a6a9dd8802c1954c8de52c20c233',
    ],
    [
      'https://codesandbox.io/dynamic-worker.be3db817.worker.js',
      'e312fe1341dc051160366ed2bc724c3a',
    ],
    ['https://codesandbox.io/embed.html', 'db8b728d3d20c53fef5f3b7b33f110a7'],
    [
      'https://codesandbox.io/file-manifest.json',
      '6838ce3f5e4e81c23bab1b4b9f30f991',
    ],
    ['https://codesandbox.io/frame.html', '321312b92f5a097d8196e67594f3690b'],
    [
      'https://codesandbox.io/less-transpiler.f2a629b1.worker.js',
      'b3d39faea53f7e8ec264620fe9dc5cbc',
    ],
    [
      'https://codesandbox.io/monaco-linter.0c347b7e.worker.js',
      'a372b0141ea1f27363e465deee6a7a05',
    ],
    [
      'https://codesandbox.io/monaco-typings-ata.29241338.worker.js',
      'b805e0f3ea20e95aea8cbca013d9fbc4',
    ],
    [
      'https://codesandbox.io/parcel-html-transpiler.9dea5c28.worker.js',
      'f6079ceb0653cac53bb2d4114c6edad7',
    ],
    [
      'https://codesandbox.io/public/sse-hooks/sse-hooks.f648b14c15c640a14a557113a991cb8d.js',
      '523a971c96c4fb67e4b80157ff11ee5c',
    ],
    [
      'https://codesandbox.io/pug-transpiler.65f086c1.worker.js',
      'eac2c1c3833381f584642c9e66e47f05',
    ],
    [
      'https://codesandbox.io/sass-transpiler.44b2cc35.worker.js',
      '24e702d41892135b03827a24e474782a',
    ],
    [
      'https://codesandbox.io/static/css/app.10caa73c.css',
      'a719e21eb928b2cce22c9f102aa4f976',
    ],
    [
      'https://codesandbox.io/static/css/common.0cbbfe89.chunk.css',
      '37816a0a80793432903b40880b4279b5',
    ],
    [
      'https://codesandbox.io/static/css/default~app~embed.ef8b5814.chunk.css',
      'ffc26d234e6d4018335f7e6e59a5eba0',
    ],
    [
      'https://codesandbox.io/static/css/page-patron.6e3f7a49.chunk.css',
      '9e01f7ad5a60e93a808b3ee123893ae7',
    ],
    [
      'https://codesandbox.io/static/css/vendors~app.ba9a586c.chunk.css',
      '55cdf55ff03d673cec2333d0cfce9109',
    ],
    [
      'https://codesandbox.io/static/css/vendors~codemirror-editor.3dbb558c.chunk.css',
      '859180592adcc7615adf33c0b8b691ab',
    ],
    [
      'https://codesandbox.io/static/css/vendors~page-curator.eba1b1a2.chunk.css',
      '8040c47b5716a4f82148be4a6336e79a',
    ],
    [
      'https://codesandbox.io/static/css/vendors~page-patron.fba73482.chunk.css',
      '1de6c646eabd114c6786b854824bde7b',
    ],
    [
      'https://codesandbox.io/static/css/vendors~page-search.e8438856.chunk.css',
      'bb6e3df8467f2eeed958e94d85de9c37',
    ],
    [
      'https://codesandbox.io/static/js/0.84205e20b.chunk.js',
      '79c5bb89408a9d7ba659d66a84e56e60',
    ],
    [
      'https://codesandbox.io/static/js/1.93e4af66f.chunk.js',
      '88cbf49ec61baed26943ffce81ecac4f',
    ],
    [
      'https://codesandbox.io/static/js/10.eb127aac8.chunk.js',
      'b9af7b72904d043894498162e56bcd02',
    ],
    [
      'https://codesandbox.io/static/js/11.4374a9299.chunk.js',
      'a95e5ecb04b8947d4138596777a6fad7',
    ],
    [
      'https://codesandbox.io/static/js/12.3b1e9e7b1.chunk.js',
      '7088d33895bad3746d8e21a8d5594113',
    ],
    [
      'https://codesandbox.io/static/js/13.b98274d44.chunk.js',
      'ae15540c7831fc4d2fc50f8e4bdbd94d',
    ],
    [
      'https://codesandbox.io/static/js/2.345146d6e.chunk.js',
      'db4b952239c7490900c0b4ee44bbbfc4',
    ],
    [
      'https://codesandbox.io/static/js/3.d2a9045e4.chunk.js',
      '5940befe57bfd4ad4df16eefbeff96d7',
    ],
    [
      'https://codesandbox.io/static/js/4.02e0b1291.chunk.js',
      '1ff864864bce6c1f78d539c9b3b816f3',
    ],
    [
      'https://codesandbox.io/static/js/5.7f773faf4.chunk.js',
      '59fdb66d56ce816372166a163446ea28',
    ],
    [
      'https://codesandbox.io/static/js/6.b8eccfcdb.chunk.js',
      'd9a8d26a0643cca08308bf7d49575632',
    ],
    [
      'https://codesandbox.io/static/js/7.a1fbf49ba.chunk.js',
      '7b407b9f137e2cf0768b28cb8dbab00b',
    ],
    [
      'https://codesandbox.io/static/js/8.f4f9d3622.chunk.js',
      'd24e01ed043352bebbc0228db0ebc284',
    ],
    [
      'https://codesandbox.io/static/js/9.41b6595bc.chunk.js',
      'b39ae30137b5be6416f8986e476a0590',
    ],
    [
      'https://codesandbox.io/static/js/airtable.2cbb2b997.chunk.js',
      '46f930f3be0b6d5e5f456fa9de7dc158',
    ],
    [
      'https://codesandbox.io/static/js/app.559894261.js',
      'b44149315dcb5fe562708bb82c574282',
    ],
    [
      'https://codesandbox.io/static/js/banner.be879265d.js',
      'da94ebddfa54539635e6dc804b2885b8',
    ],
    [
      'https://codesandbox.io/static/js/codemirror-editor.0b3edc5df.chunk.js',
      'ae665be53d8b4ae2fd553329b3d247c8',
    ],
    [
      'https://codesandbox.io/static/js/codemirror-handlebars.94cf611fe.chunk.js',
      '7a6dedbede6e6234bb2ccc01337706e7',
    ],
    [
      'https://codesandbox.io/static/js/codemirror-html.1afeb1761.chunk.js',
      'c2cdd8765be6fc60d3d29e6b830618ae',
    ],
    [
      'https://codesandbox.io/static/js/codemirror-sass.01ed3bc7f.chunk.js',
      '0b2885f5b7ef618a9f5e0b9d0d9a9c4b',
    ],
    [
      'https://codesandbox.io/static/js/codemirror-tern.f3943ae24.chunk.js',
      '2aa0efe402a280789e964c4866c014ce',
    ],
    [
      'https://codesandbox.io/static/js/common-sandbox.01ff5f8d0.chunk.js',
      'be80c0adab4a414867fea27631a4b19e',
    ],
    [
      'https://codesandbox.io/static/js/common.9517b6661.chunk.js',
      '87f4030e32e358792d32fc24f42eb6bf',
    ],
    [
      'https://codesandbox.io/static/js/create-react-app-typescript-zip.5caa7ae28.chunk.js',
      'ae258a7b9a8c663799afd720f7f21ddd',
    ],
    [
      'https://codesandbox.io/static/js/create-react-app-zip.013544ad8.chunk.js',
      'd898af0dbc73d5d56a768e44067af213',
    ],
    [
      'https://codesandbox.io/static/js/css-loader.0eb3a6e9a.chunk.js',
      '6457b3cc2cfd1c4bb76ec13d7f73fc8a',
    ],
    [
      'https://codesandbox.io/static/js/css-modules-loader-core.68a918417.chunk.js',
      '079a48d8ad54ca3080d2eeb19ca089a4',
    ],
    [
      'https://codesandbox.io/static/js/default~app~embed.f7fb0cb3e.chunk.js',
      '42ebc3a92d1d0b0587769a65f0dd82c9',
    ],
    [
      'https://codesandbox.io/static/js/default~app~embed~sandbox.87dc08a00.chunk.js',
      '40a0b132f37d9aaeca02513e30a03448',
    ],
    [
      'https://codesandbox.io/static/js/default~app~monaco-editor.5a5d506e2.chunk.js',
      '2a88244a71c2ccd858425c177c2d2a85',
    ],
    [
      'https://codesandbox.io/static/js/embed.a11727b1f.js',
      'c8eaaac67916b0d346de45ae557387e8',
    ],
    [
      'https://codesandbox.io/static/js/export-to-github.77efe6502.chunk.js',
      '62c839b31c0d58d57105266633f8d074',
    ],
    [
      'https://codesandbox.io/static/js/feedback.c69a728b2.chunk.js',
      'bc689bb5a8e08233b1b73e36f1984594',
    ],
    [
      'https://codesandbox.io/static/js/full-zip.97cfb7c4b.chunk.js',
      '1c48a505241ae9232aa0208819203fcf',
    ],
    [
      'https://codesandbox.io/static/js/monaco-editor.e18eb5eef.chunk.js',
      'bbf85a72f4962a931d3c0c4103d5c00e',
    ],
    [
      'https://codesandbox.io/static/js/move-sandbox-modal.c59a42d9e.chunk.js',
      '702b5a830285102651a6b17d6ffcb77b',
    ],
    [
      'https://codesandbox.io/static/js/page-cli-instructions.b61bb9af5.chunk.js',
      '6e48c47fda75c1ab56882dcd07e0b08c',
    ],
    [
      'https://codesandbox.io/static/js/page-cli.654cb9535.chunk.js',
      '039f55316486f818f0aa0fd214fc666a',
    ],
    [
      'https://codesandbox.io/static/js/page-client.24074b1a6.chunk.js',
      '6e3213229d3db44214e2abfda64e2596',
    ],
    [
      'https://codesandbox.io/static/js/page-curator.e894d0cc6.chunk.js',
      'a2564f0cd4f3fc7732bf3e4110664454',
    ],
    [
      'https://codesandbox.io/static/js/page-github.3f601847c.chunk.js',
      '7e9b35b3a50bb1b9c1b3cd42b110c0be',
    ],
    [
      'https://codesandbox.io/static/js/page-not-found.5c08dcd2e.chunk.js',
      '49002b1a7ed688fcb11a27e8d05fd8c0',
    ],
    [
      'https://codesandbox.io/static/js/page-patron.b866cc15a.chunk.js',
      '25963eac8773326ca0357bfdebfab242',
    ],
    [
      'https://codesandbox.io/static/js/page-pro.2e37bf577.chunk.js',
      'ce500b66381483d02d7a4e49583ec614',
    ],
    [
      'https://codesandbox.io/static/js/page-profile.32521b60b.chunk.js',
      '5763ec20545c3713e109082201bf06e6',
    ],
    [
      'https://codesandbox.io/static/js/page-search.1f23b0889.chunk.js',
      'c218f27ba1fa975deeba622cf5ea950f',
    ],
    [
      'https://codesandbox.io/static/js/page-sign-in.56099e941.chunk.js',
      '24e947bfccf1d6f67d007f59c96a20f2',
    ],
    [
      'https://codesandbox.io/static/js/page-signup.e78e73ce0.chunk.js',
      '0797c9263563d0a36936768861500419',
    ],
    [
      'https://codesandbox.io/static/js/page-team-invitation.191acc883.chunk.js',
      '202456ac47fbe2deb4c8ee3d5052af31',
    ],
    [
      'https://codesandbox.io/static/js/page-vercel.d1887c610.chunk.js',
      '18066bf8fdf662f17c74af8d53d5ff78',
    ],
    [
      'https://codesandbox.io/static/js/phishing-phew.6f186d0d4.chunk.js',
      'f6bd33242532f50c001b80d86a1c9a38',
    ],
    [
      'https://codesandbox.io/static/js/postcss-compiler.64b8a1fe0.chunk.js',
      'c9322ecb58884792b56e8c656bb1342a',
    ],
    [
      'https://codesandbox.io/static/js/preact-zip.9fabdb4ac.chunk.js',
      '2fd09b57d965736414365d280f32e7fd',
    ],
    [
      'https://codesandbox.io/static/js/sandbox-startup.be47690fe.js',
      '935703c79a3eadad4aa29410fe09567f',
    ],
    [
      'https://codesandbox.io/static/js/sandbox.e533eaf5b.js',
      'e7880bc8ef204cdb953b94b49c9c37c1',
    ],
    [
      'https://codesandbox.io/static/js/vendors~airtable.68d496b50.chunk.js',
      'd7c4d5980201cc2d9897bcfad431b766',
    ],
    [
      'https://codesandbox.io/static/js/vendors~app.b6fa6cc08.chunk.js',
      '81deee9c85ae3c1fcd20f0221793a4a8',
    ],
    [
      'https://codesandbox.io/static/js/vendors~app~codemirror-editor~monaco-editor.e9593b851.chunk.js',
      '52af17d4e2575e802296150a50548757',
    ],
    [
      'https://codesandbox.io/static/js/vendors~app~codemirror-editor~monaco-editor~sandbox.5ca13c344.chunk.js',
      '650085a433f34d798f16ada0c7682454',
    ],
    [
      'https://codesandbox.io/static/js/vendors~app~embed~sandbox-startup.6e3433fd3.chunk.js',
      'f1bf7f25f09a67cdbfcf5243d79c0d24',
    ],
    [
      'https://codesandbox.io/static/js/vendors~app~embed~sandbox~sandbox-startup.bcc15d438.chunk.js',
      '16175e8908809dc296cb8852eb2d621e',
    ],
    [
      'https://codesandbox.io/static/js/vendors~app~monaco-editor.bba89dfbf.chunk.js',
      '0263ea18a1160f9b1e6e2be15ddad4e2',
    ],
    [
      'https://codesandbox.io/static/js/vendors~app~sandbox.711ae7310.chunk.js',
      'bb164fb13c593b9223b32b85f020b99f',
    ],
    [
      'https://codesandbox.io/static/js/vendors~codemirror-css~codemirror-html~codemirror-sass~codemirror-vue.c3140592f.chunk.js',
      '35f73f8957a3356abfde82b852830862',
    ],
    [
      'https://codesandbox.io/static/js/vendors~codemirror-editor.36d524a7c.chunk.js',
      '61f6bf92c6a5cfe40e43a827cd1d384e',
    ],
    [
      'https://codesandbox.io/static/js/vendors~codemirror-markdown.0b121994b.chunk.js',
      '0fe0832f74ccb17daf859efa1af73bd3',
    ],
    [
      'https://codesandbox.io/static/js/vendors~codemirror-stylus~codemirror-vue.15bd1a2e5.chunk.js',
      '8759bc94d1ec87e8eb183d5a9cf38320',
    ],
    [
      'https://codesandbox.io/static/js/vendors~codemirror-vim.634b1a2ff.chunk.js',
      '8f04867c90571c61753ded9a4a5bb9b3',
    ],
    [
      'https://codesandbox.io/static/js/vendors~codemirror-vue.34adf959d.chunk.js',
      '1a49236e24767cf8066b40bc4364f4d2',
    ],
    [
      'https://codesandbox.io/static/js/vendors~css-modules-loader-core.ac7bb8fe3.chunk.js',
      'eafb4a5470a90aaf9ab6cd90e6320f93',
    ],
    [
      'https://codesandbox.io/static/js/vendors~monaco-editor.d3087d044.chunk.js',
      '48ee4c312cff890d6de16069cf00aa31',
    ],
    [
      'https://codesandbox.io/static/js/vendors~page-curator.81b8cb6ca.chunk.js',
      '5db92c7ea6c8074cdfcfa70d3dc607ad',
    ],
    [
      'https://codesandbox.io/static/js/vendors~page-patron.c980a97d3.chunk.js',
      'fe2dad6a2622af7e14837b8bb79a36b9',
    ],
    [
      'https://codesandbox.io/static/js/vendors~page-search.d406e7714.chunk.js',
      '510a8e7cdedadedf517c3f32e258060b',
    ],
    [
      'https://codesandbox.io/static/js/vendors~postcss-compiler~vue-style-compiler.f9e51cefa.chunk.js',
      '938972d598b2c1c1ae63666d5faf66cc',
    ],
    [
      'https://codesandbox.io/static/js/vendors~react-devtools-backend.d7ac7a663.chunk.js',
      'e146ad5d0f8de5d8fbcabaa45a60c519',
    ],
    [
      'https://codesandbox.io/static/js/vendors~sandbox.68401d1f1.chunk.js',
      '0a39db5c21e3e257da1c879627370047',
    ],
    [
      'https://codesandbox.io/static/js/vendors~vue-loader~vue-selector.04112a1e3.chunk.js',
      '9628bbb7a1c5471ab73022112ab2894d',
    ],
    [
      'https://codesandbox.io/static/js/vendors~vue-loader~vue-selector~vue-template-compiler.2e8763f5f.chunk.js',
      '674df0a94c6c8f620c384d9a43fef085',
    ],
    [
      'https://codesandbox.io/static/js/vendors~vue-style-compiler.35a51f50a.chunk.js',
      'ee412c61ea6563777aab4fbe71707ee5',
    ],
    [
      'https://codesandbox.io/static/js/vendors~vue-template-compiler.61f60db6b.chunk.js',
      'f2b48e83a788909793eece82881a7a40',
    ],
    [
      'https://codesandbox.io/static/js/vue-loader.ecfc247a9.chunk.js',
      '53d3ea7fe764e9c82ee2611659c9b7f0',
    ],
    [
      'https://codesandbox.io/static/js/vue-selector.21f96bc6f.chunk.js',
      'e2b0eb63a4a8f24775ee1c60638d6534',
    ],
    [
      'https://codesandbox.io/static/js/vue-style-compiler.c76cd11c3.chunk.js',
      '09847d5813616a5467d8bc3b90de9ec5',
    ],
    [
      'https://codesandbox.io/static/js/vue-template-compiler.bb4d38502.chunk.js',
      '75a60c479e7f1ad279c5d0265aac6e0e',
    ],
    [
      'https://codesandbox.io/static/js/vue-zip.26106bf68.chunk.js',
      '540dc99a73630d8691a38d340127a205',
    ],
    [
      'https://codesandbox.io/static/js/watermark-button.be960f43b.js',
      'f7033a4278dba3040cf5ec44b2c93a45',
    ],
    [
      'https://codesandbox.io/static/media/codesandbox.90002c31.svg',
      '90002c31b16d45b43017b23699e3a5d2',
    ],
    [
      'https://codesandbox.io/static/media/file.6cbc0ce8.svg',
      '6cbc0ce8a891bd480366c9a28ff5a138',
    ],
    [
      'https://codesandbox.io/static/media/folder-open.df474ba4.svg',
      'df474ba474259310b435024f64550efb',
    ],
    [
      'https://codesandbox.io/static/media/folder.30a30d83.svg',
      '30a30d83523119b0db99ef6c2188014d',
    ],
    [
      'https://codesandbox.io/static/media/folder.31ca7ee0.svg',
      '31ca7ee0a4f006cf08968c09698a7d52',
    ],
    [
      'https://codesandbox.io/static/media/folderOpen.6913563c.svg',
      '6913563cb350cdf6095667297bd1ce18',
    ],
    [
      'https://codesandbox.io/static/media/image.7f836890.svg',
      '7f836890919377791975bb80131a1a1e',
    ],
    [
      'https://codesandbox.io/static/media/logo.450f79e2.svg',
      'dce7b5f8e5c10962fc9de209f9d14248',
    ],
    [
      'https://codesandbox.io/static/media/now.a94f1f60.svg',
      'a94f1f60d085ba4e0b5d091ad71278a2',
    ],
    [
      'https://codesandbox.io/static/media/patron-1.228cd9db.svg',
      '0704d591fd696a39cb576afe95249c25',
    ],
    [
      'https://codesandbox.io/static/media/patron-2.764a2ace.svg',
      '198b045f41df8eaaf9fa53a186a12dad',
    ],
    [
      'https://codesandbox.io/static/media/patron-3.262ba8e6.svg',
      '58d21d912352e2942eae1390fb8c61a6',
    ],
    [
      'https://codesandbox.io/static/media/patron-4.57071f9d.svg',
      '547841d1faac185dbf7075a895bb30e5',
    ],
    [
      'https://codesandbox.io/stylus-transpiler.e65883c9.worker.js',
      '2ab3d1f23a43b135e1d70d50de5fc8b7',
    ],
    [
      'https://codesandbox.io/sub-dynamic-worker.ad4adf24.worker.js',
      '8caeb340b173d96152b581f35e761442',
    ],
    [
      'https://codesandbox.io/svelte-transpiler.b2565baa.worker.js',
      'b501b1d5ff4438f7d4419c0b3d9996ae',
    ],
    [
      'https://codesandbox.io/svelte-worker.f3e023f2.worker.js',
      '999f11d77421d6a31ff4cb603ba484cf',
    ],
    [
      'https://codesandbox.io/transform-cx-jsx.babel-transpiler.62fa3392.worker.js',
      '9f141abb16d3c316c2658b3dfdc7d9c5',
    ],
    [
      'https://codesandbox.io/typescript-transpiler.c633978a.worker.js',
      'c4d6514b5a4b3237f63112e8b9d96419',
    ],
    [
      'https://codesandbox.io/typescript-worker.444b4295.worker.js',
      '6bba1fbee6e8fa44563e34a4b72fd089',
    ],
    [
      'https://codesandbox.io/vue-worker.3a9ee1c4.worker.js',
      'a06e3ccc6aaa74410a084492c0b07dbe',
    ],
  ],
  cacheName =
    'sw-precache-v3-code-sandbox-' +
    (self.registration ? self.registration.scope : ''),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function (e, t) {
    var a = new URL(e);
    return '/' === a.pathname.slice(-1) && (a.pathname += t), a.toString();
  },
  cleanResponse = function (e) {
    return e.redirected
      ? ('body' in e ? Promise.resolve(e.body) : e.blob()).then(function (t) {
          return new Response(t, {
            headers: e.headers,
            status: e.status,
            statusText: e.statusText,
          });
        })
      : Promise.resolve(e);
  },
  createCacheKey = function (e, t, a, c) {
    var o = new URL(e);
    return (
      (c && o.pathname.match(c)) ||
        (o.search +=
          (o.search ? '&' : '') +
          encodeURIComponent(t) +
          '=' +
          encodeURIComponent(a)),
      o.toString()
    );
  },
  isPathWhitelisted = function (e, t) {
    if (0 === e.length) return !0;
    var a = new URL(t).pathname;
    return e.some(function (e) {
      return a.match(e);
    });
  },
  stripIgnoredUrlParameters = function (e, t) {
    var a = new URL(e);
    return (
      (a.hash = ''),
      (a.search = a.search
        .slice(1)
        .split('&')
        .map(function (e) {
          return e.split('=');
        })
        .filter(function (e) {
          return t.every(function (t) {
            return !t.test(e[0]);
          });
        })
        .map(function (e) {
          return e.join('=');
        })
        .join('&')),
      a.toString()
    );
  },
  hashParamName = '_sw-precache',
  urlsToCacheKeys = new Map(
    precacheConfig.map(function (e) {
      var t = e[0],
        a = e[1],
        c = new URL(t, self.location),
        o = createCacheKey(c, hashParamName, a, /\.\w{8}\./);
      return [c.toString(), o];
    })
  );

function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function (e) {
      return e.map(function (e) {
        return e.url;
      });
    })
    .then(function (e) {
      return new Set(e);
    });
}
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function (e) {
        return setOfCachedUrls(e).then(function (t) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function (a) {
              if (!t.has(a)) {
                var c = new Request(a, {
                  credentials: 'same-origin',
                });
                return fetch(c).then(function (t) {
                  if (!t.ok)
                    throw new Error(
                      'Request for ' +
                        a +
                        ' returned a response with status ' +
                        t.status
                    );
                  return cleanResponse(t).then(function (t) {
                    return e.put(a, t);
                  });
                });
              }
            })
          );
        });
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
}),
  self.addEventListener('activate', function (e) {
    var t = new Set(urlsToCacheKeys.values());
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function (e) {
          return e.keys().then(function (a) {
            return Promise.all(
              a.map(function (a) {
                if (!t.has(a.url)) return e.delete(a);
              })
            );
          });
        })
        .then(function () {
          return self.clients.claim();
        })
    );
  }),
  self.addEventListener('fetch', function (e) {
    if ('GET' === e.request.method) {
      var t,
        a = stripIgnoredUrlParameters(
          e.request.url,
          ignoreUrlParametersMatching
        );
      (t = urlsToCacheKeys.has(a)) ||
        ((a = addDirectoryIndex(a, 'index.html')),
        (t = urlsToCacheKeys.has(a)));
      !t &&
        'navigate' === e.request.mode &&
        isPathWhitelisted(['\\/s\\/'], e.request.url) &&
        ((a = new URL('/app.html', self.location).toString()),
        (t = urlsToCacheKeys.has(a))),
        t &&
          e.respondWith(
            caches
              .open(cacheName)
              .then(function (e) {
                return e.match(urlsToCacheKeys.get(a)).then(function (e) {
                  if (e) return e;
                  throw Error(
                    'The cached response that was expected is missing.'
                  );
                });
              })
              .catch(function (t) {
                return (
                  console.warn(
                    'Couldn\'t serve response for "%s" from cache: %O',
                    e.request.url,
                    t
                  ),
                  fetch(e.request)
                );
              })
          );
    }
  }),
  (function (e) {
    if ('object' == typeof exports && 'undefined' != typeof module)
      module.exports = e();
    else if ('function' == typeof define && define.amd) define([], e);
    else {
      ('undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : this
      ).toolbox = e();
    }
  })(function () {
    return (function e(t, a, c) {
      function o(n, r) {
        if (!a[n]) {
          if (!t[n]) {
            var i = 'function' == typeof require && require;
            if (!r && i) return i(n, !0);
            if (s) return s(n, !0);
            var d = new Error("Cannot find module '" + n + "'");
            throw ((d.code = 'MODULE_NOT_FOUND'), d);
          }
          var f = (a[n] = {
            exports: {},
          });
          t[n][0].call(
            f.exports,
            function (e) {
              var a = t[n][1][e];
              return o(a || e);
            },
            f,
            f.exports,
            e,
            t,
            a,
            c
          );
        }
        return a[n].exports;
      }
      for (
        var s = 'function' == typeof require && require, n = 0;
        n < c.length;
        n++
      )
        o(c[n]);
      return o;
    })(
      {
        1: [
          function (e, t, a) {
            function c(e, t) {
              ((t = t || {}).debug || i.debug) &&
                console.log('[sw-toolbox] ' + e);
            }

            function o(e) {
              var t;
              return (
                e && e.cache && (t = e.cache.name),
                (t = t || i.cache.name),
                caches.open(t)
              );
            }

            function s(e, t, a) {
              var o = e.url,
                s = a.maxAgeSeconds,
                n = a.maxEntries,
                r = a.name,
                i = Date.now();
              return (
                c(
                  'Updating LRU order for ' +
                    o +
                    '. Max entries is ' +
                    n +
                    ', max age is ' +
                    s
                ),
                d
                  .getDb(r)
                  .then(function (e) {
                    return d.setTimestampForUrl(e, o, i);
                  })
                  .then(function (e) {
                    return d.expireEntries(e, n, s, i);
                  })
                  .then(function (e) {
                    c('Successfully updated IDB.');
                    var a = e.map(function (e) {
                      return t.delete(e);
                    });
                    return Promise.all(a).then(function () {
                      c('Done with cache cleanup.');
                    });
                  })
                  .catch(function (e) {
                    c(e);
                  })
              );
            }

            function n(e) {
              var t = Array.isArray(e);
              if (
                (t &&
                  e.forEach(function (e) {
                    'string' == typeof e || e instanceof Request || (t = !1);
                  }),
                !t)
              )
                throw new TypeError(
                  'The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.'
                );
              return e;
            }
            var r,
              i = e('./options'),
              d = e('./idb-cache-expiration');
            t.exports = {
              debug: c,
              fetchAndCache: function (e, t) {
                var a = (t = t || {}).successResponses || i.successResponses;
                return fetch(e.clone()).then(function (c) {
                  return (
                    'GET' === e.method &&
                      a.test(c.status) &&
                      o(t).then(function (a) {
                        a.put(e, c).then(function () {
                          var c = t.cache || i.cache;
                          (c.maxEntries || c.maxAgeSeconds) &&
                            c.name &&
                            (function (e, t, a) {
                              var c = s.bind(null, e, t, a);
                              r = r ? r.then(c) : c();
                            })(e, a, c);
                        });
                      }),
                    c.clone()
                  );
                });
              },
              openCache: o,
              renameCache: function (e, t, a) {
                return (
                  c('Renaming cache: [' + e + '] to [' + t + ']', a),
                  caches.delete(t).then(function () {
                    return Promise.all([caches.open(e), caches.open(t)]).then(
                      function (t) {
                        var a = t[0],
                          c = t[1];
                        return a
                          .keys()
                          .then(function (e) {
                            return Promise.all(
                              e.map(function (e) {
                                return a.match(e).then(function (t) {
                                  return c.put(e, t);
                                });
                              })
                            );
                          })
                          .then(function () {
                            return caches.delete(e);
                          });
                      }
                    );
                  })
                );
              },
              cache: function (e, t) {
                return o(t).then(function (t) {
                  return t.add(e);
                });
              },
              uncache: function (e, t) {
                return o(t).then(function (t) {
                  return t.delete(e);
                });
              },
              precache: function (e) {
                e instanceof Promise || n(e),
                  (i.preCacheItems = i.preCacheItems.concat(e));
              },
              validatePrecacheInput: n,
              isResponseFresh: function (e, t, a) {
                if (!e) return !1;
                if (t) {
                  var c = e.headers.get('date');
                  if (c && new Date(c).getTime() + 1e3 * t < a) return !1;
                }
                return !0;
              },
            };
          },
          {
            './idb-cache-expiration': 2,
            './options': 4,
          },
        ],
        2: [
          function (e, t, a) {
            var c = 'sw-toolbox-',
              o = 1,
              s = 'store',
              n = 'url',
              r = 'timestamp',
              i = {};
            t.exports = {
              getDb: function (e) {
                return (
                  e in i ||
                    (i[e] = (function (e) {
                      return new Promise(function (t, a) {
                        var i = indexedDB.open(c + e, o);
                        (i.onupgradeneeded = function () {
                          i.result
                            .createObjectStore(s, {
                              keyPath: n,
                            })
                            .createIndex(r, r, {
                              unique: !1,
                            });
                        }),
                          (i.onsuccess = function () {
                            t(i.result);
                          }),
                          (i.onerror = function () {
                            a(i.error);
                          });
                      });
                    })(e)),
                  i[e]
                );
              },
              setTimestampForUrl: function (e, t, a) {
                return new Promise(function (c, o) {
                  var n = e.transaction(s, 'readwrite');
                  n.objectStore(s).put({
                    url: t,
                    timestamp: a,
                  }),
                    (n.oncomplete = function () {
                      c(e);
                    }),
                    (n.onabort = function () {
                      o(n.error);
                    });
                });
              },
              expireEntries: function (e, t, a, c) {
                return (function (e, t, a) {
                  return t
                    ? new Promise(function (c, o) {
                        var i = 1e3 * t,
                          d = [],
                          f = e.transaction(s, 'readwrite'),
                          b = f.objectStore(s);
                        (b.index(r).openCursor().onsuccess = function (e) {
                          var t = e.target.result;
                          if (t && a - i > t.value[r]) {
                            var c = t.value[n];
                            d.push(c), b.delete(c), t.continue();
                          }
                        }),
                          (f.oncomplete = function () {
                            c(d);
                          }),
                          (f.onabort = o);
                      })
                    : Promise.resolve([]);
                })(e, a, c).then(function (a) {
                  return (function (e, t) {
                    return t
                      ? new Promise(function (a, c) {
                          var o = [],
                            i = e.transaction(s, 'readwrite'),
                            d = i.objectStore(s),
                            f = d.index(r),
                            b = f.count();
                          (f.count().onsuccess = function () {
                            var e = b.result;
                            e > t &&
                              (f.openCursor().onsuccess = function (a) {
                                var c = a.target.result;
                                if (c) {
                                  var s = c.value[n];
                                  o.push(s),
                                    d.delete(s),
                                    e - o.length > t && c.continue();
                                }
                              });
                          }),
                            (i.oncomplete = function () {
                              a(o);
                            }),
                            (i.onabort = c);
                        })
                      : Promise.resolve([]);
                  })(e, t).then(function (e) {
                    return a.concat(e);
                  });
                });
              },
            };
          },
          {},
        ],
        3: [
          function (e, t, a) {
            function c(e) {
              return e.reduce(function (e, t) {
                return e.concat(t);
              }, []);
            }
            e('serviceworker-cache-polyfill');
            var o = e('./helpers'),
              s = e('./router'),
              n = e('./options');
            t.exports = {
              fetchListener: function (e) {
                var t = s.match(e.request);
                t
                  ? e.respondWith(t(e.request))
                  : s.default &&
                    'GET' === e.request.method &&
                    0 === e.request.url.indexOf('http') &&
                    e.respondWith(s.default(e.request));
              },
              activateListener: function (e) {
                o.debug('activate event fired');
                var t = n.cache.name + '$$$inactive$$$';
                e.waitUntil(o.renameCache(t, n.cache.name));
              },
              installListener: function (e) {
                var t = n.cache.name + '$$$inactive$$$';
                o.debug('install event fired'),
                  o.debug('creating cache [' + t + ']'),
                  e.waitUntil(
                    o
                      .openCache({
                        cache: {
                          name: t,
                        },
                      })
                      .then(function (e) {
                        return Promise.all(n.preCacheItems)
                          .then(c)
                          .then(o.validatePrecacheInput)
                          .then(function (t) {
                            return (
                              o.debug(
                                'preCache list: ' + (t.join(', ') || '(none)')
                              ),
                              e.addAll(t)
                            );
                          });
                      })
                  );
              },
            };
          },
          {
            './helpers': 1,
            './options': 4,
            './router': 6,
            'serviceworker-cache-polyfill': 16,
          },
        ],
        4: [
          function (e, t, a) {
            var c;
            (c = self.registration
              ? self.registration.scope
              : self.scope || new URL('./', self.location).href),
              (t.exports = {
                cache: {
                  name: '$$$toolbox-cache$$$' + c + '$$$',
                  maxAgeSeconds: null,
                  maxEntries: null,
                },
                debug: !1,
                networkTimeoutSeconds: null,
                preCacheItems: [],
                successResponses: /^0|([123]\d\d)|(40[14567])|410$/,
              });
          },
          {},
        ],
        5: [
          function (e, t, a) {
            var c = new URL('./', self.location).pathname,
              o = e('path-to-regexp'),
              s = function (e, t, a, s) {
                t instanceof RegExp
                  ? (this.fullUrlRegExp = t)
                  : (0 !== t.indexOf('/') && (t = c + t),
                    (this.keys = []),
                    (this.regexp = o(t, this.keys))),
                  (this.method = e),
                  (this.options = s),
                  (this.handler = a);
              };
            (s.prototype.makeHandler = function (e) {
              var t;
              if (this.regexp) {
                var a = this.regexp.exec(e);
                (t = {}),
                  this.keys.forEach(function (e, c) {
                    t[e.name] = a[c + 1];
                  });
              }
              return function (e) {
                return this.handler(e, t, this.options);
              }.bind(this);
            }),
              (t.exports = s);
          },
          {
            'path-to-regexp': 15,
          },
        ],
        6: [
          function (e, t, a) {
            var c = e('./route'),
              o = e('./helpers'),
              s = function (e, t) {
                for (var a = e.entries(), c = a.next(), o = []; !c.done; ) {
                  new RegExp(c.value[0]).test(t) && o.push(c.value[1]),
                    (c = a.next());
                }
                return o;
              },
              n = function () {
                (this.routes = new Map()),
                  this.routes.set(RegExp, new Map()),
                  (this.default = null);
              };
            ['get', 'post', 'put', 'delete', 'head', 'any'].forEach(function (
              e
            ) {
              n.prototype[e] = function (t, a, c) {
                return this.add(e, t, a, c);
              };
            }),
              (n.prototype.add = function (e, t, a, s) {
                var n;
                (s = s || {}),
                  t instanceof RegExp
                    ? (n = RegExp)
                    : (n =
                        (n = s.origin || self.location.origin) instanceof RegExp
                          ? n.source
                          : (function (e) {
                              return e.replace(
                                /[-\/\\^$*+?.()|[\]{}]/g,
                                '\\$&'
                              );
                            })(n)),
                  (e = e.toLowerCase());
                var r = new c(e, t, a, s);
                this.routes.has(n) || this.routes.set(n, new Map());
                var i = this.routes.get(n);
                i.has(e) || i.set(e, new Map());
                var d = i.get(e),
                  f = r.regexp || r.fullUrlRegExp;
                d.has(f.source) &&
                  o.debug(
                    '"' + t + '" resolves to same regex as existing route.'
                  ),
                  d.set(f.source, r);
              }),
              (n.prototype.matchMethod = function (e, t) {
                var a = new URL(t),
                  c = a.origin,
                  o = a.pathname;
                return (
                  this._match(e, s(this.routes, c), o) ||
                  this._match(e, [this.routes.get(RegExp)], t)
                );
              }),
              (n.prototype._match = function (e, t, a) {
                if (0 === t.length) return null;
                for (var c = 0; c < t.length; c++) {
                  var o = t[c],
                    n = o && o.get(e.toLowerCase());
                  if (n) {
                    var r = s(n, a);
                    if (r.length > 0) return r[0].makeHandler(a);
                  }
                }
                return null;
              }),
              (n.prototype.match = function (e) {
                return (
                  this.matchMethod(e.method, e.url) ||
                  this.matchMethod('any', e.url)
                );
              }),
              (t.exports = new n());
          },
          {
            './helpers': 1,
            './route': 5,
          },
        ],
        7: [
          function (e, t, a) {
            var c = e('../options'),
              o = e('../helpers');
            t.exports = function (e, t, a) {
              return (
                (a = a || {}),
                o.debug('Strategy: cache first [' + e.url + ']', a),
                o.openCache(a).then(function (t) {
                  return t.match(e).then(function (t) {
                    var s = a.cache || c.cache,
                      n = Date.now();
                    return o.isResponseFresh(t, s.maxAgeSeconds, n)
                      ? t
                      : o.fetchAndCache(e, a);
                  });
                })
              );
            };
          },
          {
            '../helpers': 1,
            '../options': 4,
          },
        ],
        8: [
          function (e, t, a) {
            var c = e('../options'),
              o = e('../helpers');
            t.exports = function (e, t, a) {
              return (
                (a = a || {}),
                o.debug('Strategy: cache only [' + e.url + ']', a),
                o.openCache(a).then(function (t) {
                  return t.match(e).then(function (e) {
                    var t = a.cache || c.cache,
                      s = Date.now();
                    if (o.isResponseFresh(e, t.maxAgeSeconds, s)) return e;
                  });
                })
              );
            };
          },
          {
            '../helpers': 1,
            '../options': 4,
          },
        ],
        9: [
          function (e, t, a) {
            var c = e('../helpers'),
              o = e('./cacheOnly');
            t.exports = function (e, t, a) {
              return (
                c.debug('Strategy: fastest [' + e.url + ']', a),
                new Promise(function (s, n) {
                  var r = !1,
                    i = [],
                    d = function (e) {
                      i.push(e.toString()),
                        r
                          ? n(
                              new Error(
                                'Both cache and network failed: "' +
                                  i.join('", "') +
                                  '"'
                              )
                            )
                          : (r = !0);
                    },
                    f = function (e) {
                      e instanceof Response ? s(e) : d('No result returned');
                    };
                  c.fetchAndCache(e.clone(), a).then(f, d),
                    o(e, t, a).then(f, d);
                })
              );
            };
          },
          {
            '../helpers': 1,
            './cacheOnly': 8,
          },
        ],
        10: [
          function (e, t, a) {
            t.exports = {
              networkOnly: e('./networkOnly'),
              networkFirst: e('./networkFirst'),
              cacheOnly: e('./cacheOnly'),
              cacheFirst: e('./cacheFirst'),
              fastest: e('./fastest'),
            };
          },
          {
            './cacheFirst': 7,
            './cacheOnly': 8,
            './fastest': 9,
            './networkFirst': 11,
            './networkOnly': 12,
          },
        ],
        11: [
          function (e, t, a) {
            var c = e('../options'),
              o = e('../helpers');
            t.exports = function (e, t, a) {
              var s = (a = a || {}).successResponses || c.successResponses,
                n = a.networkTimeoutSeconds || c.networkTimeoutSeconds;
              return (
                o.debug('Strategy: network first [' + e.url + ']', a),
                o.openCache(a).then(function (t) {
                  var r,
                    i,
                    d = [];
                  if (n) {
                    var f = new Promise(function (s) {
                      r = setTimeout(function () {
                        t.match(e).then(function (e) {
                          var t = a.cache || c.cache,
                            n = Date.now(),
                            r = t.maxAgeSeconds;
                          o.isResponseFresh(e, r, n) && s(e);
                        });
                      }, 1e3 * n);
                    });
                    d.push(f);
                  }
                  var b = o
                    .fetchAndCache(e, a)
                    .then(function (e) {
                      if ((r && clearTimeout(r), s.test(e.status))) return e;
                      throw (
                        (o.debug(
                          'Response was an HTTP error: ' + e.statusText,
                          a
                        ),
                        (i = e),
                        new Error('Bad response'))
                      );
                    })
                    .catch(function (c) {
                      return (
                        o.debug(
                          'Network or response error, fallback to cache [' +
                            e.url +
                            ']',
                          a
                        ),
                        t.match(e).then(function (e) {
                          if (e) return e;
                          if (i) return i;
                          throw c;
                        })
                      );
                    });
                  return d.push(b), Promise.race(d);
                })
              );
            };
          },
          {
            '../helpers': 1,
            '../options': 4,
          },
        ],
        12: [
          function (e, t, a) {
            var c = e('../helpers');
            t.exports = function (e, t, a) {
              return (
                c.debug('Strategy: network only [' + e.url + ']', a), fetch(e)
              );
            };
          },
          {
            '../helpers': 1,
          },
        ],
        13: [
          function (e, t, a) {
            var c = e('./options'),
              o = e('./router'),
              s = e('./helpers'),
              n = e('./strategies'),
              r = e('./listeners');
            s.debug('Service Worker Toolbox is loading'),
              self.addEventListener('install', r.installListener),
              self.addEventListener('activate', r.activateListener),
              self.addEventListener('fetch', r.fetchListener),
              (t.exports = {
                networkOnly: n.networkOnly,
                networkFirst: n.networkFirst,
                cacheOnly: n.cacheOnly,
                cacheFirst: n.cacheFirst,
                fastest: n.fastest,
                router: o,
                options: c,
                cache: s.cache,
                uncache: s.uncache,
                precache: s.precache,
              });
          },
          {
            './helpers': 1,
            './listeners': 3,
            './options': 4,
            './router': 6,
            './strategies': 10,
          },
        ],
        14: [
          function (e, t, a) {
            t.exports =
              Array.isArray ||
              function (e) {
                return '[object Array]' == Object.prototype.toString.call(e);
              };
          },
          {},
        ],
        15: [
          function (e, t, a) {
            function c(e, t) {
              for (
                var a,
                  c = [],
                  o = 0,
                  s = 0,
                  n = '',
                  d = (t && t.delimiter) || '/';
                null != (a = p.exec(e));

              ) {
                var f = a[0],
                  b = a[1],
                  u = a.index;
                if (((n += e.slice(s, u)), (s = u + f.length), b)) n += b[1];
                else {
                  var h = e[s],
                    l = a[2],
                    x = a[3],
                    m = a[4],
                    j = a[5],
                    v = a[6],
                    g = a[7];
                  n && (c.push(n), (n = ''));
                  var k = null != l && null != h && h !== l,
                    w = '+' === v || '*' === v,
                    y = '?' === v || '*' === v,
                    E = a[2] || d,
                    R = m || j;
                  c.push({
                    name: x || o++,
                    prefix: l || '',
                    delimiter: E,
                    optional: y,
                    repeat: w,
                    partial: k,
                    asterisk: !!g,
                    pattern: R ? i(R) : g ? '.*' : '[^' + r(E) + ']+?',
                  });
                }
              }
              return s < e.length && (n += e.substr(s)), n && c.push(n), c;
            }

            function o(e) {
              return encodeURI(e).replace(/[\/?#]/g, function (e) {
                return '%' + e.charCodeAt(0).toString(16).toUpperCase();
              });
            }

            function s(e) {
              return encodeURI(e).replace(/[?#]/g, function (e) {
                return '%' + e.charCodeAt(0).toString(16).toUpperCase();
              });
            }

            function n(e) {
              for (var t = new Array(e.length), a = 0; a < e.length; a++)
                'object' == typeof e[a] &&
                  (t[a] = new RegExp('^(?:' + e[a].pattern + ')$'));
              return function (a, c) {
                for (
                  var n = '',
                    r = a || {},
                    i = (c || {}).pretty ? o : encodeURIComponent,
                    d = 0;
                  d < e.length;
                  d++
                ) {
                  var f = e[d];
                  if ('string' != typeof f) {
                    var b,
                      u = r[f.name];
                    if (null == u) {
                      if (f.optional) {
                        f.partial && (n += f.prefix);
                        continue;
                      }
                      throw new TypeError(
                        'Expected "' + f.name + '" to be defined'
                      );
                    }
                    if (h(u)) {
                      if (!f.repeat)
                        throw new TypeError(
                          'Expected "' +
                            f.name +
                            '" to not repeat, but received `' +
                            JSON.stringify(u) +
                            '`'
                        );
                      if (0 === u.length) {
                        if (f.optional) continue;
                        throw new TypeError(
                          'Expected "' + f.name + '" to not be empty'
                        );
                      }
                      for (var p = 0; p < u.length; p++) {
                        if (((b = i(u[p])), !t[d].test(b)))
                          throw new TypeError(
                            'Expected all "' +
                              f.name +
                              '" to match "' +
                              f.pattern +
                              '", but received `' +
                              JSON.stringify(b) +
                              '`'
                          );
                        n += (0 === p ? f.prefix : f.delimiter) + b;
                      }
                    } else {
                      if (((b = f.asterisk ? s(u) : i(u)), !t[d].test(b)))
                        throw new TypeError(
                          'Expected "' +
                            f.name +
                            '" to match "' +
                            f.pattern +
                            '", but received "' +
                            b +
                            '"'
                        );
                      n += f.prefix + b;
                    }
                  } else n += f;
                }
                return n;
              };
            }

            function r(e) {
              return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
            }

            function i(e) {
              return e.replace(/([=!:$\/()])/g, '\\$1');
            }

            function d(e, t) {
              return (e.keys = t), e;
            }

            function f(e) {
              return e.sensitive ? '' : 'i';
            }

            function b(e, t, a) {
              h(t) || ((a = t || a), (t = []));
              for (
                var c = (a = a || {}).strict, o = !1 !== a.end, s = '', n = 0;
                n < e.length;
                n++
              ) {
                var i = e[n];
                if ('string' == typeof i) s += r(i);
                else {
                  var b = r(i.prefix),
                    u = '(?:' + i.pattern + ')';
                  t.push(i),
                    i.repeat && (u += '(?:' + b + u + ')*'),
                    (s += u =
                      i.optional
                        ? i.partial
                          ? b + '(' + u + ')?'
                          : '(?:' + b + '(' + u + '))?'
                        : b + '(' + u + ')');
                }
              }
              var p = r(a.delimiter || '/'),
                l = s.slice(-p.length) === p;
              return (
                c ||
                  (s = (l ? s.slice(0, -p.length) : s) + '(?:' + p + '(?=$))?'),
                (s += o ? '$' : c && l ? '' : '(?=' + p + '|$)'),
                d(new RegExp('^' + s, f(a)), t)
              );
            }

            function u(e, t, a) {
              return (
                h(t) || ((a = t || a), (t = [])),
                (a = a || {}),
                e instanceof RegExp
                  ? (function (e, t) {
                      var a = e.source.match(/\((?!\?)/g);
                      if (a)
                        for (var c = 0; c < a.length; c++)
                          t.push({
                            name: c,
                            prefix: null,
                            delimiter: null,
                            optional: !1,
                            repeat: !1,
                            partial: !1,
                            asterisk: !1,
                            pattern: null,
                          });
                      return d(e, t);
                    })(e, t)
                  : h(e)
                  ? (function (e, t, a) {
                      for (var c = [], o = 0; o < e.length; o++)
                        c.push(u(e[o], t, a).source);
                      return d(new RegExp('(?:' + c.join('|') + ')', f(a)), t);
                    })(e, t, a)
                  : (function (e, t, a) {
                      return b(c(e, a), t, a);
                    })(e, t, a)
              );
            }
            var h = e('isarray');
            (t.exports = u),
              (t.exports.parse = c),
              (t.exports.compile = function (e, t) {
                return n(c(e, t));
              }),
              (t.exports.tokensToFunction = n),
              (t.exports.tokensToRegExp = b);
            var p = new RegExp(
              [
                '(\\\\.)',
                '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
              ].join('|'),
              'g'
            );
          },
          {
            isarray: 14,
          },
        ],
        16: [
          function (e, t, a) {
            !(function () {
              var e = Cache.prototype.addAll,
                t = navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);
              if (t)
                var a = t[1],
                  c = parseInt(t[2]);
              (e &&
                (!t ||
                  ('Firefox' === a && c >= 46) ||
                  ('Chrome' === a && c >= 50))) ||
                ((Cache.prototype.addAll = function (e) {
                  function t(e) {
                    (this.name = 'NetworkError'),
                      (this.code = 19),
                      (this.message = e);
                  }
                  var a = this;
                  return (
                    (t.prototype = Object.create(Error.prototype)),
                    Promise.resolve()
                      .then(function () {
                        if (arguments.length < 1) throw new TypeError();
                        return (
                          (e = e.map(function (e) {
                            return e instanceof Request ? e : String(e);
                          })),
                          Promise.all(
                            e.map(function (e) {
                              'string' == typeof e && (e = new Request(e));
                              var a = new URL(e.url).protocol;
                              if ('http:' !== a && 'https:' !== a)
                                throw new t('Invalid scheme');
                              return fetch(e.clone());
                            })
                          )
                        );
                      })
                      .then(function (c) {
                        if (
                          c.some(function (e) {
                            return !e.ok;
                          })
                        )
                          throw new t('Incorrect response status');
                        return Promise.all(
                          c.map(function (t, c) {
                            return a.put(e[c], t);
                          })
                        );
                      })
                      .then(function () {})
                  );
                }),
                (Cache.prototype.add = function (e) {
                  return this.addAll([e]);
                }));
            })();
          },
          {},
        ],
      },
      {},
      [13]
    )(13);
  }),
  toolbox.router.get(/^https:\/\/unpkg\.com/, toolbox.cacheFirst, {
    cache: {
      maxEntries: 300,
      name: 'unpkg-cache',
    },
  }),
  toolbox.router.get(/cloudflare\.com/, toolbox.cacheFirst, {
    cache: {
      maxEntries: 20,
      name: 'cloudflare-cache',
    },
  }),
  toolbox.router.get(/\/vscode31/, toolbox.cacheFirst, {
    cache: {
      maximumFileSizeToCacheInBytes: 104857600,
      name: 'vscode',
    },
  }),
  toolbox.router.get(/vscode-extensions\//, toolbox.cacheFirst, {
    cache: {
      maximumFileSizeToCacheInBytes: 104857600,
      name: 'vscode-extensions',
    },
  });
