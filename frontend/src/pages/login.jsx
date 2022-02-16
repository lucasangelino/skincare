import * as React from 'react';

  export default function Login() {
    return (
      <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-t-50 p-b-90">
				<form class="login100-form validate-form flex-sb flex-w">
					<span class="login100-form-title mb-3">
						Chat - Ingreso
					</span>
					
					<div class="wrap-input100 validate-input mb-3">
						<input class="input100" type="email" name="email" placeholder="Email" />
						<span class="focus-input100"></span>
					</div>
					
					
					<div class="wrap-input100 validate-input mb-3">
						<input class="input100" type="password" name="password" placeholder="Password" />
						<span class="focus-input100"></span>
					</div>
					
					<div class="row mb-3">
						<div class="col">
							<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
							<label class="label-checkbox100">
								Recordarme
							</label>
						</div>

						<div class="col text-right">
							<a href="register.html" class="txt1">
								Nueva cuenta?
							</a>
						</div>
					</div>

					<div class="container-login100-form-btn m-t-17">
						<button class="login100-form-btn">
							Ingresar
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>
    );
  }