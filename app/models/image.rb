class Image < ActiveRecord::Base
  belongs_to :User
  has_and_belongs_to_many :galleries
end
