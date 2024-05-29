class ApplicationController < ActionController::API
  before_action :authorized

  # Encode a JWT token with the given payload
  def encode_token(payload)
    JWT.encode(payload, ENV['JWT_SECRET'])
  end

  # Decode the JWT token from the Authorization header
  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, ENV['JWT_SECRET'], true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  # Retrieve the Authorization header
  def auth_header
    request.headers['Authorization']
  end

  # Get the current user based on the decoded token
  def current_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @current_user ||= User.find_by(id: user_id)
    end
  end

  # Check if a user is logged in
  def logged_in?
    !!current_user
  end

  # Authorize the request if the user is logged in
  def authorized
    render json: { message: 'Please Log in' }, status: :unauthorized unless logged_in?
  end
end
