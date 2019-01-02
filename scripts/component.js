/**
 * component模版快速生成脚本,执行命令 npm run com `组件名`
 */
 
 const fs = require('fs');

const dirName = process.argv[2];
const capPirName = dirName.substring(0,1).toUpperCase() + dirName.substring(1);
if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run com test');
  process.exit(0);
}

//页面模板
const indexTep = `import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './${dirName}.scss'

class ${capPirName} extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps = {}

  render() {
    return (
      <View className='fx-${dirName}-wrap'>
        This is ${dirName} Component.
      </View>
    )
  }
}

export default ${capPirName}
`

// scss文件模版
const scssTep = `
${dirName}-wrap {
    width: 100%;
 }
`

fs.mkdirSync(`./src/components/${dirName}`); // mkdir $1
process.chdir(`./src/components/${dirName}`); // cd $1

fs.writeFileSync(`${dirName}.js`, indexTep); //js
fs.writeFileSync(`${dirName}.scss`, scssTep); // scss
