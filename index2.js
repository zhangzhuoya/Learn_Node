// console.log(module);
// Module {
//     id: '.',
//     path: 'd:\\study\\Learn_Node',
//     exports: {},
//     parent: null,
//     filename: 'd:\\study\\Learn_Node\\index2.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'd:\\study\\Learn_Node\\node_modules',
//       'd:\\study\\node_modules',
//       'd:\\node_modules'
//     ]
//   }

// console.log(require);
console.log(require.resolve("./src"));//得到一个绝对路径,完全没有加载模块:   d:\study\Learn_Node\src\index.js

