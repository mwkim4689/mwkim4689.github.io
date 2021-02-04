'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7581156f47af33cb5b734cb6f1b92789",
".git/config": "907ee8049c1e616cdf9576bdb0c91a24",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "36098c4672458d00c3dc10403335b33c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2b8c845d176fd4f3f5c92cde2ada0ef0",
".git/logs/refs/heads/master": "2b8c845d176fd4f3f5c92cde2ada0ef0",
".git/logs/refs/remotes/origin/master": "1644d3ead738838a182c53a02284df33",
".git/objects/01/468a1cd13beaea9effcbf3ed35e290bb424597": "fd89ac7faabe4e849b5170d89740f0a8",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/79b79e1a28deeb3d34a4343ea4c6e1a7ab1ae1": "3dab95425aa9329c0730ca760828dbd7",
".git/objects/09/a92d7ddf28d0fce2cabe09f3bc5e746a48d7b5": "f1f22c4d5158dcfa6d1593e9b2fd73d5",
".git/objects/0c/a83770ccd21560902c1526c26f03ed2dea5823": "29846cfd2077ff55c182c35222ce2e91",
".git/objects/0e/8ff4c3a8b747c1191d8afc4aafd43888a344a4": "a6a70e84a085971775ff989a2d9b0fdc",
".git/objects/11/a0f37a7f39e9affd719ad1f0048007accba74b": "33c4b5360d376e9d2347d86682382268",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/18/efb11783f9c670abc55423f4eeca41950e6426": "b7fccd2eb29f8faeaba0fe80758d9e37",
".git/objects/1a/8e73cd040add2805edd62e0153e8e414820024": "e35dd110ee84044742c27125a075face",
".git/objects/1a/8fe6413935ea635921bc35151bd3ea69c22e88": "19e60f5bc6222b1b9323c8f1c22f3eab",
".git/objects/1b/9a00d6a7343bd8b6827c219f5d15693fa46931": "cb2b5b2d5e4c1c0bf86b9c9799710db0",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/1c/6d9c9b62f1851ca6a454fc3455bb924b77b4be": "1c8843ec5841b577c0d6c088bbaa06ef",
".git/objects/1f/1f310f3646a52754b6ece3645c19b9a87e8330": "e8c503fa2d4184156d5cf08dfde68ce0",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/ccaad702ab7a42d0f698809d7c390bb782adb6": "b8dc5aa33df61657e856833273eb1565",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/edca9f72ae7294fdfe5b27e6e2511651161d53": "47a0e973646bd20b8d36238b4046875f",
".git/objects/2d/1a989de377ed032e33e09203ea0032c5273351": "5acbf6bb9ed33d287fcabb3bc866adc5",
".git/objects/2e/0daa1a81328b694aef52cd1ecc5910ebf59a86": "da19bde7558ffcfc2bf1d9212c9fef34",
".git/objects/34/71ba8607f3dd0703bb5a71b0a9c4f79b5359ff": "a8e5994ee28307c8046a3ccbd1857f1d",
".git/objects/39/1aede68ced9afdc9a85735078c52897bc1034d": "a1ae0253ea2f4de195d23c3384e28d7d",
".git/objects/3c/a2e00a1e0b24f0a352d9e5cf2dee27b928a7d9": "d65b9bdaa565a4be616c265cd6217663",
".git/objects/3e/2d34c088bd1cc7dc966437fe78ba55429aa8a1": "667df5b432f72e3befbcd16dc3811a9b",
".git/objects/45/cf6dc0dac69f703838e254fa7139350a43e978": "33ab8f45bd0d45a9cc9faaf9f02b9ba2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/6bbbc45c240626d486be305400a87070fe0db9": "5f917e356b2b621d4e458019edc0be37",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/36a00f537bf9ca3bc20f2a50c8f8db088e3edc": "ee8f87aad44bf2d94a49e4e90ff5befa",
".git/objects/51/082c21e11835d3462941a26c9151cc643e6123": "3fd2c1f697b56b1315f6f6b1c49ef49f",
".git/objects/56/50ba558088bbe3b70b7158d072eacde9ac8aae": "7cba9b4c4edcd542ed34bad3df346c13",
".git/objects/5b/1e9a6d1bd5b779f7ca9c030e0a854cecb2bb45": "c52a9df47fb3f11d75c1f0441b5420b0",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/5c/fbae1e414394d37f4b9e665ffba2852e7ac138": "eff1a99b44cd3e31fba44b70349430d8",
".git/objects/60/229116e41e43327555c0f51120cae32d76d3b5": "c987910bbfd573229dc791b542358de0",
".git/objects/60/9fd4487a77faeefae5696c88e5a25798707853": "7920598efc6f9366e30abcc3142d2495",
".git/objects/61/03163671929fdf7c52f07baea15f2f5735f70c": "f94a98460f680d11915d32fac780316f",
".git/objects/61/25401ce154ceecb8f7bc3a9602c14f405a94fe": "2b8141025e72859d6f41b0cd5d0919c9",
".git/objects/63/4cad78d3a9fed29c2b6fb32b9312718a8c4a59": "ac498ffa3dcd4a79de2cb5021a95e575",
".git/objects/67/586bf5c968ebb507e12e9a84079378577d6e27": "d2abdf2c76b37ecb218aa0cdf184efeb",
".git/objects/6a/5225fc64827b906346e355f0325cdcbcbb65b2": "0de18c09b42c4924534a9f717d8301a1",
".git/objects/6b/4f6e7b34bff1f11e8d1ef4678710ebd86dea62": "81e9e797182b9bf4725564540ca0c315",
".git/objects/6e/210bac278541951a07e4bda6ee263689a0f31e": "b330b7d67ad97c2b8fd80aa2b46b9436",
".git/objects/71/0d1693c3bb457b7377eeaec32880a1b007af9b": "91eb2972e1419a37ffa9c1a3d03226ff",
".git/objects/72/d511d555bd72a583fcb826b8e999b5aa44dc41": "da502db929e7e405a1260fe22433d23f",
".git/objects/73/2a93eab68e017bba741c84955f8c173c637c24": "170fa6bb875563639079e79d9de43df4",
".git/objects/77/61f9c9069f1900ceb10ec123ca8fde4ebb463f": "02400303e2a308d1d8cc3701d1dcca91",
".git/objects/77/e58760cbcba27e78c6739607c83aa56f55f9ed": "e3a854772bddd6793f54067b2b9bea5b",
".git/objects/78/9c02cc4f2bcb74a68f933f954e80aed778263e": "1744197ca1e46fdb0c616a8955285075",
".git/objects/7d/13f764ac687226f5c20b6dde8dddf992673be6": "83166d797c9e6f616d987cb488271ae7",
".git/objects/80/d47f2bedaaa772c1869061f2576c88096d7952": "3affb517d77223340858324af88ffa41",
".git/objects/81/320187216460c2a736d0412c4545c5dea9aabf": "24f3e6e7f58e20b60822c1436b4e4815",
".git/objects/87/15abc706e7c1a248f4f628ce3ef030001e6d72": "5f84ff58d7e7b67d887ff47e700f128a",
".git/objects/87/487ea665d0b241a9f1b49c6f3591489cfa1fda": "9343c35ab6f4e1ae033a30e0283f4a5e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/602e826d8864b46a14fae132ee360de04660f8": "8b0b0f8cf97b0ed079d952f648a2726d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/ad0d2fbee9925144a6b73228fed4191ef9f0dd": "8cd0b812d1299f9ab763c75bf48432d0",
".git/objects/8f/ec4fd8b88433a6ad770c05e5be11301917721c": "ce03fab521eade83f6fb56c3963009b6",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/94/4ed5d9b991ec9bbbdadfaf236a166cdea835ee": "06629eb70f1a5f65d0008e47b17f37e7",
".git/objects/98/c4ebd9c1ac3c9179faa271d7bc8932d9255360": "335b1e91fd90138f9e79e7b95907c1dd",
".git/objects/9a/ca873f719cdc1aa10d31110413f5c460ea6e83": "3a8d8492b34672bb0cfdb1f48341315d",
".git/objects/a5/0f63296359183a79aec747244fa1185c27b860": "a7456215e69f7f5f9349266360b2a3f8",
".git/objects/a5/7b2e999045a185f28ba211643f8d4535057e30": "018219273c065162f9d3d7b8d5dafdb2",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/a7/0abc0df0aec6cf834bb8c05e19b7ba3900a854": "f4c257300467c448c80565a524dcacec",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/a9/8ecc2c3fd1eace613f059f51293be500dd35fc": "08b5c09b46d134a6048d1ce6bc2276b7",
".git/objects/aa/7cc029082ba129b8a7ecbac0e7d3a396466c51": "f03c79c10e0f4c2bf6eca1bb511eb632",
".git/objects/ab/0d9a48f6ceeb5701f74fe5bf5fb4d8f4056302": "6742ccb68ad5e8f4451b6003a45dc80c",
".git/objects/af/027a01dff15303ec5a11bff9f4f69f9c1892bb": "d2762625f1091148fc46242153419d3d",
".git/objects/b1/384e8ff3a32806e628bc1553ac7028f3245ca0": "77d0f7b4d307a7157dfcd2482fdb6a6d",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/9a37cd72e4123f9554e1f45eabde6771238577": "0490911c3b583fb5aa063288ee7d729a",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/bf/7d9257a4e113ff824fc5eaea2cd64cfe48cab4": "73f565104845037c88c50641f7d96474",
".git/objects/c1/19ba9865b6cbad2cd9b9797e0d803c187151c5": "5ad3334e469c30b700d3388265a9f587",
".git/objects/cb/85e3485f56eafbf9cb1d43c6addd213c0b0887": "b4ca8031ed243416a3d4545a309a41d5",
".git/objects/ce/bc61b415d5252043d5ea389183e2a329d5a3e9": "f6c32d3f384352abb1feb8ef69634795",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/d2/e92a6818cd0b93caa07c6424e792cfae72b22f": "939d36282ddc3eb596d9ce71bb4591eb",
".git/objects/d4/1437b99e62455d3c377a693c1eca5ba8505b7f": "9553e03344b770ad0280f1679afc6930",
".git/objects/d8/562a1cfaec77250a478548d9f11efa899dfb64": "3f527491e86d5d588d460fc88d940295",
".git/objects/d8/aa3180aab3d1f441fa5d12e6eb5565b93c81cb": "44d28914190e11c452c09cbf1b6cf6b6",
".git/objects/d9/084ee9f2b6df0c6753d73b731709de369157cd": "380d0c903e8b5f468eb670d9e513545b",
".git/objects/e2/f9b2c893cf1a7ba0fce46a1d90389ebebef65c": "6ebde06f0bfc852b99afab79e23b6e1b",
".git/objects/e7/c6a40f05ec66bb57b45b915abe43ff1ff3d05d": "e420b838cff6079875fe0703acbfac90",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/ee/e332589c0aefdfedc6d10b5283c698034f0ab2": "ac6288a1e0103542c1c98f1f5dc0ab3e",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/33226331094eb0e1d65e433b85738e0f8313ed": "a70408fb64acc3e9a8f8f7f615256ce4",
".git/objects/f9/22326c2fb4641620a10a05b5137204ac6bfa31": "779f93c50de98844ce0b30bb13e52cb7",
".git/objects/f9/acfb9add617e2d7a300a4bb9f1162f19fbe8db": "0146e01f93875c1ff3b92f71106cb50c",
".git/objects/fa/8c101880d4c7c791a16b1435dc602c6a9efd2c": "140430bfb2ddbec9bcd4e9809bd10448",
".git/objects/fa/fb7b09719f000d9ed9914a9c8fad95350cb7cb": "a4294dcd32a412502929890fac45d3b0",
".git/objects/fd/deae5134a72739cdc7c460ca815da9bf91e11e": "72dfe66e607b0d634e5765404b19713e",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/fe/79ebaafa40c045becbf0178476ace3c2338300": "0f66ccc6c84880a72d811578ce2803c9",
".git/objects/ff/ca46ab60bfa196bc5c596fab404e4ea7f038f6": "25f9e37a5f223639c5e4b1ba520f3b8c",
".git/refs/heads/master": "751f2410c10461ffadf325a3ff605a17",
".git/refs/remotes/origin/master": "751f2410c10461ffadf325a3ff605a17",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "aa2f7fe6535ce426e2f4c6ee6ccc9730",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c5f776ec76a4ad5a90cec6b9e9b1e01e",
"/": "8b588e304312d9554b2dddadf0873b7b",
"main.dart.js": "2dc9d37c19b4bf2307631718d354e92f",
"manifest.json": "ff7e2222d64a12c9fc067a8d9129bc62",
"version.json": "35943cf09c27341460baf8c9fa8a5302",
"%EB%B0%B1%EC%97%85/assets/AssetManifest.json": "10c18081ebc0ba18671a0d5f57e97841",
"%EB%B0%B1%EC%97%85/assets/assets/icons/btn_play.svg": "52fda6f6a12d1d1eb86d6e66db4bf8e0",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_arrow_S.svg": "7627ee4ce220809ff0ad4be675df3e4d",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_bookmark.svg": "876dd60b5301154940deb58fc30cc3d6",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_bookmark_active.svg": "02b0fd482e909a18a070e585a1a037dd",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_check.svg": "7a188813be1b811d72e2b69353893435",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_edit.svg": "2f8112d07fe8128a51181e33b30b7aad",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_menu_category.svg": "dc7716d8f007b22275061b3dae583661",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_menu_home.svg": "c7806a176001d8fcef77600e46b2ac8c",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_menu_noti.svg": "8b4f827ea175010c1d1658bac32bced9",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_menu_profile.svg": "9dfe193e8fb82ed66b330a578599c8f9",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_menu_status.svg": "94a7f9349d4a5c12683035cc7f31fccc",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_search.svg": "2d61a8f4f0a823e635d7d45ff5a060a0",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_search_S.svg": "d3f235dd2694de2a65bbda2a912fba0b",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_setting.svg": "58f8b26792bedb3a06c7ba32b4848346",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_setting_cs.svg": "441b76213720040500dbe396eb35885c",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_setting_logout.svg": "a5411ec720d15fd0c0a44d8baa439e51",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_setting_noti.svg": "c98e68051eb49f754d2930a480e95514",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_setting_password.svg": "ee7422848d79bfa346aeee8c7e0a7aa3",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_setting_policy.svg": "8ca2753bb0d46c89cbdf00ab3ee09607",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_setting_security.svg": "dcebb9a9dff0f2b5df323e99b0086539",
"%EB%B0%B1%EC%97%85/assets/assets/icons/ic_share.svg": "187d4f62f0a619006a4c742a52d4ea79",
"%EB%B0%B1%EC%97%85/assets/assets/images/heart_arrow_icon_2445092_1280.png": "e6da4cfce14d8b30d488eedcf8c84c28",
"%EB%B0%B1%EC%97%85/assets/assets/images/ic_logo_ver1.png": "8b806a0dadf2275b4f9d41394832e58c",
"%EB%B0%B1%EC%97%85/assets/assets/images/img_not_available.jpeg": "1c98fa4a13575d5854365f27b8bf66dc",
"%EB%B0%B1%EC%97%85/assets/assets/images/mimi1.gif": "477fc8ddd40d200fe8f2635b5151a873",
"%EB%B0%B1%EC%97%85/assets/assets/images/mimi2.gif": "82a783353a27abe59feafd40bc686af1",
"%EB%B0%B1%EC%97%85/assets/assets/images/mimi3.gif": "477fc8ddd40d200fe8f2635b5151a873",
"%EB%B0%B1%EC%97%85/assets/assets/images/mimi4.gif": "6b65742393c65511ba223ec388c85ecc",
"%EB%B0%B1%EC%97%85/assets/assets/images/mimi5.gif": "609127cb5129f8e218fb57f059497c87",
"%EB%B0%B1%EC%97%85/assets/assets/images/mimi6.gif": "1ce35a6b3c21cc308a7683dfbea81c63",
"%EB%B0%B1%EC%97%85/assets/assets/images/mimi7.gif": "ace546bd302229af3a0c7e7221d2dc10",
"%EB%B0%B1%EC%97%85/assets/assets/images/mimi8.gif": "6646a3dec849498313a17c7de5d2ea5c",
"%EB%B0%B1%EC%97%85/assets/assets/images/mimi9.gif": "b5ec7c32285b24c09eca4646a4511518",
"%EB%B0%B1%EC%97%85/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"%EB%B0%B1%EC%97%85/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"%EB%B0%B1%EC%97%85/assets/NOTICES": "8c80062757898a89712bcf8e32b794c6",
"%EB%B0%B1%EC%97%85/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"%EB%B0%B1%EC%97%85/assets/packages/fluttertoast/assets/toastify.css": "8beb4c67569fb90146861e66d94163d7",
"%EB%B0%B1%EC%97%85/assets/packages/fluttertoast/assets/toastify.js": "8f5ac78dd0b9b5c9959ea1ade77f68ae",
"%EB%B0%B1%EC%97%85/assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"%EB%B0%B1%EC%97%85/assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"%EB%B0%B1%EC%97%85/assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"%EB%B0%B1%EC%97%85/assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"%EB%B0%B1%EC%97%85/assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"%EB%B0%B1%EC%97%85/assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"%EB%B0%B1%EC%97%85/assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"%EB%B0%B1%EC%97%85/assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"%EB%B0%B1%EC%97%85/assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"%EB%B0%B1%EC%97%85/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"%EB%B0%B1%EC%97%85/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"%EB%B0%B1%EC%97%85/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"%EB%B0%B1%EC%97%85/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"%EB%B0%B1%EC%97%85/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"%EB%B0%B1%EC%97%85/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"%EB%B0%B1%EC%97%85/index.html": "8b588e304312d9554b2dddadf0873b7b",
"%EB%B0%B1%EC%97%85/main.dart.js": "4bbc599e08274cf8d53c0535f9a4b345",
"%EB%B0%B1%EC%97%85/manifest.json": "f629a8ac11dd2c7ac6c47d62552c6386",
"%EB%B0%B1%EC%97%85/version.json": "83ccaac0cb4faaa1248ed589abb96249"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
