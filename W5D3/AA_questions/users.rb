require_relative 'questions_database'


class Users
  attr_reader :id #is this dangerous?
  attr_accessor :fname, :lname 
  def self.all
    data = QuestionsDatabase.instance.execute("SELECT * FROM users")
    data.map { |user_hash| Users.new(user_hash) }
  end

  def initialize(user_hash)
    @id = user_hash['id']
    @fname = user_hash['fname']
    @lname = user_hash['lname']
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute("SELECT * FROM users WHERE id = #{id}")
    Users.new(data.first)
  end

  def self.find_by_name(fname, lname)
    response = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
      SELECT *
      FROM users
      WHERE fname = ? AND lname = ?;
    SQL
    response.map { |row_hash| Users.new(row_hash) }   
  end

  def authored_questions
    
    Questions.find_by_author_id(self.id)
    
  end

  def authored_replies
    Replies.find_by_user_id(self.id)
  end

end

# user1 = Users.find_by_id(1)
# p user1.fname
# user1 = Users.find_by_name('Wayne', 'Su')
# p user1[0].authored_replies
