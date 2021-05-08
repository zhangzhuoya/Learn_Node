const URL = require("url");
// const url = new URL.URL('https://nodejs.org/docs/latest-v15.x/api?t=3&u=5#path_path_tonamespacedpath_path');
// const url=new URL.parse('https://nodejs.org/docs/latest-v15.x/api?t=3&u=5#path_path_tonamespacedpath_path')//也可以使用.parse
// console.log(url);
//=> return 
// URL {
//     href: 'https://nodejs.org/docs/latest-v15.x/api?t=3&u=5#path_path_tonamespacedpath_path',
//     origin: 'https://nodejs.org',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'nodejs.org',
//     hostname: 'nodejs.org',
//     port: '',
//     pathname: '/docs/latest-v15.x/api/path.html',
//     search: '',
//     searchParams: URLSearchParams {},
//     hash: '#path_path_tonamespacedpath_path'
//   }

// console.log(url.searchParams.has('a'))//=> return false 判断有没有这个属性
// console.log(url.searchParams.get('t'))//=> return 3 获取t的值

// 把url对象转化为字符串
// let url = {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'nodejs.org',
//     port: null,
//     hostname: 'nodejs.org',
//     hash: '#path_path_tonamespacedpath_path',
//     search: '?t=3&u=5',
//     query: 't=3&u=5',
//     pathname: '/docs/latest-v15.x/api',
//     path: '/docs/latest-v15.x/api?t=3&u=5',
//     href: 'https://nodejs.org/docs/latest-v15.x/api?t=3&u=5#path_path_tonamespacedpath_path'
//   }
// let urls = URL.format(url);//=> return https://nodejs.org/docs/latest-v15.x/api?t=3&u=5#path_path_tonamespacedpath_path
// console.log(urls);

