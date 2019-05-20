class PriceListController < ApplicationController
  layout 'admin'

  def index
    @files = PriseList.all
  end

  def create
    new_file = PriseList.new(file_params)
    if new_file.save
      redirect_to prise_url
    else
      redirect_to prise_url
    end
  end

  private

  def file_params
    params.require(:prise_list).permit(:file)
  end
end
