<template>
  <div>
    <div class="row center-block">
      <div class="col-md-12">
        <div class=" col-md-6">
          <div class="pull-left">
            <h3 v-text="list +' List' "></h3>
          </div>
        </div>
        <div class="col-md-6 ">
          <div class="pull-right">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="row center-block">
      <div class="col-md-12">
        <div class="box">
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
              <div class="row">
                <div class="col-sm-6">
                  <div id="example1_length" class="dataTables_length">

                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 table-responsive">
                  <table aria-describedby="example1_info" role="grid" id="example1"
                         class="table table-bordered table-striped dataTable">
                    <thead>
                    <tr role="row">
                      <th aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending"
                          style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0"
                          class="sorting_asc">Rendering engine
                      </th>
                      <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1"
                          rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Browser
                      </th>
                      <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1"
                          rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Platform(s)
                      </th>
                      <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;"
                          colspan="1"
                          rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Engine version
                      </th>
                      <th aria-label="CSS grade: activate to sort column ascending" style="width: 101px;" colspan="1"
                          rowspan="1" aria-controls="example1" tabindex="0" class="sorting">CSS grade
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="even" role="row">
                      <td class="sorting_1">Blink</td>
                      <td>Iridium 54.0</td>
                      <td>GNU/Linux</td>
                      <td>54</td>
                      <td>A</td>
                    </tr>
                    <tr class="odd" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Firefox 1.0</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.7</td>
                      <td>A</td>
                    </tr>
                    <tr class="even" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Firefox 1.5</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                    </tr>
                    <tr class="odd" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Firefox 2.0</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                    </tr>
                    <tr class="even" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Firefox 3.0</td>
                      <td>Win 2k+ / OSX.3+</td>
                      <td>1.9</td>
                      <td>A</td>
                    </tr>
                    <tr class="odd" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Camino 1.0</td>
                      <td>OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                    </tr>
                    <tr class="even" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Camino 1.5</td>
                      <td>OSX.3+</td>
                      <td>1.8</td>
                      <td>A</td>
                    </tr>
                    <tr class="odd" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Netscape 7.2</td>
                      <td>Win 95+ / Mac OS 8.6-9.2</td>
                      <td>1.7</td>
                      <td>A</td>
                    </tr>
                    <tr class="even" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Netscape Browser 8</td>
                      <td>Win 98SE+</td>
                      <td>1.7</td>
                      <td>A</td>
                    </tr>
                    <tr class="odd" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Netscape Navigator 9</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                    </tr>
                    <tr class="even" role="row">
                      <td class="sorting_1">Gecko</td>
                      <td>Mozilla 1.0</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td>1</td>
                      <td>A</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

    import $ from 'jquery'

    require('datatables.net')
    require('datatables.net-bs')
    export default {
      name: 'DataTables',
      props: ['list'],
      mounted() {
        this.$nextTick(() => {
          $('#example1').DataTable()
        })
      }
    }
</script>
