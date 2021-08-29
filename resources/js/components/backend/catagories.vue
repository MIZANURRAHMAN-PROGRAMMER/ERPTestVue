<template>

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>CATAGORIES Form</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">CATAGORIES FORM</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- left column -->
          <div class="col-md-8">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">CATAGORIES</h3>
               
                  <router-link to="/home"  class="btn btn-success ml-auto mr-auto">Home</router-link>
                
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form   @submit.prevent="addCatagory">
                <div class="card-body">
                  <div class="form-group row">
                    <label class="col-sm-3" for="exampleInputEmail1">Catagory</label>
                    <input type="text" name="name" class="form-control col-sm-9" :class="{ 'is-invalid': form.errors.has('name')}" id="exampleInputEmail1" v-model="form.name" placeholder="Enter catagory">
                  <div v-if="form.errors.has('name')" class="offset-3" v-html="form.errors.get('name')" />
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3" for="exampleInputPassword1">status</label>
                    <div class="col-sm-9">
                        <div class="form-check form-check-inline">
                                    <input class="form-check-input"  :class="{ 'is-invalid': form.errors.has('status')}" type="radio" value="1" v-model="form.status" id="active">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Active
                                    </label>
                        </div>

                        <div class="form-check form-check-inline">
                                    <input class="form-check-input"  :class="{ 'is-invalid': form.errors.has('status')}" type="radio" value="0" v-model="form.status" id="inactive">
                                    <label class="form-check-label" for="inactive">
                                        Inactive
                                    </label>
                        </div>

                    </div>
                 
                  </div>
                  
                
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" :disabled="form.busy" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            <!-- /.card -->

            <!-- Form Element sizes -->
            
            <!-- /.card -->

            
            <!-- /.card -->

            <!-- Input addon -->
         
            <!-- /.card -->
            <!-- Horizontal Form -->
          
            <!-- /.card -->

          </div>
          <!--/.col (left) -->
          <!-- right column -->
       
        </div>
      </div>
    </section>
</div>
    
  
</template>

<script>
export default {
    name: 'catagories',

     data: () => ({
    form: new Form({
      name: null,
      status: 1,
      busy: false,
    })
  }),
    methods: {
        async  addCatagory (){
               const response = await this.form.post('/addCatagories')
               .then((result) => {
                    Toast.fire({
                    icon: 'success',
                    title: 'added successfully'
                    }) 
                    this.form.name=null;
                     //this.$router.push("/home") //route another route
               }).catch((err) => {
                     Toast.fire({
                    icon: 'error',
                    title: 'added failed'
                    })
                  
               });
        }
    },
  
 
  
}
</script>