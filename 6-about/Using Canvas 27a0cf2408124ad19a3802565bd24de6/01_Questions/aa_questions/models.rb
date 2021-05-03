require 'singleton'
require 'sqlite3'

class QuestionsDBConnection < SQLite3::Database
    include Singleton
    
    def initialize
        super('questions.db')
        self.type_translation = true
        self.results_as_hash = true
    end
end


class User
    attr_accessor :id, :fname, :lname
    def self.all
        data = QuestionsDBConnection.instance.execute("SELECT * FROM users")
        data.map { |datum| User.new(datum)}
    end

    def self.find_by_id(id)
        user = QuestionsDBConnection.instance.execute(<<-SQL, id)
            SELECT
                *
            FROM
                users
            WHERE
                id = ?
        SQL
        return nil unless user.length > 0

        User.new(user.first)
    end

    
    def self.find_by_name(fname, lname)
        user = QuestionsDBConnection.instance.execute(<<-SQL, fname, lname)
        SELECT
        *
        FROM
        users
        WHERE
        fname = ? AND lname = ?
        SQL
        return nil unless user.length > 0
        
        User.new(user.first)
    end
    
    def initialize(options)
    @id = options["id"]
        @fname = options["fname"]
        @lname = options["lname"]
    end
    
    def authored_questions
       Question.find_by_id(self.id)
    end

    def authored_replies
        Reply.find_by_user_id(self.id)
    end

    def followed_questions
        QuestionFollow::followed_questions_for_user_id(self.id)
    end
end

class Question 
    attr_accessor :id, :title, :body, :user_id
    def self.all
        data = QuestionsDBConnection.instance.execute("SELECT * FROM questions")
        data.map { |datum| Question.new(datum) }
    end

    def self.most_followed(n)
        QuestionFollow::most_followed_questions(n)
    end

    def self.find_by_author_id(user_id)
        questions = QuestionsDBConnection.instance.execute(<<-SQL, user_id)
            SELECT
                *
            FROM
                questions
            WHERE
                user_id = ?
        SQL
        return nil unless questions.length > 0

        questions.map { |q| Question.new(q) }
    end

    def self.find_by_id(id)
        question = QuestionsDBConnection.instance.execute(<<-SQL, id)
            SELECT
                *
            FROM
                questions
            WHERE
                id = ?
        SQL
        return nil unless question.length > 0

        Question.new(question.first)
    end

    def initialize(options)
        @id = options["id"]
        @title = options['title']
        @body = options['body']
        @user_id = options['user_id']
    end

    def author
        User.find_by_id(self.user_id)
    end

    def replies
        Reply.find_by_question_id(self.id)
    end

    def followers
        QuestionFollow::followers_for_question_id(self.id)
    end

end

class QuestionFollow
    attr_accessor :user_id, :question_id
    def self.all
        data = QuestionsDBConnection.instance.execute("SELECT * FROM question_follows")
        data.map { |datum| QuestionFollow.new(datum) }
    end

    def self.most_followed_questions(n)
        questions = QuestionsDBConnection.instance.execute(<<-SQL, n)
            SELECT
                *, COUNT(question_follows.question_id) AS q_count
            FROM
                question_follows
            INNER JOIN
                questions
                ON
                    questions.id = question_follows.question_id
            GROUP BY
                question_follows.question_id
            ORDER BY
                q_count DESC
            LIMIT
                ?
        SQL
        return nil unless questions.length > 0

        questions.map do |sub| 
            Question.new(
                'id' => sub[2],
                'title' => sub[3],
                'body' => sub[4],
                'user_id' => sub[5]
            )
        end
    end

    def initialize(options)
        @user_id = options['user_id']
        @question_id = options['question_id']
    end

    def self.followers_for_question_id(question_id)

        users = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
            SELECT
                *
            FROM
                question_follows
            INNER JOIN
                users
                ON
                    users.id = question_follows.user_id
            WHERE
                question_follows.question_id = ?
        SQL
        return nil unless users.length > 0

        users.map { |user| User.new(user) }
    end

    def self.followed_questions_for_user_id(user_id)

        questions = QuestionsDBConnection.instance.execute(<<-SQL, user_id)
            SELECT
                *
            FROM
                question_follows
            INNER JOIN
                questions
                ON
                    questions.id = question_follows.question_id
            WHERE
                question_follows.user_id = ?
        SQL
        return nil unless questions.length > 0

        questions.map { |question| Question.new(question) }
    end


end

class Reply
    attr_accessor :id, :body, :parent_reply_id, :user_id, :question_id
    def self.all
        data = QuestionsDBConnection.instance.execute("SELECT * FROM replies")
        data.map { |datum| Reply.new(datum) }
    end

    def self.find_by_user_id(user_id)
        reply = QuestionsDBConnection.instance.execute(<<-SQL, user_id)
            SELECT
                *
            FROM
                replies
            WHERE
                user_id = ?
        SQL
        return nil unless reply.length > 0

        Reply.new(reply.first)
    end


    def self.find_by_question_id(question_id)
        replies = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
            SELECT
                *
            FROM
                replies
            WHERE
                question_id = ?
        SQL
        return nil unless replies.length > 0

        replies.map { |reply| Reply.new(reply) }
    end

    def self.find_by_id(id)
        reply = QuestionsDBConnection.instance.execute(<<-SQL, id)
            SELECT
                *
            FROM
                replies
            WHERE
                id = ?
        SQL
        return nil unless reply.length > 0

        Reply.new(reply.first)
    end

    def initialize(options)
        @id = options['id']
        @body = options['body']
        @parent_reply_id = options['parent_reply_id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end

    def author
        User.find_by_id(self.user_id)
    end

    def question
        Question.find_by_id(self.question_id)
    end

    def parent_reply
        Reply.find_by_id(self.parent_reply_id)
    end

    def child_replies
        reply = QuestionsDBConnection.instance.execute(<<-SQL, self.id)
            SELECT
                *
            FROM
                replies
            WHERE
                parent_id = ?
        SQL
        return nil unless reply.length > 0

        Reply.new(reply.first)
    end

end

class QuestionLike
    def self.all
        data = QuestionsDBConnection.instance.execute("SELECT * FROM question_likes")
        data.map { |datum| QuestionLike.new(datum) }
    end

    def self.likers_for_question_id(question_id)
        liker = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
            SELECT
                users.id, fname, lname
            FROM
                question_likes
            JOIN
                users
                ON question_likes.user_id = users.id
            WHERE
                question_likes.question_id = ?
        SQL
        return nil unless liker.length > 0

        liker.map { |l| User.new(l) }
    end

    def self.num_likes_for_question_id(question_id)
        count = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
            SELECT
                COUNT(*)
            FROM
                question_likes
            WHERE
                question_likes.question_id = ?
        SQL
        return nil unless liker.length > 0

        
    end

    def initialize(options)
        @user_id = options['user_id']
        @question_id = options['question_id']
    end

   
end

if $PROGRAM_NAME == __FILE__
    # p QuestionLike.all
    # puts
    # p Reply.all
    # puts
    # p QuestionFollow.all
    # puts
    # p Question.all
    # puts
    # p User.all
    # puts
    ryan = User.find_by_name('Ryan', 'Mapa')
    # p ryan.authored_questions
    # puts
    # p ryan.authored_replies
    # puts
    # reply = ryan.authored_replies
    # p reply.author
    # puts
    # p reply.question
    # puts
    # p question = Question.all[-1]
    # puts
    # p Question.all
    # p question.author
    # puts
    # p question.replies
    # p QuestionFollow.followers_for_question_id(question.id)
    # f_qs = ryan.followed_questions
    # p f_qs
    # puts
    # p f_qs.first.followers
    p QuestionFollow::most_followed_questions(1)
    puts
    p QuestionLike.likers_for_question_id(1)


end