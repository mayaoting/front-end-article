/*
 * @Author: your name
 * @Date: 2021-02-01 14:26:06
 * @LastEditTime: 2021-02-03 16:52:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
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
      ['/04', '4.vue项目中全局引入自定义模板'],
      ['/05', '5.Typescript学习文档']
      ['/promise', '6.实现myPromise源码']
    ],
    smoothScroll: true,
  }
}