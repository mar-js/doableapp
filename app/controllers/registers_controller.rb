class RegistersController < ApplicationController
  skip_before_action :require_authentication, only: [ :new, :create ]
end
