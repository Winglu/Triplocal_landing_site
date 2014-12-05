json.array!(@visitors) do |visitor|
  json.extract! visitor, :id, :email, :code, :invite_code, :shares
  json.url visitor_url(visitor, format: :json)
end
