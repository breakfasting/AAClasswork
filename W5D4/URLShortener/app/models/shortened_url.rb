# == Schema Information
#
# Table name: shortened_urls
#
#  id         :bigint           not null, primary key
#  long_url   :string           not null
#  short_url  :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'securerandom'

class ShortenedUrl < ApplicationRecord
  validates :long_url, presence: true, uniqueness: { scope: :user_id }
  validates :short_url, presence: true, uniqueness: true

  def self.random_code(user, long_url)
    code = SecureRandom::urlsafe_base64
    while self.exists?(short_url: code)
      code = SecureRandom::urlsafe_base64
    end
    ShortenedUrl.create!(long_url: long_url, short_url: code, user_id: user.id)
  end

  def num_clicks
    visits.length
  end

  def num_uniques
    visitors.uniq.length
  end

  belongs_to :submitter,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :visits,
    primary_key: :id,
    foreign_key: :shortened_url_id,
    class_name: :ShortenedUrl

  has_many :visitors,
    through: :visits,
    source: :user,
    class_name: :Visit
end
