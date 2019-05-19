require 'test_helper'

class RangeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get range_index_url
    assert_response :success
  end

end
