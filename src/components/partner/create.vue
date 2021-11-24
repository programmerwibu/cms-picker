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
                Create New Partner</a
              >
            </div>
          </div>
          <div class="col-6 px-0 text-end">
            <div class="btn-group">
              <button class="btn btn-submit text-white" @click="$router.go(-1)">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-8">
            <div class="card px-3 py-3 mb-3">
              <div class="row">
                <h5>Detail Patner</h5>
                <div class="col-lg-6 mb-3">
                  <div class="form-group">
                    <label for="Name">Company Name</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6 mb-3">
                  <div class="form-group">
                    <label for="Name">Company Alias</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>

                <div class="col-lg-6 mb-3">
                  <div class="form-group">
                    <label for="Name">Address</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6 mb-3">
                  <div class="form-group">
                    <label for="Name">Email</label>
                    <input type="email" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6 mb-3">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Role</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Admin</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 mb-3">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Access Menu</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>User Patner</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 mb-3">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Status</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Active</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 mb-3">
                  <div class="form-group">
                    <label for="Name">Company ID</label>
                    <input type="email" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6 mb-3">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Branch</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Cisauk</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 mb-3">
                  <div class="form-group">
                    <label for="Name">Employee ID</label>
                    <input type="email" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="row text-right mt-3">
                <div class="col-lg-12">
                  <button class="btn btn-submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "../navigation/Sidebar.vue";
import Navbar from "../navigation/Navbar.vue";
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.btn-submit {
  background: linear-gradient(180deg, #4790d9 0%, #0f75bc 100%);
  color: #fff;
}

label {
  font-family: "Open Sans", sans-serif;
  color: #8e8ea1;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
}
.form-control {
  border-radius: 40px;
}
.btn-primary {
  background: linear-gradient(180deg, #4790d9 0%, #0f75bc 100%) !important;
  border: none;
}
</style>
