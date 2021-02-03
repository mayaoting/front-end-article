/*
 * @Author: your name
 * @Date: 2021-02-01 14:26:06
 * @LastEditTime: 2021-02-03 16:52:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mini-componentsd:\git-project\front-end-article\docs\.vuepress\config.js
 */

module.exports = {
  base: '/front-end-article/',
  title: 'front-end-articles',
  themeConfig: {
    sidebar: [
      ['/', '简介'],
      ['/01', '1.introduce'],
      ['/02', '2.union standard'],
      ['/03', '3.webpack 学习点'],
      ['/04', '4.vue项目中全局引入自定义模板']
    ],
    smoothScroll: true,
  }
}