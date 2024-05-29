class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  # GET /profile
  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save
      render json: { user: UserSerializer.new(@user) }, status: :created
    else
      render json: { error: @user.errors.full_messages.to_sentence }, status: :unprocessable_entity
    end
  end

  private

  # Strong parameters for user
  def user_params
    params.require(:user).permit(:username, :password, :bio, :avatar)
  end
end
