class ApplicationController < ActionController::Base
  include Authentication
  helper_method :current_user, :set_data

  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  private
    def current_user
      return unless Current.session

      @current_user ||= User.find_by(id: Current.session.user_id)
    end

    def set_data
      return unless current_user

      @projects = current_user.projects
      @todos = current_user.todos.includes(:project)
    end
end
