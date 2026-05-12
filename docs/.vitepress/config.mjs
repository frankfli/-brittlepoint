import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "脆点理论 Wiki",
  description: "企业重大经营风险检查框架",

  locales:{
    root:{ label:'中文',lang:'zh-CN'},
    en:{ label:'English',lang:'en-US',link:'/en/' },
  },


  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '更新日志',link:'/blog' },
    ],

  sidebar:generateSidebar({
    documentRootPath: 'docs',

  //层级控制参数
    useFolderTitleFromIndexFile:true,   //文件夹标题从index.md读取
    useTitleFromFrontmatter:true,        //文件标题优先从frontmatter读取
    useTitleFromFileHeading:true,         //文件标题其次从#标题读
    collapsed:true,                      //默认折叠子菜单
    collapseDepth:2,                     //默认折叠到第二级（展开后显示第三级）
    removePrefixAfterOrdering:true,      //去掉01-这样的数字前缀
    prefixSeparator:'-',                 //前缀分隔符（如 01-理论基础）

  //链接生成
    convertSameNameSubFileToIndexPage:true,  //同名文件转乘index
    useFolderLinkFromIndexFile:true,   //文件夹链接指向index.md

  //排序控制
    manualSortFileNameByPriority:[
      'index.md',                      //文件夹内的 index.md排在最前
    ],
  //排除文件
    excludeFiles:['.vitepress'],
    excludeFolders:['.vitepress','attachments'],



  }),

   // sidebar: [
   //   {
   //     text: 'Examples',
   //    items: [
   //       { text: 'Markdown Examples', link: '/markdown-examples' },
   //       { text: 'Runtime API Examples', link: '/api-examples' }
   //     ]
   //   }
   // ],

  search:{ provider:'local' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],


  footer:{
    message:'脆点理论 Wiki',
    copyright:'Copyright ',


  },

  }
})







