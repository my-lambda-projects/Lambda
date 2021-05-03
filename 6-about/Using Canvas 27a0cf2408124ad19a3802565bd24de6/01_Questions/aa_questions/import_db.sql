PRAGMA foreign_keys = ON;

CREATE TABLE users(
    id INTEGER PRIMARY KEY,
    fname TEXT NOT NULL,
    lname TEXT
);

CREATE TABLE questions(
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    user_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_follows(
    user_id  INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies(
    id INTEGER PRIMARY KEY,
    body TEXT NOT NULL,
    parent_reply_id INTEGER,
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (parent_reply_id) REFERENCES replies(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE question_likes(
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO
    users (fname, lname)
VALUES
    ('Ryan', 'Mapa'),
    ('Angela', 'Topchev');

INSERT INTO
    questions (title, body, user_id)
VALUES
    ('how to tie my shoes', 'teach me pls', (SELECT id FROM users WHERE fname = 'Ryan')),
    ('angelas question', 'I have a question', (SELECT id FROM users WHERE fname = 'Angela'));

INSERT INTO
    replies (body, user_id, question_id, parent_reply_id)
VALUES
    ('use bunny knots', (SELECT id FROM users WHERE fname = 'Angela'), (SELECT id FROM questions WHERE title = 'how to tie my shoes'), NULL),
    ('I have an answer', (SELECT id FROM users WHERE fname = 'Ryan'), (SELECT id FROM questions WHERE title = 'angelas question'), NULL);

INSERT INTO
    replies (body, user_id, question_id, parent_reply_id)
VALUES
    ('What is the answer?', (SELECT id FROM users WHERE fname = 'Angela'), (SELECT id FROM questions WHERE title = 'angelas question'), (SELECT id FROM replies WHERE body = 'I have an answer'));

INSERT INTO
    question_likes (user_id, question_id)
VALUES
    ((SELECT id FROM users WHERE fname = 'Angela'), (SELECT id FROM questions WHERE title = 'how to tie my shoes')),
    ((SELECT id FROM users WHERE fname = 'Ryan'), (SELECT id FROM questions WHERE title = 'how to tie my shoes'));


INSERT INTO
    question_follows(user_id, question_id)
VALUES 
    ((SELECT id FROM users WHERE fname = 'Ryan'), (SELECT id FROM questions WHERE title = 'how to tie my shoes')),
    ((SELECT id FROM users WHERE fname = 'Angela'), (SELECT id FROM questions WHERE title = 'how to tie my shoes')),
    ((SELECT id FROM users WHERE fname = 'Angela'), (SELECT id FROM questions WHERE title = 'angelas question'));


