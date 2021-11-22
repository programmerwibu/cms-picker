<template>
  <div class="home">
    <Sidebar />
    <main class="content">
      <Navbar />

      <div class="container-fluid px-3 mt-5">
        <div class="row mt-4 mb-3">
          <div class="col-6 d-flex justify-content-between ps-0">
            <div class="me-lg-3">
              <a href="#" style="font-weight: bold; font-size: 36px">
                List of Users</a
              >
            </div>
          </div>
          <div class="col-6 px-0 text-end">
            <div class="btn-group">
              <button class="btn btn-primary text-white">
                Create New User
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "../components/navigation/Sidebar.vue";
import Navbar from "../components/navigation/Navbar.vue";
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
  },
};
</script>

<style scoped>
.btn-primary {
  background: linear-gradient(180deg, #4790d9 0%, #0f75bc 100%) !important;
  border: none;
}
</style>
