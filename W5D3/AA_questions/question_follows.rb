require_relative 'questions_database'

class QuestionFollows
  attr_accessor :person_id, :question_id
  def self.all
    response = QuestionsDatabase.instance.execute("SELECT * FROM question_follows")
    response.map { |row_hash| QuestionFollows.new(row_hash) }
  end

  def initialize(row_hash)
    @id = row_hash['id']
    @person_id = row_hash['person_id']
    @question_id = row_hash['question_id']
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute("SELECT * FROM question_follows WHERE id = #{id}")
    QuestionFollows.new(data.first)
  end
end

# p QuestionFollows.all