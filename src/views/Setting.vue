<template lang="pug">
#setting
  b-container
    b-row
      b-col.col-12.mb-5
        h1(style= 'color: #FF6F61') RINGTONES
      b-col.col-12(style= 'background: #FF6F61').mb-5
        h3.text-white.pl-3 WORKS
      b-col.col-12
        b-table(:items='items' :fields='fields' @row-clicked='select')
          template(#cell(src)='data')
            audio(controls :src='require("../assets/"+data.value)')
          template(#cell(select)='data')
            b-icon(icon='file-earmark-play-fill' v-if='sound === data.item.src').h1
</template>

<script>
export default {
  name: 'Setting',
  data () {
    return {
      items: [
        { name: '鈴聲', src: 'alarm.mp3' },
        { name: 'Yay', src: 'yay.mp3' }
      ],
      fields: [
        { key: 'name', label: '名稱' },
        { key: 'src', label: '試聽' },
        { key: 'select', label: '選擇' }
      ]
    }
  },
  computed: {
    sound () {
      return this.$store.state.sound
    }
  },
  methods: {
    select (item) {
      this.$store.commit('selectSound', item.src)
    }
  }
}
</script>
