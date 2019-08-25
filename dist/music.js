const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '听妈妈的话',
        artist: '周杰伦',
        url: 'http://www.ytmp3.cn/down/51577.mp3',
        cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=379732010,3790916440&fm=26&gp=0.jpg'
		},
      {
        name: '夜曲',
        artist: '周杰伦',
        url: 'http://www.ytmp3.cn/down/50846.mp3',
        cover: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=379732010,3790916440&fm=26&gp=0.jpg'
      },
	  {
        name: '倔强',
        artist: '五月天',
        url: 'http://www.ytmp3.cn/down/30591.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566751127399&di=7987f167d1cdc9f9c152c86029aba392&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa7500eeefcd6212456942aea5c445419466eb4721953a-GWNrF3_fw658'
	  },
      {
        name: '月半小夜曲',
        artist: '李克勤',
        url: 'http://www.ytmp3.cn/down/71171.mp3',
        cover: 'http://img3.imgtn.bdimg.com/it/u=2584514338,2251882779&fm=26&gp=0.jpg'
      }
    ]
});