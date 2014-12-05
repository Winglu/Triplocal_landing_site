require 'test_helper'

class SuggesthostsControllerTest < ActionController::TestCase
  setup do
    @suggesthost = suggesthosts(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:suggesthosts)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create suggesthost" do
    assert_difference('Suggesthost.count') do
      post :create, suggesthost: { email: @suggesthost.email, name: @suggesthost.name }
    end

    assert_redirected_to suggesthost_path(assigns(:suggesthost))
  end

  test "should show suggesthost" do
    get :show, id: @suggesthost
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @suggesthost
    assert_response :success
  end

  test "should update suggesthost" do
    patch :update, id: @suggesthost, suggesthost: { email: @suggesthost.email, name: @suggesthost.name }
    assert_redirected_to suggesthost_path(assigns(:suggesthost))
  end

  test "should destroy suggesthost" do
    assert_difference('Suggesthost.count', -1) do
      delete :destroy, id: @suggesthost
    end

    assert_redirected_to suggesthosts_path
  end
end
