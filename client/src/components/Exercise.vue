<template>
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
         <button v-if="exercise.user.handle === Session.user.handle" class="delete" @click="$emit('remove')"></button>
    </figure>
  </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="exercise.user.pic" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            {{ exercise.user.firstName }} {{ exercise.user.lastName }}
          </p>
          <p class="subtitle is-6">{{ exercise.user.handle }}</p>
        </div>
      </div>

      <div class="content">
        {{ exercise.caption }}
        <br />
        <time :datetime="exercise.time">{{ prettyDate }}</time>
      </div>
    </div>
  </div>
</template>

<script>
import Session from "../services/session"

export default {
    data: ()=>({
        Session
    }),
    props: {
        exercise: Object
    },
    computed: {
        prettyDate(){
            if(this.exercise.time && this.exercise.time.toDateString){
                return this.exercise.time.toDateString()
            }else{
                return 'Never'
            }
            
        }
    }
}
</script>

<style>
button.delete {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>