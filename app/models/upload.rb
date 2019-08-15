class Upload < ApplicationRecord
  has_one_attached :video

  def video_url
    self.video.attached? ? Rails.application.routes.url_helpers.rails_blob_path(self.video, only_path: true) : nil
  end

end
