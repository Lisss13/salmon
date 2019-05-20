class ApplicationController < ActionController::Base
  layout :layout

  private

  def layout
    is_a?(Devise::SessionsController) ? false : 'application'
  end
end
