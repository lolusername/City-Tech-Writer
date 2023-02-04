<template>
  <div class="container overflowy-hidden">
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/vimeo-player/2.13.0/player.min.js"
      integrity="sha512-gChplnQw7jkk2Axylkdz4PMZCJd5wolmvv3sUZH4m/JrPs1ac5Db7Tms+l1JmZBto6DX8cpE74KTMwS1aOc4bg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <div class="row d-flex align-items-center ">
      <div id="airpods" class="col-6 pt-12"></div>

      <component
        class="col-6 overflow-auto padding-t current "
        id="script"
        v-bind:is="currentAct"
        @click="stopAutoScroll"
      >
      </component>
    </div>
  </div>
</template>

<script>
import act1 from '~/components/act1'
import act2 from '~/components/act2'
import act3 from '~/components/act3'
export default {
  data() {
    return {
      actContent: [0, 1, 2],
      currentAct: 'act1',
      scrolldelay: undefined,
      player: undefined,
      paused: true
    }
  },
  methods: {
    pageScroll() {
      document.querySelector('.current').scrollBy(0, this.paused ? 1 : 0)
      this.scrolldelay = setTimeout(pageScroll, 100)
    },
    stopAutoScroll() {
      console.log(this.pause)
      // this.pause = true
      // clearTimeout(this.scrolldelay)
    }
  },
  components: { act1, act2, act3 },
  mounted() {
    document.querySelector('.current').addEventListener(
      'scroll',
      () => {
        document.body.style.setProperty(
          '--scroll',
          document.querySelector('.current').scrollTop
        )

        document.body.style.setProperty(
          '--current',
          document.querySelector('.current').scrollHeight
        )
      },
      false
    )
    const width = screen.width > 450 ? 450 : screen.width - 30
    const _this = this
    const options = {
      id: 576400765,
      width: width,
      loop: true
    }
    _this.player = new Vimeo.Player('airpods', options)

    _this.player.on('timeupdate', function(data) {
      console.log(document.querySelector('.current').scrollTop)
      // data is an object containing properties specific to that event
      this.getCurrentTime().then(function(seconds) {
        if (seconds < 132) {
          _this.currentAct = 'act1'
        } else if (seconds < 191.55) {
          _this.currentAct = 'act2'
        } else _this.currentAct = 'act3'
      })
    })
  }
}
</script>

<style>
body {
  background: linear-gradient(to left, #e2e2e2, #c9d6ff);
}

.padding-t {
  margin: 100px 0;
  /* border: solid 1px #000; */
  max-height: 67vh;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}

.current:before,
.current:after {
  content: '';
  position: absolute;
  z-index: -1;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  top: 1px;
  bottom: 100px;
  left: 0;
  right: 0;
}
.current:after {
  right: 10px;
  left: auto;

  /* transform: skew(8deg) rotate(3deg); */
}

@media screen and (max-width: 480px) {
  #script {
    flex: 100%;
    display: block;
    max-width: 100%;
  }
  iframe {
    padding-top: 50px;
    margin: 0 auto;
  }
  .padding-t {
    margin: 18px 0;
    /* border: solid 1px #000; */
    max-height: 67vh;
    background: rgba(255, 255, 255, 0.78);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  }
}
</style>
