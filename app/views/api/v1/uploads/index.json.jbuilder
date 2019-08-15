json.array! @uploads do |upload|
  json.extract! upload, :id
  json.video url_for(upload.video)
end
