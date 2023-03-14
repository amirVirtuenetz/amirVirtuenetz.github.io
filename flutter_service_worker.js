'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c01e8087def344930602e301e842d947",
".git/config": "2dc4e1522d4f4d3a9d5a4abd217ee1bc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "074e83326fd99802069f93b1180dfec4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5a27e58dd4081b3b26ec1dc579806a3d",
".git/logs/refs/heads/master": "5a27e58dd4081b3b26ec1dc579806a3d",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/01/60a1ed841717f4788a7efd29dcafb99104e8e3": "e32c86d6115e766c45eec49c165b3ea2",
".git/objects/04/9f0ac5251a62cf7b1de9fcc1649e95df2d3f91": "ef9ab93cb437f26d46bea1a46b25fea6",
".git/objects/08/c675b26f7946d9901349c3a32f71bdf2de2d87": "a0db240359a5a8d335df2e93d3949b03",
".git/objects/0a/773123fffe0ef5a28ff21f7a0d9e5a902eac80": "e1868472026b5c195d103607f5603a8a",
".git/objects/0b/6573479b5568167b994a249cc12c8cdae9ac2e": "23ba01d2a6b16ae3227aa6b5ada5f762",
".git/objects/0c/9cf5f9711d491c291d4cd9a21303fac381e3b0": "ffdb04b868cf92110364774cfffb2658",
".git/objects/0d/3bf6a0e591f7b803b3f55300020ce244f419c3": "e74be798a85a267db0e4e1c1e68d3b4f",
".git/objects/0e/9f983524e32738c4a56f8b229c74b606e32467": "937fa4e1eed81b73a2550478a149d681",
".git/objects/11/20c0932104eadc5cda62e392860bb302e31116": "69393efa7f911471b27dd4685d42a549",
".git/objects/13/0f76d158db6099f956d45d8b91aa740a74e5ed": "576889bc358246879fc30f25a8a199ae",
".git/objects/13/132cfbf05463c6adccd4a03e61564f42f374de": "59ec386373539f8a3d5211f865c9a44c",
".git/objects/18/814dfc7d287de03260ae48da62186f0ed02074": "bcf1113a5caf0dbee4117fbc3664df28",
".git/objects/1a/3571d26d6be2a4d34d39539f715192719b5a5f": "721b8ed92447c00bd9a64b87dd506b6f",
".git/objects/1b/b2c5f9767e244fd54b23e19df851ba557d9bda": "9a636fb6fe0e07250f24de5c7936009d",
".git/objects/1c/6e0573d247fee32e07a3d85951abcf8be3b41b": "0c8ea22010a487001065ebe62719edc1",
".git/objects/1f/d25dbf307f9f3cb3c721cbe96a54c14a64ac71": "e6796b1d142bd436224f161e8305c982",
".git/objects/22/1714dd347682bd67bc08b66e3b84e1a2815c29": "5797b635ff92943cadd04011f7e9bf99",
".git/objects/23/0295ffd499ade557522e7a9a77f37c4e630373": "88ea6c0bedb6bcf2de1ba75f6fd46946",
".git/objects/26/8df511fffb9ad7550b652a2ebc165834c702b6": "349361940fbcb2922832d37f5e8c99ac",
".git/objects/26/ccc6c3827323520ef3c18e623183e30eeb139e": "639fd837ea1c200f22841210944c9120",
".git/objects/27/8ceaa36bad2675e77e002b95238e3148a19d86": "ea0e1ac38ffae0b4c5e8ce97deb6e955",
".git/objects/29/7dfe4676939c54fdd7cf2a5f74e17c1b6b0d00": "42517d85f8bbdfa6a0d9feff40093d25",
".git/objects/2b/66261923ba13873389ee3612fe629583e7ae31": "f290b17fdec30481fe24d0c489a2f6c3",
".git/objects/36/57a84bab51c47152ead5afe79d1794dea436f8": "955ec86eddd1354d94caa4bc115605d8",
".git/objects/36/f17942b9d0f63182c65c58f0554eaec49cc4c2": "e63fc97a0dcb3a43359d9628ddae2588",
".git/objects/3c/4029b2afc3885ee56c7bbbf341158934bbe8cb": "b2332908f26b7205f3b3a43c82406bde",
".git/objects/3d/1b6f42857cf8678f1f750b0096f26b38ca14e0": "df3d952949cfbfa416dfdc5c214d4f33",
".git/objects/44/c70ef8f155a4510a80ef5d6a69e63df7e45e6c": "87228a9ff21e96165ce14683836ac855",
".git/objects/45/b4ff75fa40f5638de5db79285e21d3fd9cb1c1": "05bbc88524f172e857776e4e62410bad",
".git/objects/4b/168cd4aa275496fb259c4e2bc85d8eb7368fdf": "f75f0f861defb364d6b997ce558a2f7f",
".git/objects/51/05642613a4b6734e84362a61e4388d9ef162d4": "995165ca7c8a6851dab968995a41033d",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/53/a7e64c6399cfd6096bab4d1062f72f2fdc6244": "2862cc18d4682397cbacc56002661b91",
".git/objects/53/fd3b35a486bba8a07c874d2aab169ac0577cb2": "748e00105b40152be139eb1238c5720f",
".git/objects/57/85dae16a021097023092e02dc275cbbbefd283": "ffe72ef9711f9e529ade3ea47b02f351",
".git/objects/58/0331fb6751ddd642e035f78014af455b25d046": "cecd65c1e58fc83bb8e52694db45d361",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5d/03ac6427f019d03e2449625f90cd39ab485ff6": "ec08e708fc5483b131a7906c5f2395ca",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/5de51b9e20f7d82221bc2efec54fbbce06d11c": "c4d2fd3171f15c53763e3ae793aa562b",
".git/objects/66/c4f8144c2d484c93c44a146857c98b4669f66a": "1841c55c7940303e0df7a599df46c5c2",
".git/objects/67/29aa2a4f0588d365672e87a4c122f0fe8626b0": "bd2dab139f673245200a8de132feb365",
".git/objects/6a/48db1384b2aec021b2f5232f8221114d241cd9": "03a3a580006d20b4fa2429e7a3d3b4d8",
".git/objects/6b/89218b4de06c6745f10af33b7d6b86f6168793": "e7d342e346cc45689a565857903366fe",
".git/objects/74/e817bd8fe324df4fd1d43f8d916dfc788195ca": "1ae4def02ad324d8daba05ddcae11204",
".git/objects/75/6803407d8521d094cf266eed9566a96d0a18a2": "80ae987a909148284ffece70e2677b01",
".git/objects/7b/46b085bccf60a7e5b8cc3d1b4bddfb4e503308": "f056b17dd04c2e89751bb22fe2e8d7c7",
".git/objects/7f/595a0eadf7461b25a687a1444002e7f9af7936": "8042a091cb05abea82f0ae5a9c7f09fe",
".git/objects/80/4b37ae376cee8fbfe582f360cbc41fd6169614": "fb79523ab93ee7eed2f0809e938d77e4",
".git/objects/81/a4aa3646ea3849936209b3e2bc626ad8505f10": "457da88044d6439374857cb33473015f",
".git/objects/82/6bac1a109d8a8829b783cd1beb20357ae20648": "f6d425f8cbe674a7bc3049f2772726ea",
".git/objects/87/f3779ed6ba2cf6c4413e80150e1690835536d1": "b8b2050cbe5f141655ba2f6eb89b09b5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/cf99f8a48ab095d0b55d8fad1cb9b47493413e": "662ab72cc445278724706aeb5115566d",
".git/objects/8c/0e1b1810e2e22efd75fa43d444600ffe67f1ad": "91b4638bd322754cfe853a7f42579032",
".git/objects/93/9c8f2977d922f7f821f7b4714d1ee6c55143df": "5974801f566862b015609f743dc5d535",
".git/objects/95/2ca04b01115cda6835c12bdae4d0443b05fe44": "8cd7f9338630eca18c824a4c41ebe897",
".git/objects/95/6f61e8373e19c5d86ad23bcd2ecfcc83a58b6d": "73ac1b94b54e2f3f02491df5715a8411",
".git/objects/96/b5d7679bd990da57bc10b0eb5212548f02b2e4": "4b290be13bf1deeb5f731349569625c7",
".git/objects/9f/1103ab6a4525ac2f88184fb14d8157a85e6951": "535784757d972d759abb44b6ff7f0ca2",
".git/objects/a1/840bea2b0bcea7c602c92303b706149ed80d5b": "41e7adee438621f6f25557d3248be671",
".git/objects/a5/79940bd3942bae797f05c26798470ffe9a0916": "ad9aef0cb0ee41ef0ed472a6a44ff2d8",
".git/objects/a8/e92834a33a21a8c2cf2094d11ab471a4c39f7b": "c9935d1216fd33114f5e412cb0d40a7c",
".git/objects/af/e2c6577ce68cb0171573065ab96526a37f75a0": "761a20444f04dc974f6126e5cc6a82f2",
".git/objects/b0/022b8f0e306cfd859ce5e94d0fd2f9c31507c9": "fa472b7a6b6adcd8642fc1b6620f47d9",
".git/objects/b1/b920f6eb677784e464b97fb93d25ee561839af": "c8eaf6b3f892c12b2d1e4d8d93a2c072",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/b7/172fd05197a307964d71bc10bbfcfbd47bc079": "2d86da9f28c927647da504401fb8b4c9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/bd285af0f6af381b576528ac3f0e16a32c95af": "3322e3075b8c5b4cbff2acea474c72cd",
".git/objects/be/af9d524c1f2b8712aa90e22875905127cb8452": "d5c06ccb8c61bde4232c05f4adc8bd84",
".git/objects/be/f0e79d3eaf94808d8017e9eb6d2e72c73e17f1": "b8cc8b1ac4ce49cdde91a64e19ada949",
".git/objects/c3/025864696dc2263375db7f54525be57567f46e": "f1ea2bb7c6312901d632d3e8e74fa5ef",
".git/objects/c3/db974e98188250516b09738f07a555a4bf40f5": "c981eb033515e58882447c03b19e7e2b",
".git/objects/c6/118fb5b35ccf1b9fab3faa0ae024355910758b": "460ef32b8a5c385af42be39acd3d7de6",
".git/objects/cb/6e7c90ead6098526ba7906a8a4f4c73137a428": "84213646b3621ad1796081bbb964d2c9",
".git/objects/cc/73944ac4c2007ee8ca88ec272b41c4cec02980": "1f81621d5d800555d8db90222d82a987",
".git/objects/d2/18b347dfc54a9d62cbbb2b3ac839f2c51e9ec7": "c2f0c1a917201da822e3663f170bbee6",
".git/objects/d3/c6508e337f501611a06b8f2829f3b0e5505564": "bb7b565f52eb2f9e0055423b2798a6f3",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/a6da50cfe8d9673638272e815badcc95fe4850": "c212e3664e1000c90eaca6faea6d1647",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/d98c9f8becfbff2c82b24d81db7dee79543676": "856425a3ebfcd29ea3d30cc2e63a3f5a",
".git/objects/e4/670fede93d8589736bddf47ac6a626660c46ce": "9ce823ffeb57684ade6c540161b9a3b9",
".git/objects/e7/2ded047e834b39108dbd791f0aec84df7754a7": "4154decd3c9998028833de7571e1df87",
".git/objects/e8/4ec0ea89cc9741b1a3bf0523dc5744845ba0c0": "c8a9349d8804a2550ecfbe4841e2c681",
".git/objects/e8/cf8d2938af9489907601a3a9dd286f16772d1a": "871cabbdcb58bc70348df97df0377873",
".git/objects/ea/ae32bb211090c5d65b28c5260dac34a3fb81b8": "2e187265973a3d9700a3e68d9f9c2d08",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/a75b0db99454789bdca18e2d95bd567d412bcb": "fa1c1e67a73bfce579ec8e73919ff83a",
".git/objects/ee/cc2b9bc1053b8eb76d31d1517776a11bebc06e": "48de619690fc8602fe4211e3c6717276",
".git/objects/f3/130b7b768a71ce6b92d5b266fe05b014d56894": "2525140bc15f9402e5de94c5e5d61491",
".git/objects/f3/3beeed309bba7133c87500ae910e7473bbaa1c": "4138f2fe0d0adcbfd9a4d5ddee8bb57c",
".git/objects/f3/b98e8699580507dedadaee21fae725d3aa09f7": "cc70bbff237abf2b1bd7c742e7afcf99",
".git/objects/f8/28aac82ed55401a6eda4438b590d1c5ab9788d": "901a2959a5996c179317d166e766e199",
".git/objects/f9/96e5cb0724f12df15ff45973abbeeb03dd3da5": "58c89e43c1d5f74bacd07a0586a0a2ff",
".git/objects/fa/4658d48b9a49922fa162eb9c9af3b7c1c7dcba": "22cbb48b3bfa95604d45bc31b2e9aecb",
".git/objects/fc/227bd536aec8c2a77e502d71ef220ce7b8e0ed": "8c3b99cd382e4b9716548ddc63993a91",
".git/objects/fe/dc55bc00fd21e50ea4c128c11a2f1e177e85e4": "fa49d5e2b59fdc6ca10ee4743d342fba",
".git/objects/ff/c5dc58c3eef2bf5d02599e1ac115cfac116d23": "5d45ca4f54f9110c3e07f993debbfc5c",
".git/refs/heads/master": "64893c76c697b83ec85950d8f688f7ba",
"assets/AssetManifest.bin": "7b662c10257dc44d6eb74933aa765c47",
"assets/AssetManifest.json": "5d41049d475500543c487d0969ccffd6",
"assets/assets/avaters/Avatar%25201.jpg": "60f969aae689291e30cffc6deafd1ec2",
"assets/assets/avaters/Avatar%25202.jpg": "9eecb4a8f2da90198bf8c4f8c3e8c527",
"assets/assets/avaters/Avatar%25203.jpg": "4431bc261ac4f57a09dc1e041b32b4d1",
"assets/assets/avaters/Avatar%25204.jpg": "95617f142e8dcfa6547ea80557eee016",
"assets/assets/avaters/Avatar%25205.jpg": "405a74c93f4806312fcd25e7722d9f90",
"assets/assets/avaters/Avatar%25206.jpg": "57b1f154ef47c7a76a78544e9e6af44f",
"assets/assets/avaters/Avatar%2520Default.jpg": "fe9d7eaf1b437a1e6c84f1e6fdb77dcf",
"assets/assets/Backgrounds/Spline.png": "ff232f0cf3ebd732ca4383c381450714",
"assets/assets/fonts/Inter-Regular.ttf": "eba360005eef21ac6807e45dc8422042",
"assets/assets/fonts/Inter-SemiBold.ttf": "3e87064b7567bef4ecd2ba977ce028bc",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/icons/apple_box.svg": "3f634f4f80414d88ada3193069b4f961",
"assets/assets/icons/Arrow%2520Right.svg": "82b7f5520958b35402d7576d20fb5186",
"assets/assets/icons/call.svg": "43ec9835e9f4d5ed09b96e6102270f32",
"assets/assets/icons/code.svg": "516c08c5e685a49b79fa87d0cc2f7641",
"assets/assets/icons/email-icon.svg": "8f9fc9f9553cb7a07f158399c338ec69",
"assets/assets/icons/email.svg": "1ae885eb1fdb247400ac0400112ddefb",
"assets/assets/icons/email_box.svg": "a09e0cb77621a100cfe8c98593b9f422",
"assets/assets/icons/eye-off.svg": "59bf2b8755d2109322c3de630dd7a5f6",
"assets/assets/icons/eye-on.svg": "e51ecc5222d85edd05adc881871f33f5",
"assets/assets/icons/facebook.svg": "a439e3e08fd1c1721c7aee597e77dd13",
"assets/assets/icons/google.svg": "1a0f9aa57f2b71ee7604f146ec9352fb",
"assets/assets/icons/google_box.svg": "9f643ad1c6e2731879c4eb501357d784",
"assets/assets/icons/home.svg": "a016e892bcf10a348014896e71242a3b",
"assets/assets/icons/instagram.svg": "b3b7a0210038e9a9f2fcb54f17d0f1c1",
"assets/assets/icons/ios.svg": "45b815957b353fc2c4b56e2e3779d6f3",
"assets/assets/icons/library.svg": "6d34079ad8840f594ac5b6571cff92a9",
"assets/assets/icons/multiple-users.svg": "60a31d42ade439d4af199816a962d5ca",
"assets/assets/icons/password-icon.svg": "c12ca346399c34e703c0fbc40b8f8fbc",
"assets/assets/icons/password.svg": "64a726ac604a3e6228987eeb9c10bc71",
"assets/assets/icons/profile_img.png": "bdd25e977a6858b7413f720188f721c3",
"assets/assets/icons/search.svg": "7e06de60abc67865a5c01663ec763933",
"assets/assets/icons/twitter.svg": "72e85266654b092eded13553abc64574",
"assets/assets/icons/User.svg": "5eb1b43b454f1e763da0928d4841c138",
"assets/assets/images/bizCardLogo.png": "76ff7654f61ab8fe222d5e516385049b",
"assets/assets/images/coverImage.jpg": "d548645b2cd3dbe1aa24019eb5c4dc1b",
"assets/assets/images/facebook.png": "b53eaee4a6eae96fb3036d722f97c19d",
"assets/assets/images/git.png": "5c06dbd786e632cc839d1b2816946d2f",
"assets/assets/images/instagram.png": "72a4b561233cbeed9b490e76dd57af83",
"assets/assets/images/instagram1.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/linkedIn.png": "40b5c0522304acc161f7db845dd66cd3",
"assets/assets/images/twitter.png": "c228a51f52d262f60b78c320bb8fb782",
"assets/assets/images/whatsapp.png": "6d4d8f6a54c49c64c81d3408745c60b4",
"assets/assets/RiveAssets/button.riv": "c8ffe2900d31d8236247928cd7c2b5f3",
"assets/assets/RiveAssets/check.riv": "14f9269423eabd7e2e10cafdc6ad4d41",
"assets/assets/RiveAssets/confetti.riv": "ad0d13cbea799085305316f0e8118274",
"assets/assets/RiveAssets/house.riv": "3ac77437a4c56b5143d6ceca83dd61d9",
"assets/assets/RiveAssets/icons.riv": "3d29f9acebef13f01f371b59e84e664b",
"assets/assets/RiveAssets/menu_button.riv": "f8fdfd9fd8dc7873dfac6f005f3233c1",
"assets/assets/RiveAssets/shapes.riv": "8839d67714d5e9c52b3e0dbb2b1e89c1",
"assets/assets/shapes/Circle.svg": "27c4568daf6d16902fc3b45761882799",
"assets/assets/shapes/Hexagon.svg": "e5e146b3cf9e2ac19e32c94073eedbc3",
"assets/assets/shapes/Triangle.svg": "69dc6aa6ed087440a346d8b0ecc8dc60",
"assets/FontManifest.json": "2713a9f6c7ad1f89ffa129d8275a14fd",
"assets/fonts/MaterialIcons-Regular.otf": "5d3706a0c29882cbe5170566e48d9cdc",
"assets/NOTICES": "124c9a130af9d927d6d8b3c4471733e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "93cafdfb09fb987b24d77f3667baca43",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0694916c8bb69ac850e24da716a6eb48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "99d45f98c5ac98517eb5cba57d3fabc0",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "3e7c7e90ff8e206f4023c12e31b0d058",
"canvaskit/canvaskit.wasm": "663e2d8dc95b3eb6e813db7288f90115",
"canvaskit/chromium/canvaskit.js": "f39c7fbb70c7d277f537a7c366d75533",
"canvaskit/chromium/canvaskit.wasm": "b5bbefa86d22f7a1e94cda2a490b58bf",
"canvaskit/skwasm.js": "569eed0f1ca775eb9a112f5821ad278b",
"canvaskit/skwasm.wasm": "e5af8ff2312130582de5a1d858b06c25",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f7a2778cd9f2042f2b4aa2f307c3bdc4",
"/": "f7a2778cd9f2042f2b4aa2f307c3bdc4",
"main.dart.js": "efd5ed975665f1da1dab5538447905a4",
"manifest.json": "b1d89c882a9f1ced1be9476717b005a0",
"version.json": "7932913664c7f9a51688a5be208a2e7b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
