<template>
  <div>
    <Meeting
      v-for="(item, index) in meetings"
      :key="index"
      :initMeeting="item"
    />
  </div>
</template>

<script>
import Meeting from '@/components/cards/Meeting3'
export default {
  data () {
    return {
      meetings: [
        { borderColor: '#4CAF50', title: 'Agree on cooperation', person: 'Ivanov Ivan', company: 'Yandex', time: '13:30', date: '13 january 2019', place: 'Saint-Petersburg', active: true },
        { borderColor: '#4CAF50', title: 'Agree on cooperation', person: 'Ivanov Petr', company: 'Mail', time: '14:30', date: '13 january 2019', place: 'Saint-Petersburg', active: true },
        { borderColor: '#4CAF50', title: 'Agree on cooperation', person: 'Ivanov Misha', company: 'Rambler', time: '16:00', date: '13 january 2019', place: 'Saint-Petersburg', active: true },
        { borderColor: '#4CAF50', title: 'Agree on cooperation', person: 'Ivanov Nikolay', company: 'Nginx', time: '17:30', date: '13 january 2019', place: 'Saint-Petersburg', active: true },
        { borderColor: '#4CAF50', title: 'Agree on cooperation', person: 'Ivanov Yahor', company: 'Apple', time: '19:00', date: '13 january 2019', place: 'Saint-Petersburg', active: true },
        { borderColor: '#F44336', title: 'Agree on cooperation', person: 'Ivanov Bass', company: 'Uber', time: '12:30', date: '12 january 2019', place: 'Saint-Petersburg', active: false },
        { borderColor: '#F44336', title: 'Agree on cooperation', person: 'Ivanov Alex', company: 'Microsoft', time: '14:00', date: '12 january 2019', place: 'Saint-Petersburg', active: false }
      ]
    }
  },
  components: {
    Meeting
  }
}
</script>
