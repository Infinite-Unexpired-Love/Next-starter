This is a starter template for [Learn Next.js](https://nextjs.org/learn).
****
Debug History
-

    nextjs文档没有及时更新（截止2023/5/16），learn部分做的太差了。
-   使用getStaticProps函数返回值时，next会传递一个对象（目前我也不知道叫啥），但需要的内容全在该对象的pageProps属性中。例如，当你在getStaticProps函数中返回props:{allPostsData}时，主组件Home的形参应为{pageProps}，在函数内部再从pageProps内取出allPostsData属性。

-   已发现问题原因：在官方的github源码内，_app.js/tsx文件中函数的形参声明有问题——在错误的地方展开了pageProps对象从而导致了在返回结果时没能展开pageProps。
