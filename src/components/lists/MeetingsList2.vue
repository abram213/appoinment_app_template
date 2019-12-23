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
import Meeting from '@/components/cards/Meeting2'
export default {
  data () {
    return {
      meetings: [
        { borderColor: '#4CAF50', title: 'Договориться о сотрудничестве', person: 'Иванов Иван', company: 'Yandex', time: '13:30', date: '13 января 2019', place: 'Санкт-Петербург', active: true },
        { borderColor: '#4CAF50', title: 'Договориться о сотрудничестве ydysaydsaydasuydasdasd', person: 'Иванов Петр', company: 'Mail', time: '14:30', date: '13 января 2019', place: 'Санкт-Петербург', active: true },
        { borderColor: '#4CAF50', title: 'Договориться о сотрудничестве', person: 'Абрамович Михаил', company: 'Rambler', time: '16:00', date: '13 января 2019', place: 'Санкт-Петербург', active: true },
        { borderColor: '#4CAF50', title: 'Договориться о сотрудничестве', person: 'Николаенко Николай', company: 'Nginx', time: '17:30', date: '13 января 2019', place: 'Санкт-Петербург', active: true },
        { borderColor: '#4CAF50', title: 'Договориться о сотрудничестве', person: 'Иванов Егор', company: 'Apple', time: '19:00', date: '13 января 2019', place: 'Санкт-Петербург', active: true },
        { borderColor: '#F44336', title: 'Договориться о сотрудничестве', person: 'Гурбатов Петр', company: 'Uber', time: '12:30', date: '12 января 2019', place: 'Санкт-Петербург', active: false },
        { borderColor: '#F44336', title: 'Договориться о сотрудничестве', person: 'Замулин Алексей', company: 'Microsoft', time: '14:00', date: '12 января 2019', place: 'Санкт-Петербург', active: false }
      ]
    }
  },
  components: {
    Meeting
  }
}
</script>
