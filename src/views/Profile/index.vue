<template>
  <div>
    <Header />

    <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="4" class="order-xl-2">
          <UserCard />
        </b-col>

        <b-col xl="8" class="order-xl-1">
          <EditProfileForm />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import EditProfileForm from './EditProfileForm.vue';
import UserCard from './UserCard.vue';
import Header from './Header.vue';
import ProgressTrackList from '@/views/Dashboard/ProgressTrackList';

export default {
  components: {
    Header,
    EditProfileForm,
    UserCard,
    ProgressTrackList
  },
  data() {
    return {
      name: 'Suhaib',
      oldest: new Date().getFullYear()
    }
  }
};
</script>

<style>
.profile-header {
  background-image: url(/img/theme/profile-cover.jpg);
  background-size: cover;
  background-position: center top;
  min-height: 500px;
}
</style>
