require_relative 'questions_database'

class Replies
  attr_accessor :question_id, :parent_reply_id, :users_id, :body
  def self.all
    response = QuestionsDatabase.instance.execute("SELECT * FROM replies")
    response.map { |row_hash| Replies.new(row_hash) }
  end

  def initialize(row_hash)
    @id = row_hash['id']
    @question_id = row_hash['question_id']
    @parent_reply_id = row_hash['parent_reply_id']
    @users_id = row_hash['users_id']
    @body = row_hash['body']
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute("SELECT * FROM replies WHERE id = #{id}")
    Replies.new(data.first)
  end

  def self.find_by_user_id(user_id)
    response = QuestionsDatabase.instance.execute(<<-SQL)
    SELECT *
    FROM replies
    WHERE users_id = #{user_id};
    SQL
    response.map { |row_hash| Replies.new(row_hash) }
  end

  def self.find_by_question_id(question_id)
    response = QuestionsDatabase.instance.execute(<<-SQL)
    SELECT *
    FROM replies
    WHERE question_id = #{question_id};
    SQL
    response.map { |row_hash| Replies.new(row_hash) }
  end

  def author
    user = Users.find_by_id(users_id)
    user.fname + ' ' + user.lname
  end

  def question
    question = Questions.find_by_id(question_id)
  end

  def parent_reply
    
  end
end

