<template lang="pug">
#app
  b-container(fluid).vh-100
    b-row.h-100
      b-col.col-2.h-100.text-white(style='background: #FF4040')
        #left.w-100.h-100
          #pomodoro.w-100.h-50.text-center.pt-5
            b-button(size='sm' to='/' variant="#FF4040" style='color: white')
              span(style='writing-mode: vertical-lr').h2 POMODORO
          #pomodoro_down.w-100.h-50.pb-5
            #clock.w-50.h-25.mx-auto.mb-2
              b-button.mb-2.w-100.h-100(size='sm' to='/list' variant="#FF4040" style='color: white')
                h1
                  b-icon(icon='clock')
            #list.w-50.h-25.mx-auto.mb-2
              b-button.mb-2.w-100.h-100(size='sm' to='/list' variant="#FF4040" style='color: white')
                h1
                  b-icon(icon='list-ul')
            #graph.w-50.h-25.mx-auto.mb-2
              b-button.mb-2.w-100.h-100(size='sm' to='/list' variant="#FF4040" style='color: white')
                h1
                  b-icon(icon='file-bar-graph-fill')
            #setting.w-50.h-25.mx-auto
              b-button.mb-2.w-100.h-100(size='sm' to='/setting' variant="#FF4040" style='color: white')
                h1
                  b-icon(icon='file-earmark-music')
      b-col.col-10.h-100.pt-5(style='background: white')
        keep-alive
          router-view
</template>
