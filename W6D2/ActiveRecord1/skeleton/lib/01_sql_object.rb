require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    @col ||= DBConnection.execute2(<<-SQL)
    SELECT
      *
    FROM
      #{table_name}
    SQL

    return @col[0].map(&:to_sym)

  end

  def self.finalize!
    self.columns.each do |col|
      define_method(col) do 
        attributes[col]
      end

      define_method("#{col}=") do |val|
        attributes[col] = val
      end
    end

  end

  def self.table_name=(table_name)
    @table_name ||= table_name
  end

  def self.table_name
    @table_name ||= self.to_s.tableize
  end

  def self.all
    all_rows = DBConnection.execute(<<-SQL)
    SELECT
      *
    FROM
      #{table_name}
    SQL

    parse_all(all_rows)

  end

  def self.parse_all(results)

     results.map do |ele|
      self.new(ele)
    end

    
  end

  def self.find(id)
    row = DBConnection.execute(<<-SQL, id)
      SELECT
        *
      FROM
        #{table_name}
      WHERE
        id = ?
    SQL

    parse_all(row)[0]

    
  end

  def initialize(params = {}) # @attributes => {name: "Gizmo", owner_id: 123}
    # ...
    params.each do |name, val|
      symbol = name.to_sym
      if !self.class.columns.include?(symbol)
        raise "unknown attribute '#{name}'"
      else
        self.send("#{symbol}=", val)
      end

    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    self.class.columns.map do |col|
      self.send(col)
    end
  end

  def insert
    col_names = self.class.columns[1..-1].join(', ')
    question_marks = [" ? "] * (self.class.columns.length - 1)
    question_marks = question_marks.join(", ")

    DBConnection.execute(<<-SQL, *attribute_values[1..-1])
      INSERT INTO
        #{self.class.table_name} (#{col_names})
      VALUES
        (#{question_marks})
    SQL

    self.send("id=", DBConnection.last_insert_row_id)
  end


  def update
    cols = self.class.columns[1..-1].map {|ele| ele.to_s + " = ?"}.join(",")

    DBConnection.execute(<<-SQL, *attribute_values[1..-1], attribute_values[0])
      UPDATE
        #{self.class.table_name}
      SET
       #{cols}
      WHERE
        id = ?

    SQL

  end

  def save
    if self.send(:id).nil?
      insert
    else
      update
    end
  
  end
end
