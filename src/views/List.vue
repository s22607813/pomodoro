<template lang="pug">
#list
  b-container
    b-row
      b-col.col-3.mb-5
        h2(style= 'color: #FF6F61') TO DO LIST
      b-col.col-7.mb-5
        b-form-group(label='' invalid-feedback='請至少輸入兩個字' :state='state')
          b-form-input(v-model='newitem' :state='state' trim @keydown.enter='additem')
      b-col.col-2.mb-5
        b-btn(@click='additem')
          b-icon(icon='plus-circle-fill' ).text-white
      b-col.col-12(style= 'background: #FF6F61').mb-2
        h3.text-white.pl-3 TO DO
      b-col.col-12.mb-5
        b-table(:items='list' :fields='listfields')
          template(#cell(name)='data')
            b-form-input(
              v-if='data.item.edit'
              v-model='data.item.model'
              trim
              :state='data.item.state'
              @keydown.enter='changelist(data.index)'
              @keydown.esc='cancellist(data.index)'
            )
            span(v-else) {{ data.value }}
          template(#cell(action)='data')
            span(v-if='!data.item.edit')
              b-btn(@click='editlist(data.index)' variant='white')
                h4
                  b-icon(icon='play-circle-fill' color='grey')
            span(v-else)
              b-btn(@click='changelist(data.index)' variant='success')
                b-icon(icon='vector-pen')
              b-btn(@click='cancellist(data.index)' variant='danger')
                b-icon(icon='x-circle-fill')
      b-col.col-12(style= 'background: #FF6F61').mb-2
        h3.text-white.pl-3 DONE
      b-col.col-12.mb-5
        b-table-simple
          thead
            tr
              th 名稱
              th 操作
          tbody
            tr(v-for='(item, idx) in finished' :key='idx')
              td {{ item }}
              td
                b-btn(@click='delfinish(idx)' variant='danger')
                  b-icon(icon='x-circle-fill')
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      newitem: '',
      listfields: [
        { key: 'name', label: '名稱' },
        { key: 'action', label: '操作' }
      ]
    }
  },
  computed: {
    state () {
      if (this.newitem.length === 0) {
        return null
      } else if (this.newitem.length < 2) {
        return false
      } else {
        return true
      }
    },
    list () {
      return this.$store.getters.list.map(item => {
        if (item.model.length < 2) {
          item.state = false
        } else {
          item.state = true
        }
        return item
      })
    },
    finished () {
      return this.$store.state.finished
    }
  },
  methods: {
    additem () {
      if (this.state) {
        this.$store.commit('addList', this.newitem)
        this.newitem = ''
      }
    },
    editlist (index) {
      this.$store.commit('editList', index)
    },
    changelist (index) {
      if (this.list[index].state) {
        this.$store.commit('changeList', index)
      }
    },
    cancellist (index) {
      this.$store.commit('cancelList', index)
    },
    delfinish (index) {
      this.$store.commit('delFinish', index)
    }
  }
}
</script>
