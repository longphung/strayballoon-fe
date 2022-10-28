<script>
import axios from 'axios';
import { useToast } from 'vue-toastification';

export default {
  name: 'LoginPage',
  inject: ['userData', 'setUserData'],
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      showPassword: false,
    };
  },
  computed: {
    passwordHelperText() {
      if (this.showPassword) {
        return 'hide password';
      }
      return 'show password';
    },
    passwordFieldType() {
      if (this.showPassword) {
        return 'text';
      }
      return 'password';
    },
  },
  methods: {
    async handleLogin(event) {
      const form = event.currentTarget;
      try {
        const result = await axios.post('/api/auth/', {
          username: form.username.value,
          password: form.password.value,
        });
        const user = await axios.get(`/api/users/${result.data.userId}`);
        this.toast.success('Login success');
        const userData = {
          ...result.data,
          userName: user.username,
        };
        window.sessionStorage.setItem('userData', JSON.stringify(userData));
        this.setUserData(userData);
        if (result.data.groups.includes('instructors')) {
          this.$router.push('/');
        }
        if (result.data.groups.includes('students')) {
          this.$router.push('/game');
        }
      } catch (e) {
        console.error(e);
        this.toast.error('Login failed');
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="card">
      <h1 class="title">Strayballoon</h1>

      <form class="form" @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>

          <input id="username" type="text" class="form-control" placeholder="Username..." name="username" />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>

          <div class="password">
            <input
              id="password"
              :type="passwordFieldType"
              class="form-control"
              placeholder="Password..."
              name="password"
            />

            <button type="button" class="password__helper btn btn-link" @click="showPassword = !showPassword">
              {{ passwordHelperText }}
            </button>
          </div>
        </div>

        <button type="submit" class="btn btn-outline-primary d-block m-auto">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 75%;
  padding: 5rem;
}

.title {
  text-align: center;
}

.form {
  padding: 2rem 10rem;
}

.password {
  position: relative;
}

.password__helper {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
