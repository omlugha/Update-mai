































const _0x34a31e=_0x13d5;(function(_0x301181,_0x3013ff){const _0x2721f7=_0x13d5,_0x14b1ce=_0x301181();while(!![]){try{const _0x5b4b9a=parseInt(_0x2721f7(0x18b))/0x1*(parseInt(_0x2721f7(0x1a7))/0x2)+-parseInt(_0x2721f7(0x18a))/0x3*(-parseInt(_0x2721f7(0x1b5))/0x4)+-parseInt(_0x2721f7(0x1ca))/0x5*(parseInt(_0x2721f7(0x1a2))/0x6)+-parseInt(_0x2721f7(0x1a4))/0x7+-parseInt(_0x2721f7(0x18c))/0x8*(-parseInt(_0x2721f7(0x1a3))/0x9)+parseInt(_0x2721f7(0x1a8))/0xa+-parseInt(_0x2721f7(0x197))/0xb;if(_0x5b4b9a===_0x3013ff)break;else _0x14b1ce['push'](_0x14b1ce['shift']());}catch(_0x84fa4){_0x14b1ce['push'](_0x14b1ce['shift']());}}}(_0x1175,0xd1f29));const ytdl=require(_0x34a31e(0x194)),yts=require('youtube-yts'),readline=require(_0x34a31e(0x18e)),ffmpeg=require(_0x34a31e(0x1a9)),NodeID3=require(_0x34a31e(0x19b)),fs=require('fs'),{fetchBuffer}=require('./Function'),{randomBytes}=require(_0x34a31e(0x1ba)),ytIdRegex=/(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/;function _0x1175(){const _0x1a1b92=['publishDate','title','search','audioonly','contentLength','response','audioFrequency','683277SZBNXr','231241yIZDVU','32EyHqeI','end','readline','slice','.mp3','getInfo','size','Artist','youtubedl-core','write','WriteTags','8573257QNDVWQ','log','front\x20cover','mp4','node-id3','isArray','audioQuality','thumbnails','toString','test','videoDetails','9534oSRuDu','1507833SvdGib','2939083wHuctp','hex','stdout','2ckRuoz','12706240ClqGek','fluent-ffmpeg','downloadMusic','jpeg','./dustbin/','videoandaudio','audioBitrate','toFormat','length','libmp3lame','Album','audioChannels','Video\x20ID\x20or\x20YouTube\x20Url\x20is\x20required','12YrsGtT','url','exec','getVideoID','mp3','crypto','https://www.youtube.com/watch?v=','is\x20not\x20YouTube\x20URL','ownerChannelName','Title','statSync','audioCodec','buffer','now','author','qualityLabel','Cover\x20of\x20','videos','formats','save','name','2505AmYHZc','split','description','error','isYTUrl','image'];_0x1175=function(){return _0x1a1b92;};return _0x1175();}class YT{constructor(){}static ['isYTUrl']=_0x5c1c44=>{const _0x1c305b=_0x34a31e;return ytIdRegex[_0x1c305b(0x1a0)](_0x5c1c44);};static [_0x34a31e(0x1b8)]=_0x147189=>{const _0x1f7c5f=_0x34a31e;if(!this['isYTUrl'](_0x147189))throw new Error(_0x1f7c5f(0x1bc));return ytIdRegex[_0x1f7c5f(0x1b7)](_0x147189)[0x1];};static ['WriteTags']=async(_0x5bbc0f,_0x4fa490)=>{const _0x5a74dd=_0x34a31e;NodeID3[_0x5a74dd(0x195)]({'title':_0x4fa490[_0x5a74dd(0x1be)],'artist':_0x4fa490[_0x5a74dd(0x193)],'originalArtist':_0x4fa490['Artist'],'image':{'mime':_0x5a74dd(0x1ab),'type':{'id':0x3,'name':_0x5a74dd(0x199)},'imageBuffer':(await fetchBuffer(_0x4fa490['Image']))[_0x5a74dd(0x1c1)],'description':_0x5a74dd(0x1c5)+_0x4fa490['Title']},'album':_0x4fa490[_0x5a74dd(0x1b2)],'year':_0x4fa490['Year']||''},_0x5bbc0f);};static [_0x34a31e(0x185)]=async(_0x32bfbc,_0x421810={})=>{const _0x237a70=_0x34a31e,_0x39ab78=await yts[_0x237a70(0x185)]({'query':_0x32bfbc,'hl':'id','gl':'ID',..._0x421810});return _0x39ab78[_0x237a70(0x1c6)];};static [_0x34a31e(0x1aa)]=async _0x28bb3a=>{const _0x515909=_0x34a31e;try{const _0x550b41=Array[_0x515909(0x19c)](_0x28bb3a)?_0x28bb3a:await this['searchTrack'](_0x28bb3a),_0x45a5eb=_0x550b41[0x0],_0x1eab13=await ytdl['getInfo'](_0x515909(0x1bb)+_0x45a5eb['id'],{'lang':'id'});let _0x3b42a4=ytdl(_0x45a5eb['id'],{'filter':'audioonly','quality':0x8c}),_0x55f0ee=_0x515909(0x1ac)+randomBytes(0x3)[_0x515909(0x19f)](_0x515909(0x1a5))+_0x515909(0x190);_0x3b42a4['on']('error',_0xfe53f=>console['log'](_0xfe53f));const _0x531551=await new Promise(_0xe5eb3d=>{const _0x1c2412=_0x515909;ffmpeg(_0x3b42a4)[_0x1c2412(0x189)](0xac44)[_0x1c2412(0x1b3)](0x2)[_0x1c2412(0x1ae)](0x80)[_0x1c2412(0x1c0)](_0x1c2412(0x1b1))['audioQuality'](0x5)[_0x1c2412(0x1af)]('mp3')[_0x1c2412(0x1c8)](_0x55f0ee)['on'](_0x1c2412(0x18d),()=>_0xe5eb3d(_0x55f0ee));});return await this['WriteTags'](_0x531551,{'Title':_0x45a5eb[_0x515909(0x184)],'Artist':_0x45a5eb['artist'],'Image':_0x45a5eb[_0x515909(0x182)],'Album':_0x45a5eb['album'],'Year':_0x1eab13['videoDetails'][_0x515909(0x183)]['split']('-')[0x0]}),{'meta':_0x45a5eb,'path':_0x531551,'size':fs['statSync'](_0x55f0ee)['size']};}catch(_0x5e7c07){throw new Error(_0x5e7c07);}};static [_0x34a31e(0x19a)]=async(_0x20e34f,_0x115f8c=0x86)=>{const _0x48fe5a=_0x34a31e;try{if(!_0x20e34f)throw new Error(_0x48fe5a(0x1b4));const _0x5a5f16=this[_0x48fe5a(0x1ce)](_0x20e34f)?this[_0x48fe5a(0x1b8)](_0x20e34f):_0x20e34f,_0x17e11f=await ytdl[_0x48fe5a(0x191)](_0x48fe5a(0x1bb)+_0x5a5f16,{'lang':'id'}),_0x42019a=ytdl['chooseFormat'](_0x17e11f[_0x48fe5a(0x1c7)],{'format':_0x115f8c,'filter':_0x48fe5a(0x1ad)});return{'title':_0x17e11f[_0x48fe5a(0x1a1)]['title'],'thumb':_0x17e11f[_0x48fe5a(0x1a1)][_0x48fe5a(0x19e)][_0x48fe5a(0x18f)](-0x1)[0x0],'date':_0x17e11f['videoDetails'][_0x48fe5a(0x183)],'duration':_0x17e11f[_0x48fe5a(0x1a1)]['lengthSeconds'],'channel':_0x17e11f[_0x48fe5a(0x1a1)][_0x48fe5a(0x1bd)],'quality':_0x42019a[_0x48fe5a(0x1c4)],'contentLength':_0x42019a[_0x48fe5a(0x187)],'description':_0x17e11f[_0x48fe5a(0x1a1)][_0x48fe5a(0x1cc)],'videoUrl':_0x42019a[_0x48fe5a(0x1b6)]};}catch(_0x17410b){throw _0x17410b;}};static [_0x34a31e(0x1b9)]=async(_0x6f4243,_0x2fde14={},_0x412ec6=![])=>{const _0x3c00a1=_0x34a31e;try{if(!_0x6f4243)throw new Error(_0x3c00a1(0x1b4));_0x6f4243=this[_0x3c00a1(0x1ce)](_0x6f4243)?_0x3c00a1(0x1bb)+this[_0x3c00a1(0x1b8)](_0x6f4243):_0x6f4243;const {videoDetails:_0x30d0d3}=await ytdl['getInfo'](_0x6f4243,{'lang':'id'});let _0x140e98=ytdl(_0x6f4243,{'filter':_0x3c00a1(0x186),'quality':0x8c}),_0x4e3d41='./'+randomBytes(0x3)[_0x3c00a1(0x19f)](_0x3c00a1(0x1a5))+_0x3c00a1(0x190),_0x12f1d8;_0x140e98['once'](_0x3c00a1(0x188),()=>{const _0x386046=_0x3c00a1;_0x12f1d8=Date[_0x386046(0x1c2)]();}),_0x140e98['on'](_0x3c00a1(0x18d),()=>process[_0x3c00a1(0x1a6)]['write']('\x0a\x0a')),_0x140e98['on'](_0x3c00a1(0x1cd),_0x55f3c1=>console[_0x3c00a1(0x198)](_0x55f3c1));const _0xb5e7ec=await new Promise(_0x38ca9b=>{const _0xf975fc=_0x3c00a1;ffmpeg(_0x140e98)['audioFrequency'](0xac44)[_0xf975fc(0x1b3)](0x2)['audioBitrate'](0x80)[_0xf975fc(0x1c0)](_0xf975fc(0x1b1))[_0xf975fc(0x19d)](0x5)['toFormat'](_0xf975fc(0x1b9))['save'](_0x4e3d41)['on'](_0xf975fc(0x18d),()=>{_0x38ca9b(_0x4e3d41);});});return Object['keys'](_0x2fde14)[_0x3c00a1(0x1b0)]!==0x0&&await this[_0x3c00a1(0x196)](_0xb5e7ec,_0x2fde14),_0x412ec6&&await this[_0x3c00a1(0x196)](_0xb5e7ec,{'Title':_0x30d0d3[_0x3c00a1(0x184)],'Album':_0x30d0d3[_0x3c00a1(0x1c3)]['name'],'Year':_0x30d0d3[_0x3c00a1(0x183)][_0x3c00a1(0x1cb)]('-')[0x0],'Image':_0x30d0d3[_0x3c00a1(0x19e)][_0x3c00a1(0x18f)](-0x1)[0x0][_0x3c00a1(0x1b6)]}),{'meta':{'title':_0x30d0d3[_0x3c00a1(0x184)],'channel':_0x30d0d3[_0x3c00a1(0x1c3)][_0x3c00a1(0x1c9)],'seconds':_0x30d0d3['lengthSeconds'],'description':_0x30d0d3['description'],'image':_0x30d0d3[_0x3c00a1(0x19e)]['slice'](-0x1)[0x0][_0x3c00a1(0x1b6)]},'path':_0xb5e7ec,'size':fs[_0x3c00a1(0x1bf)](_0x4e3d41)[_0x3c00a1(0x192)]};}catch(_0x486df6){throw _0x486df6;}};}function _0x13d5(_0x6ff961,_0x2e5b5d){const _0x11757e=_0x1175();return _0x13d5=function(_0x13d504,_0x5cf5ee){_0x13d504=_0x13d504-0x182;let _0x420ac3=_0x11757e[_0x13d504];return _0x420ac3;},_0x13d5(_0x6ff961,_0x2e5b5d);}module['exports']=YT;





