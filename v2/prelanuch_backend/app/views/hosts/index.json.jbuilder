json.array!(@hosts) do |host|
  json.extract! host, :id, :email, :firstName, :lastName, :location, :title, :des, :perDes
  json.url host_url(host, format: :json)
end
