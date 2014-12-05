json.array!(@suggesthosts) do |suggesthost|
  json.extract! suggesthost, :id, :name, :email
  json.url suggesthost_url(suggesthost, format: :json)
end
