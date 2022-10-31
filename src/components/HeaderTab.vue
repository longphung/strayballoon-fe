<script>
import BreadCrumb from './BreadCrumb.vue';
import VIcon from './VIcon.vue';
import SlideSwitch from './SlideSwitch.vue';

export default {
  name: 'HeaderTab',
  components: {
    BreadCrumb,
    VIcon,
    SlideSwitch,
  },
  inject: ['userData'],
  computed: {
    userName() {
      return this.userData?.userName;
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="header__left">
      <span class="header__logo">
        <img src="/logo.png" alt="logo" />
      </span>

      <BreadCrumb />
    </div>

    <div class="header__right">
      <div class="quick-links">
        <router-link to="/">
          <VIcon name="mail" class="quick-links__icon" />
        </router-link>

        <router-link to="/">
          <VIcon name="message" class="quick-links__icon" />
        </router-link>

        <router-link to="/">
          <VIcon name="notification" class="quick-links__icon" />
        </router-link>

        <router-link to="/">
          <VIcon name="setting" class="quick-links__icon" />
        </router-link>

        <SlideSwitch class="quick-links__toggle">
          <VIcon name="sun" class="quick-links__toggle-icon" />
        </SlideSwitch>

        <div class="header__user-name">
          <div>
            <VIcon name="user" />
          </div>

          <span>{{ userName }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1rem 1.125rem 1.625rem;
}

.header__left {
  display: flex;
  align-items: center;
}

.header__logo {
  margin-right: 3.8125rem;
}

.quick-links {
  display: flex;
  align-items: center;

  & a {
    margin-right: 1.625rem;
    text-decoration: none;

    &:last-child {
      margin-right: 0;
    }
  }
}

.quick-links__icon {
  color: #dddddd;
  font-size: 2.1875rem;
}

.quick-links__toggle {
  width: 4.475rem;
  height: 2.475rem;
}

.quick-links__toggle-icon {
  position: absolute;
  font-size: 1.25rem;
  color: #d9d9d9;
  top: 10px;
  right: 10px;
  pointer-events: none;
}

.header__user-name {
  background: #d9d9d9;
  border-radius: 30px;
  padding: 3px 9px;
  display: flex;
  margin-left: 1.5rem;
  /* icon */
  & > div {
    width: 2.875rem;
    height: 2.875rem;
    border-radius: 50%;
    background-color: #7a7a7a;
    display: flex;
    align-items: center;
    justify-content: center;

    & i {
      color: #444444;
      font-size: 1.5rem;
    }
  }
  /* username */
  & span {
    display: flex;
    align-items: center;
    margin-left: 0.375rem;
    font-size: 1.25rem;
  }
}
</style>
