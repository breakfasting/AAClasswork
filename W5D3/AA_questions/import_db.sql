PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL, 
  lname TEXT NOT NULL 
);


CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT,
  person_id INTEGER NOT NULL,

  FOREIGN KEY (person_id) REFERENCES users(id)
);


CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  person_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (person_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);


CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  parent_reply_id INTEGER,
  users_id INTEGER NOT NULL,
  body TEXT NOT NULL,

  FOREIGN KEY (users_id) REFERENCES users(id),
  FOREIGN KEY (parent_reply_id) REFERENCES replies(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);


CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  users_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (users_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id) 
);

INSERT INTO
  users (fname, lname)
VALUES
  ('Jared', 'Lester'),
  ('Wayne', 'Su');

INSERT INTO
  questions (title, body, person_id)
VALUES
  ('How do i get a job in japan?', 'Experienced responses only, please.',(SELECT id FROM users WHERE fname = 'Jared' AND lname = 'Lester') ),
  ('How do I learn graffiti?', 'Experienced responses only.',(SELECT id FROM users WHERE fname = 'Wayne' AND lname = 'Su') );

INSERT INTO 
  replies (question_id, parent_reply_id, users_id, body)
VALUES
  (
    (SELECT id FROM questions WHERE title = 'How do i get a job in japan?' ),
    NULL,
    (SELECT id FROM users WHERE fname = 'Wayne' AND lname = 'Su'),
    'Buy a plane ticket, and you''re good to go!'
  );
  
INSERT INTO 
  replies (question_id, parent_reply_id, users_id, body)
VALUES
  (
    (SELECT id FROM questions WHERE title = 'How do i get a job in japan?' ),
    (SELECT id FROM replies WHERE body = 'Buy a plane ticket, and you''re good to go!'),
    (SELECT id FROM users WHERE fname = 'Jared' AND lname = 'Lester'),
    'I''m sure it''s not that easy, I''ll just google it.' 
  );

INSERT INTO
  question_follows (person_id, question_id)
VALUES
  (
    (SELECT id FROM users WHERE fname = 'Jared' AND lname = 'Lester'),
    (SELECT id FROM questions WHERE title = 'How do i get a job in japan?' )
  ),
  (
    (SELECT id FROM users WHERE fname = 'Wayne' AND lname = 'Su'),
    (SELECT id FROM questions WHERE title = 'How do I learn graffiti?' )
  );
