# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  poll_id    :integer          not null
#  text       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Question < ApplicationRecord
  validates :text, :poll_id, presence: true
  
  belongs_to :poll

  has_many :answer_choices,
    foreign_key: :question_id,
    class_name: :AnswerChoice

end
