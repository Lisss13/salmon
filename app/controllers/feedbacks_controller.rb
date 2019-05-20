class FeedbacksController < ApplicationController
  before_action :authenticate_user!, only: [:index]
  layout 'admin', only: [:index]

  def index
    @feedbacks_list = Feedback.all
  end

  def create
    feedback = Feedback.new(feedback_params)
    if feedback.save
      redirect_to action: :thank
    else
      redirect_to root_path
    end
  end

  def thank; end

  private

  def feedback_params
    params.require(:feedback)
          .permit(:name, :email, :organization, :surname, :phone)
  end
end
