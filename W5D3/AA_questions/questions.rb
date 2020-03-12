require_relative 'questions_database'


require 'byebug'

class Questions 
  attr_reader :id
  attr_accessor :title, :body, :person_id

  def initialize(question_hash)
    @id = question_hash['id']
    @title = question_hash['title']
    @body = question_hash['body']
    @person_id = question_hash['person_id']
  end

  def self.all
    response = QuestionsDatabase.instance.execute('SELECT * FROM questions')
    all_questions = response.map do |row|
      Questions.new(row)
    end
  end

  def self.find_by_id(id)
    response = QuestionsDatabase.instance.execute("SELECT * FROM questions WHERE id = #{id}")
    Questions.new(response.first)
  end

  def self.find_by_author_id(author_id)
    response = QuestionsDatabase.instance.execute(<<-SQL, author_id)
      SELECT * 
      FROM questions
      WHERE person_id = ?
    SQL
    all_questions = response.map do |row|
      Questions.new(row)
    end
  end

  def author
    user = Users.find_by_id(self.person_id)
    user.fname + ' ' + user.lname
  end

  def replies
    Replies.find_by_question_id(self.id)
  end

end

# p Questions.all
# p Questions.find_by_author_id('1; DROP TABLE users')
# SQL injection attack

# p q1
# p q1[0].replies