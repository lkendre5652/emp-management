<div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9 bg-white py-5 border shadow-lg">
          <div class="row">
            <div
              class="col-lg-6 col-sm-12 d-flex justify-content-center login_form_img"
            >
              <i class="fas fa-sign-in-alt ligin_icon py-5"></i>
            </div>

            <div class="col-lg-6 col-sm-12 py-4 px-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Login here!</h1>
              </div>
              <form method="post" action="<?php echo base_url(); ?>index.php/home/">
                <div class="form-group">
                  <div class="form-group">
                    <input
                      type="text" name="username" class="form-control rounded-pill form-control-user py-3" placeholder="User name" autocomplete="off"
                    />
                    <span><?php echo (empty( $user_err ))? '' : $user_err ; ?></span>
                  </div>
                </div>

                <div class="form-group py-4">
                  <div class="form-group">
                    <input name="password" class="form-control rounded-pill form-control-user py-3" placeholder="Password"type="password" autocomplete="off"
                    />
                    <span><?php echo (empty( $user_err ))? '' : $user_err ; ?></span>
                  </div>
                </div>
                <input type="submit" class="btn w-100 rounded-pill btn-primary py-3" value="Login" />                  
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>