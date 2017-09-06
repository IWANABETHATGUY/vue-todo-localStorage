<template>
	<div class="container">
		<mu-appbar></mu-appbar>
		<mu-row>
			<mu-col desktop="20">
			</mu-col>
			<mu-col desktop="60">
				<ul class="list" ref="list">
					<li class="item"  v-for="(item, index) in items" :key="item">
						<mu-checkbox :label="item" @click.native.self="change(index, $event)" v-model="result[index]" uncheckIcon="favorite_border" checkedIcon="favorite"></mu-checkbox>
					</li>
				</ul>
			</mu-col>
			<mu-col desktop="20"></mu-col>
		</mu-row>

	</div>
</template>

<script>
	import { debounce } from 'lodash';
	export default {
		data() {
			return {
				items: ["手写jsonp的实现", "手写链表倒数第K个查找 ", "http请求头，请求体，cookie在哪个里面？url在哪里面？", "原型链的解释", "对闭包的理解，实现一个暴露内部变量，而且外部可以访问修改的函数", "基本的数据类型", "基本的两列自适应布局", "unix中常用的命令行", "OSI模型，HTTP,TCP,UDP分别在哪些层", "解释平衡二叉树，以及在数据结构中的应用（红黑树）", "快排的时间复杂度和空间复杂度", "手写一个jQuery插件", "在jquery方法和原型上面添加方法的区别和实现，以及jquery对象的实现", "手写一个递归函数", "对前端路由的理解？前后端路由的区别？", "介绍一下webpack和gulp，以及项目中具体的使用", "你对es6的了解", "解释一下vue和react，以及异同点", "关于平衡二叉树", "前后端分离的意义以及对前端工程化的理解", "使用css实现一个三角形", "用promise手写ajax", "手写一个类的继承，并解释一下", "解释一下call函数和apply函数的作用，以及用法", "你说自己抗压能力强，具体表现在哪里？", "对前端前景的展望，以后前端会怎么发展", "手写第一次面试没有写出来的链表问题，要求用es6写", "平时是怎么学技术的？", "平时大学里面时间是怎么规划的？", "接下来有什么计划？这个学期和下个学期的计划是？", "项目中遇到的难点，或者你学习路上的难点", "你是通过什么方法和途径来学习前端的", "手写一个简单遍历算法", "解释一下react和vue，以及区别", "你在团队中更倾向于什么角色？", "对java的理解", "介绍node.js，并且介绍你用它做的项目", "手写一个js的深克隆", "for函数里面setTimeout异步问题", "手写归并排序", "介绍自己的项目", "实现两个数组的排序合并", "手写一个原生ajax", "手写一个promise版的ajax", "手写实现一个promise", "手写实现requireJS模块实现", "手写实现jquery里面的insertAfter", "react和vue的介绍以及异同", "AMD和CMD，commonJS的区别", "介绍一下backbone", "了解过SEO吗？", "低版本浏览器不支持HTML5标签怎么解决？", "用js使低版本浏览器支持HTML5标签 底层是怎么实现的？", "实现一个布局：左边固定宽度为200，右边自适应，而且滚动条要自动选择只出现最高的那个", "画出盒子模型，要使谷歌浏览器的盒子模型显示得跟IE浏览器一致（让谷歌跟ie一致，不是ie跟谷歌一致），该怎么做？", "手写JS实现类继承，讲原型链原理，并解释new一个对象的过程都发生了什么", "Array对象自带的方法，一一列举", "若干个数字，怎么选出最大的五个", "Array对象自带的排序函数底层是怎么实现的？", "常用的排序算法有哪些，介绍一下选择排序", "了解navigator对象吗？", "手写一个正则表达式，验证邮箱", "link和@import引入CSS的区别？", "刚才说有些浏览器不兼容@import，具体指哪些浏览器？", "介绍一下cookie,localstorage,sessionstorage,session", "jquery绑定click的方法有几种", "你的优点/竞争力", "移动端适配问题", "react的难点在哪里", "做过css动画吗", "如何优化网站", "以后的规划", "你做过最困难的事情是啥？", "css3 html5新特性", "闭包，ES6，跨域", "问做过啥项目，用到什么技术，遇到什么困难", "兼容性", "盒子模型", "Array的unshift() method的作用是什么？如何连接两个Array？如何在Array里移除一个元素？", "用纸笔写一个Closure，任意形式和内容", "知不知道Array-like Object？", "如何用Native JavaScript来读写Cookie？", "知不知道CSS Box-model？", "如何做一个AJAX Request？", "Cross-domain access有没有了解？", "前端安全方面有没有了解？XSS和CSRF如何攻防？", "HTTP Response的Header里面都有些啥？", "知不知道HTTP2？", "输入URL后发生了什么？", "new operator实际上做了什么？", "面向对象的属性有哪些？", "做一个两栏布局，左边fixed width，右边responsive，用纸笔手写", "讲一下AJAX Request", "讲一下Cross-domain access", "介绍一下做过的项目", "问到了多个服务器怎么弄，架构之类的", "angular的渲染流程", "脏检查", "nodejs的架构、优缺点、回调", "css 盒模型", "css 布局，左边定宽右边自适应", "冒泡和捕获，事件流哪三个阶段？", "实现事件代理", "原型链", "继承的两种方法", "ajax，原生ajax的四个过程", "闭包，简单说一个闭包的应用，然后闭包的主要作用是什么", "css:两个块状元素上下的margin-top和margin-bottom会重叠。啥原因？怎么解决？", "js：写一个递归。就是每隔5秒调用一个自身，一共100次", "cookie和session有什么区别", "网络分层结构", "你的不足是什么？", "做了那么多项目，有没有自己的归纳总结", "工程怎么进行文件管理", "less和sass掌握程度", "Cookie 是否会被覆盖，localStorage是否会被覆盖", "事件代理js实现", "Css实现动画效果", "Animation还有哪些其他属性", "Css实现三列布局", "Css实现保持长宽比1:", "Css实现两个自适应等宽元素中间空10个像素", "requireJS的原理是什么", "如何保持登录状态", "浮动的原理以及如何清除浮动", "Html的语义化", "原生js添加class怎么添加，如果本身已经有class了，会不会覆盖，怎么保留？", "Jsonp的原理。怎么去读取一个script里面的数据？", "如果页面初始载入的时候把ajax请求返回的数据存在localStorage里面，然后每次调用的时候去localStorage里面取数，是否可行。", "304是什么意思？有没有方法不请求不经过服务器直接使用缓存", "http请求头有哪些字段", "数组去除一个函数。用arr.splice。又问splice返回了什么？应该返回的是去除的元素。", "js异步的方法（promise，generator，async）", "Cookie跨域请求能不能带上", "最近看什么开源项目？", "commonJS和AMD", "平时是怎么学习的？", "为什么要用translate3d？", "对象中key-value的value怎么再放一个对象？", "Get和post的区别？", "Post一个file的时候file放在哪的？", "说说你对组件的理解", "组件的html怎么进行管理", "js的异步加载，promise的三种状态，ES7中的async用过么", "静态属性怎么继承", "js原型链的继承", "jquery和zepto有什么区别", "angular的双向绑定原理", "angular和react的认识", "MVVM是什么", "移动端是指手机浏览器，还是native，还是hybrid", "你用了移动端的什么库类和框架？", "移动端要注意哪些？", "适配有去考虑么，retina屏幕啊？", "rem是什么？em是什么？如果上一层就是根root了，em和rem等价么？", "怎么测试的？会自动化测试么？", "你觉得你什么技术最擅长？", "你平时有没有什么技术的沉淀？", "单向链表怎么查找有没有环？", "怎么得到一个页面的a标签？", "怎么在页面里放置一个很简单的图标，不能用img和background-img？", "正则表达式判断url", "怎么去除字符串前后的空格", "实现页面的局部刷新", "绝对定位与相对定位的区别", "js轮播实现思路", "使用js画一个抛物线，抛物线上有个小球随着抛物线运动，有两个按钮能使小球继续运动停止运动", "java五子棋，说下实现思路", "如何让各种情况下的div居中(绝对定位的div,垂直居中,水平居中)？", "display有哪些值？说明他们的作用", "css定义的权重", "requirejs实现原理", "requirejs怎么防止重复加载", "ES6里头的箭头函数的this对象与其他的有啥区别", "tcp/udp区别", "tcp三次握手过程", "xss与csrf的原理与怎么防范", "mysql与 MongoDB的区别", "w3c事件与IE事件的区别", "有没有上传过些什么npm模块", "IE与W3C怎么阻止事件的冒泡", "gulp底层实现原理", "webpack底层实现原理", "gulp与webpack区别", "vuejs与angularjs的区别", "vuex是用来做什么的", "说下你知道的响应状态码", "ajax的过程以及 readyState几个状态的含义", "你除了前端之外还会些什么？", "cookie与session的区别", "一些关于php与java的问题", "你觉得你哪个项目是你做的最好的", "说说你在项目中遇到了哪些困难,是怎么解决的", "前端优化你知道哪些", "webpack是用来干嘛的", "webpack与gulp的区别", "es6与es7了解多少", "说下你知道的响应状态码", "看过哪些框架的源码", "遇到过哪些浏览器兼容性问题", "清除浮动有哪几种方式,分别说说", "你知道有哪些跨域方式,分别说说", "JavaScript有哪几种类型的值", "使用 new操作符时具体是干了些什么", "学习前端的方法以及途径", "怎么实现两个大整数的相乘，说下思路", "你学过数据结构没,说说你都了解些什么", "你学过计算机操作系统没,说说你都了解些什么", "你学过计算机组成原理没,说说你都了解些什么", "你学过算法没,说说你都了解些什么", "说下选择排序,冒泡排序的实现思路", "用过哪些框架", "让你设计一个前端css框架你怎么做", "了解哪些设计模式说说看", "说下你所了解的设计模式的优点", "vue源码结构", "状态码", "浏览器缓存的区别", "304与200读取缓存的区别", "http请求头有哪些,说说看你了解哪些", "js中this的作用", "js中上下文是什么", "js有哪些函数能改变上下文", "你所了解的跨域的方法都说说看你了解的？", "要是让你自己写一个js框架你会用到哪些设计模式", "平常在项目中用到过哪些设计模式,说说看", "一来给了张纸要求写js自定义事件", "前端跨域的方法", "call与apply的区别", "h5有个api能定位你知道是哪个吗？", "vue与angularjs中双向数据绑定是怎样实现的？", "webpack怎样配置？", "nodejs中的文件怎么读写？", "link和@import有什么区别？", "cookies，sessionStorage 和 localStorage 的区别", "看过哪些前端的书？平时是怎么学习的", "说下你所理解的mvc与mvvc", "position有哪些值,说下各自的作用", "写个从几个li中取下标的闭包代码", "你的职业规划是怎么样的？", "移动端性能优化", "lazyload如何实现", "点透问题", "前端安全", "原生js模板引擎", "repaint和reflow区别", "requirejs如何避免循环依赖？", "实现布局：左边一张图片，右边一段文字（不是环绕）", "window.onload和$(document).ready()的区别，浏览器加载转圈结束时哪个时间点？", "form表单当前页面无刷新提交 target iframe", "setTimeout和setInterval区别，如何互相实现？", "如何避免多重回调—promise，promise简单描述一下，如何在外部进行resolve()", "margin坍塌？水平方向会不会坍塌？", "伪类和伪元素区别", "vue如何实现父子组件通信，以及非父子组件通信", "数组去重", "使用flex布局实现三等分，左右两个元素分别贴到左边和右边，垂直居中", "平时如何学前端的，看了哪些书，关注了哪些公众号", "实现bind函数", "数组和链表区别，分别适合什么数据结构", "对mvc的理解", "描述一个印象最深的项目，在其中担任的角色，解决什么问题", "http状态码。。。401和403区别？", "描述下二分查找", "为什么选择前端，如何学习的，看了哪些书，《js高级程序设计》和《你不知道的js》有什么区别，看书，看博客，看公众号三者的时间是如何分配的？", "如何评价BAT？", "描述下在实习中做过的一个项目，解决了什么问题，在其中担任了什么角色？这个过程存在什么问题，有什么值得改进的地方？", "如何看待加班，如果有个项目需要连续一个月加班，你怎么看？", "遇到的压力最大的一件事是什么？如何解决的？", "平时有什么爱好", "自身有待改进的地方", "n长的数组放入n+1个数，不能重复，找出那个缺失的数", "手里有什么offer", "你对于第一份工作最看重的三个方面是什么？", "如何评价现在的前端？", "用原生js实现复选框选择以及全选非全选功能", "用4个颜色给一个六面体上色有多少种情况", "amd和cmd区别", "为什么选择前端，移动端性能优化", "vue的特点？双向数据绑定是如何实现的", "Object.defineProperty", "算法题：数组去重，去除重复两次以上的元素，代码题：嵌套的ul-li结构，根据input中输入的内容，去除相应的li节点，且如果某个嵌套的ul下面的li都被移除，则该ul的父li节点也要被移除", "页面加载过程", "浏览器如何实现图片缓存"],
				result: [],
			}
		},
		methods: {
			change(index, e) {
				e.target.parentNode.classList.toggle('active');
				this.result[index] = !this.result[index];
				this.handler();
				
			},
			handler:debounce(function() {
				localStorage.setItem('result', this.result);
			},  2000)
			
		},
		mounted() {
			const list = this.$refs.list.querySelectorAll('.item');
			let re = localStorage.getItem('result');
			if (!re) {
				for (let i = 0, len = this.items.length; i < len; i++) {
					this.result.push(false);
				}
				localStorage.setItem('result', this.result);
			} else {
				re = re.split(',').map((val) => {
					return val === 'true';
				})
				this.result = re;
			}
			for (let i = 0, len = list.length; i < len;i++) {
				if (this.result[i]) {
					list[i].classList.add('active');
				}
			}
		}
	}
</script>

<style>
	.list {
		padding:0;
		box-shadow:1px 1px 8px #000;
	}
	.item {
		padding:10px 10px 10px 10px;
		list-style:none;
		text-align:left;
		font-size:20px;
		color:#000;
	}
	.container {
	}
</style>