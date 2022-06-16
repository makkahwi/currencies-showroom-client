<template>
  <div class="content">
    <base-header class="pb-6">
      <b-row align-v="center" class="py-4">
        <b-col cols="7" lg="6">
          <h6 class="h2 text-white d-inline-block mb-0">Enlisted Currencies</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <RouteBreadCrumb />
          </nav>
        </b-col>

        <b-col lg="6" cols="5" class="text-right">
          <base-button size="sm" type="neutral">New</base-button>
          <base-button size="sm" type="neutral">Filters</base-button>
        </b-col>
      </b-row>
    </base-header>

    <b-container fluid class="mt--6">
      <div>
        <card class="no-border-card" body-classes="px-0 pb-1" footer-classes="pb-2">
          <template slot="header">
            <h3 class="mb-0">
              Enlisted Currencies
            </h3>

            <p class="text-sm mb-0">
              You could CRUD your listings here
            </p>
          </template>

          <div>
            <b-col cols="12" class="d-flex justify-content-center justify-content-sm-between flex-wrap">
              <el-select class="select-primary pagination-select" v-model="pagination.perPage" placeholder="Per page">
                <el-option class="select-primary" v-for="item in pagination.perPageOptions" :key="item" :label="item"
                  :value="item">
                </el-option>
              </el-select>

              <div>
                <base-input v-model="searchQuery" prepend-icon="fas fa-search" placeholder="Search..." />
              </div>
            </b-col>

            <el-table :data="queriedData" row-key="id" header-row-class-name="thead-light" @sort-change="sortChange"
              @selection-change="selectionChange">
              <el-table-column v-for="column in tableColumns" :key="column.label" v-bind="column">
              </el-table-column>

              <el-table-column min-width="180px" align="right" label="Actions">
                <div slot-scope="{$index, row}" class="d-flex">
                  <div class="btn-group">
                    <base-button @click.native="handleLike($index, row)" class="like btn-link" type="info" size="sm"
                      icon>
                      <i class="text-white ni ni-bullet-list-67"></i>
                    </base-button>

                    <base-button @click.native="handleEdit($index, row)" class="edit" type="warning" size="sm" icon>
                      <i class="text-white ni ni-ruler-pencil"></i>
                    </base-button>

                    <base-button @click.native="handleDelete($index, row)" class="remove btn-link" type="danger"
                      size="sm" icon>
                      <i class="text-white ni ni-fat-remove"></i>
                    </base-button>
                  </div>
                </div>
              </el-table-column>
            </el-table>
          </div>

          <div slot="footer" class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap">
            <div class="">
              <p class="card-category">
                Showing {{ from + 1 }} to {{ to }} of {{ total }} listings

                <span v-if="selectedRows.length">
                  &nbsp; &nbsp; {{ selectedRows.length }} listing(s) selected
                </span>
              </p>

            </div>
            <base-pagination class="pagination-no-border" :current="pagination.currentPage"
              :per-page="pagination.perPage" :total="total" @change="paginationChanged($event)">
            </base-pagination>
          </div>
        </card>
      </div>
    </b-container>
  </div>
</template>

<script>
import { Table, TableColumn, Select, Option } from 'element-ui';
import RouteBreadCrumb from '@/components/Breadcrumb/RouteBreadcrumb'
import { BasePagination } from '@/components';
import clientPaginationMixin from './clientPaginationMixin'
import swal from 'sweetalert2';
import users from './users2';

export default {
  name: "CurrenciesTable",
  mixins: [clientPaginationMixin],
  components: {
    BasePagination,
    RouteBreadCrumb,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      propsToSearch: ['name', 'email', 'age'],
      tableColumns: [
        {
          type: 'selection'
        },
        {
          prop: 'type',
          label: 'Type',
          sortable: true
        },
        {
          prop: 'value',
          label: 'Value',
          sortable: true
        },
        {
          prop: 'country',
          label: 'Country',
          sortable: true
        },
        {
          prop: 'circuable',
          label: 'Circability',
          sortable: true
        },
        {
          prop: 'issueyear',
          label: 'Issue Year',
          sortable: true
        },
        {
          prop: 'collection',
          label: 'Collection Date',
          sortable: true
        }
      ],
      tableData: users,
      selectedRows: []
    };
  },
  methods: {
    paginationChanged(page) {
      this.pagination.currentPage = page
    },
    handleLike(index, row) {
      swal.fire({
        title: `You liked ${row.name}`,
        buttonsStyling: false,
        type: 'success',
        confirmButtonClass: 'btn btn-success btn-fill'
      });
    },
    handleEdit(index, row) {
      swal.fire({
        title: `You want to edit ${row.name}`,
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-info btn-fill'
      });
    },
    handleDelete(index, row) {
      swal.fire({
        title: 'Are you sure?',
        text: `You won't be able to revert this!`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success btn-fill',
        cancelButtonClass: 'btn btn-danger btn-fill',
        confirmButtonText: 'Yes, delete it!',
        buttonsStyling: false
      }).then(result => {
        if (result.value) {
          this.deleteRow(row);
          swal.fire({
            title: 'Deleted!',
            text: `You deleted ${row.name}`,
            type: 'success',
            confirmButtonClass: 'btn btn-success btn-fill',
            buttonsStyling: false
          });
        }
      });
    },
    deleteRow(row) {
      let indexToDelete = this.tableData.findIndex(
        tableRow => tableRow.id === row.id
      );
      if (indexToDelete >= 0) {
        this.tableData.splice(indexToDelete, 1);
      }
    },
    selectionChange(selectedRows) {
      this.selectedRows = selectedRows
    }
  }
};
</script>

<style>
.no-border-card .card-footer {
  border-top: 0;
}
</style>
