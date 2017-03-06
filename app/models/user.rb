class User < ActiveRecord::Base
  has_many :images
  has_many :galleries
  has_secure_password
  validates :email, :presence => true, :uniqueness => true
end
