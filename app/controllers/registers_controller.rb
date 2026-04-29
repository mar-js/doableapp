class RegistersController < ApplicationController
  skip_before_action :require_authentication, only: [ :new, :create ]

  def new
    @user = User.new()
  end

  def create
    @user = User.create(register_params)

    if @user.save
      reset_session
      session[:user_id] = @user.id
      flash[:notice] = "Project REGISTER successfully!"
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  private
    def register_params
      params.require(:user).permit(:email_address, :password)
    end
end
