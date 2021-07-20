<template lang="pug">
#home
  b-container
    b-row(style= 'color: #FF6F61').mb-5
      b-col.col-2
        b-button(size='sm' v-if='status !== 1' @click='start').mr-1
          b-icon(icon='play-circle-fill' font-scale="3")
        b-button(size='sm' v-if='status === 1' @click='pause').mr-1
          b-icon(icon='pause-circle-fill' font-scale="3")
        b-button(size='sm' v-if='current.length > 0' @click='finish(true)')
          b-icon(icon='chevron-right' font-scale="3")
      b-col.col-3
        h1 {{ timeText }}
      b-col.col-7
        h1 {{ currentText }}
</template>

<script>
export default {
  name: 'Home',
  computed: {
    status () {
      return this.$store.state.status
    },
    list () {
      return this.$store.state.list
    },
    current () {
      return this.$store.state.current
    },
    currentText () {
      let text = this.current
      if (text.length === 0) {
        if (this.list.length === 0) {
          text = 'THE FIRST THING TO DO TODAY'
        } else {
          text = '點擊開始'
        }
      }
      return text
    },
    timeleft () {
      return this.$store.state.timeleft
    },
    timeText () {
      const m = Math.floor(this.timeleft / 60)
      const s = Math.floor(this.timeleft % 60)
      return `${m} : ${s}`
    }
  },
  methods: {
    pause () {
      clearInterval(this.timer)
      this.$store.commit('changeStatus', 2)
    },
    start () {
      if (this.status !== 2 && this.list.length > 0) {
        this.$store.commit('start')
      }
      if (this.current.length > 0) {
        this.$store.commit('changeStatus', 1)
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= -1) {
            this.finish(false)
          }
        }, 1000)
      }
    },
    finish (skip) {
      clearInterval(this.timer)
      this.$store.commit('changeStatus', 0)
      this.$store.commit('addFinish')

      if (!skip) {
        const audio = new Audio()
        audio.src = require('../assets/' + this.$store.state.sound)
        audio.play()
      }

      if (this.list.length > 0) {
        this.start()
      }
    }
  }
}
</script>
