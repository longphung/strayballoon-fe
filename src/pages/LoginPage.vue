<script>
export default {
  name: 'LoginPage',
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
        return 'text'
      }
      return 'password'
    }
  },
};
</script>

<template>
  <div class="container">
    <div class="card">
      <h1 class="title">Strayballoon</h1>

      <form class="form">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>

          <input id="username" type="text" class="form-control" placeholder="Username..." name="username" />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>

          <div class="password">
            <input id="password" :type="passwordFieldType" class="form-control" placeholder="Password..." name="password" />

            <button type="button" class="password__helper btn btn-link" @click='showPassword = !showPassword'>{{ passwordHelperText }}</button>
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
