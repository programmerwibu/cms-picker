<template>
  <div class="home">
    <Sidebar />
      <main class="content">
      <Navbar />
      <div class="container-fluid px-3 mt-5">
        <div class="row mb-3">
          <div class="col-6 d-flex justify-content-between ps-0">
            <div class="me-lg-3">
              <a href="#" style="font-weight: bold; font-size: 36px">
                List Partner</a
              >
            </div>
          </div>
          <div class="col-6 px-0 text-end">
            <div class="btn-group">
              <button
                class="btn btn-primary text-white"
                @click="$router.push({ path: 'partner-create' })"
              >
                Create New Partner
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <datatable title="" :columns="tableColumns1" :rows="tableRows1" />
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
import DataTable from "vue-materialize-datatable";
export default {
  name: "Partner",
  components: {
    Sidebar,
    Navbar,
    datatable: DataTable,
  },
  data() {
    return {
      tableColumns1: [
        {
          label: "Character name",
          field: "charName",
          numeric: false,
          html: false,
        },
        {
          label: "First appearance",
          field: "firstAppearance",
          numeric: false,
          html: false,
        },
        {
          label: "Created by",
          field: "createdBy",
          numeric: false,
          html: false,
        },
        {
          label: "Voiced by",
          field: "voicedBy",
          numeric: false,
          html: false,
        },
      ],
      tableRows1: [
        {
          charName: "Abu",
          firstAppearance: "Alladin (1992)",
          createdBy: "Joe Grant",
          voicedBy: "Frank Welker",
        },
        {
          charName: "Magic Carpet",
          firstAppearance: "Alladin (1992)",
          createdBy: "Randy Cartwright",
          voicedBy: "N/A",
        },
        {
          charName: "Magic Carpet",
          firstAppearance: "Alladin (1992)",
          createdBy: "Randy Cartwright",
          voicedBy: "N/A",
        },
        {
          charName: "Magic Carpet",
          firstAppearance: "Alladin (1992)",
          createdBy: "Randy Cartwright",
          voicedBy: "N/A",
        },
        {
          charName: "Magic Carpet",
          firstAppearance: "Alladin (1992)",
          createdBy: "Randy Cartwright",
          voicedBy: "N/A",
        },
        {
          charName: "Magic Carpet",
          firstAppearance: "Alladin (1992)",
          createdBy: "Randy Cartwright",
          voicedBy: "N/A",
        },
        {
          charName: "Magic Carpet",
          firstAppearance: "Alladin (1992)",
          createdBy: "Randy Cartwright",
          voicedBy: "N/A",
        },
        {
          charName: "Magic Carpet",
          firstAppearance: "Alladin (1992)",
          createdBy: "Randy Cartwright",
          voicedBy: "N/A",
        },
        {
          charName: "Magic Carpet",
          firstAppearance: "Alladin (1992)",
          createdBy: "Randy Cartwright",
          voicedBy: "N/A",
        },
        {
          charName: "The Sultan",
          firstAppearance: "Alladin (1992)",
          createdBy: "Navid Negahban",
          voicedBy: "Douglas Seale",
        },
      ],
    };
  },
};
</script>

<style scoped>
.btn-primary {
  background: linear-gradient(180deg, #4790d9 0%, #0f75bc 100%) !important;
  border: none;
}
</style>
