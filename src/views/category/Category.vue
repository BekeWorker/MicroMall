<template>
  <div class="wrapper" ref="wrap">
    <!--    wrapper中设置的第一元素才能实现滚动,所以最好只在wrapper中设置一个元素-->
    <ul>
      <button @click="btnClick">按钮</button>
      <li>li中的内容1</li>
      <li>li中的内容2</li>
      <li>li中的内容3</li>
      <li>li中的内容4</li>
      <li>li中的内容5</li>
      <li>li中的内容6</li>
      <li>li中的内容7</li>
      <li>li中的内容8</li>
      <li>li中的内容9</li>
      <li>li中的内容10</li>
      <li>li中的内容11</li>
      <li>li中的内容12</li>
      <li>li中的内容13</li>
      <li>li中的内容14</li>
      <li>li中的内容15</li>
      <li>li中的内容16</li>
      <li>li中的内容17</li>
      <li>li中的内容18</li>
      <li>li中的内容19</li>
      <li>li中的内容20</li>
      <li>li中的内容21</li>
      <li>li中的内容22</li>
      <li>li中的内容23</li>
      <li>li中的内容24</li>
      <li>li中的内容25</li>
      <li>li中的内容26</li>
      <li>li中的内容27</li>
      <li>li中的内容28</li>
      <li>li中的内容29</li>
      <li>li中的内容30</li>
      <li>li中的内容31</li>
      <li>li中的内容32</li>
      <li>li中的内容33</li>
      <li>li中的内容34</li>
      <li>li中的内容35</li>
      <li>li中的内容36</li>
      <li>li中的内容37</li>
      <li>li中的内容38</li>
      <li>li中的内容39</li>
      <li>li中的内容40</li>
      <li>li中的内容41</li>
      <li>li中的内容42</li>
      <li>li中的内容43</li>
      <li>li中的内容44</li>
      <li>li中的内容45</li>
      <li>li中的内容46</li>
      <li>li中的内容47</li>
      <li>li中的内容48</li>
      <li>li中的内容49</li>
      <li>li中的内容50</li>
    </ul>
    <!--    1.无论是否设置click:false,button都可以点击-->
        <button @click="btnClick">按钮</button>
    <!--    2.必须设置click:true,那么div才能监听-->
        <div @click="divClick">div点击</div>
        <a href="#" @click="aClick">a点击</a>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Category",
    data() {
      return {
        bScroll: null
      }
    },
    created() {
      // 不能再Vue组件创立的时候使用BScroll
      // 无论用什么方式BScroll中要挂载wrapper,才能够正常的工作
      // mounted生命周期函数是所有的元素在dom中挂载完成才实现的
      // this.bScroll = new BScroll(this.$refs.wrap)
    },
    mounted() {
      this.bScroll = new BScroll(this.$refs.wrap, {
        probeType:3,
        click:true
      })
    },
    methods: {
      btnClick() {
        console.log('监听按钮的点击')
      },
      divClick() {
        console.log('监听div的点击')
      },
      aClick() {
        console.log('监听a的点击')
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 300px;
    background-color: #f00;
    overflow: hidden;
  }
</style>
