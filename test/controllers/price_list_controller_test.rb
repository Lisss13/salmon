require 'test_helper'

class PriceListControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get price_list_index_url
    assert_response :success
  end

end
