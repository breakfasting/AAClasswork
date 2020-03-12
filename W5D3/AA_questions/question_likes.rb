require_relative 'questions_database'

class QuestionLikes
  attr_accessor :question_id, :users_id
  def self.all
    response = QuestionsDatabase.instance.execute("SELECT * FROM question_likes")
    response.map { |row_hash| QuestionLikes.new(row_hash) }
  end

  def initialize(row_hash)
    @id = row_hash['id']
    @question_id = row_hash['question_id']
    @users_id = row_hash['users_id']  
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute("SELECT * FROM question_likes WHERE id = #{id}")
    QuestionLikes.new(data.first)
  end
end