<script>
import { useToast } from 'vue-toastification';

import { baseWs } from '../features';
import ClassNameTab from '../components/ClassNameTab.vue';
import TimerTab from '../components/TimerTab.vue';
import TopPerformers from '../components/TopPerformers.vue';
import ProgressMap from '../components/ProgressMap.vue';
import HelpRequest from '../components/HelpRequest.vue';

export default {
  name: 'DashboardPage',
  components: {
    ClassNameTab,
    TimerTab,
    TopPerformers,
    ProgressMap,
    HelpRequest,
  },
  inject: ['userData'],
  data() {
    return {
      // websocket connection
      ws: null,
      sessionInfo: {},
      toast: {},
      students: [],
    };
  },
  created() {
    this.toast = useToast();
    if (!this.userData?.userId) {
      return;
    }
    this.handleConnection();
  },
  beforeUnmount() {
    if (this.ws) {
      this.ws.close();
    }
  },
  methods: {
    handleSessionStart() {
      this.ws.send(JSON.stringify({
        type: "session_update",
        payload: {
          session_status: "started",
          session_id: this.sessionInfo.id,
        }
      }))
    },
    handleSessionEnd() {
      this.ws.send(JSON.stringify({
        type: 'session_update',
        payload: {
          session_status: "ended",
          session_id: this.sessionInfo.id,
        }
      }))
    },
    handleConnection() {
      this.ws = new WebSocket(`${baseWs}/session/${this.userData.userId}?token=${this.userData.token}`);
      this.ws.onmessage = (event) => {
        const { data: rawData } = event;
        try {
          const data = JSON.parse(rawData);
          switch (data.type) {
            case 'session_info_instructor':
              this.sessionInfo = {
                status: data.sessionStatus,
                id: data.sessionId,
              };
              break;
            case 'session_join':
              if (data.role.includes('students')) {
                this.toast.info(`Student ${data.username} joined the session.`);
                this.students.push(data.username);
              }
              break;
            default:
              break;
          }
        } catch (e) {
          console.error(e);
        }
      };
      this.ws.onopen = () => {
        console.log(`Successfully connected to session ${this.userData.userId}`);
      };
    },
  },
};
</script>

<template>
  <section class="dashboard-page">
    <ClassNameTab @session-start="handleSessionStart" :session-info='sessionInfo' @session-end='handleSessionEnd' />
    <TimerTab />
    <TopPerformers />
    <ProgressMap />
    <HelpRequest />
  </section>
</template>

<style scoped>
.dashboard-page {
  margin-right: 1rem;
  background: #f6f8ff;
  border-radius: 1.25rem;
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: 3.5rem;
  grid-row-gap: 2.125rem;
}
</style>
