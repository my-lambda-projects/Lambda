require 'nokogiri'
require 'rest-client'

class Review
    attr_reader :raw, :date, :stars, :user, :body

    def initialize(html='')
        @raw = html
        @noko = Nokogiri::HTML(html)
        @date = extract_meta('datePublished')
        @stars = extract_meta('ratingValue')
        @user = extract_user
        @body = extract_body
    end

    def five_star?
        @stars.to_i == 5
    end

    private
        def extract_content()
            @noko.css('div.review-content')
        end

        def extract_meta(property)
            extract_content.css("meta[itemprop='#{property}']")
                           .attr('content').value
        end

        def extract_user()
            @noko.css('ul.user-passport-info')
                 .css('li.user-name')
                 .text.strip
        end

        def extract_body()
            extract_content.css("p[itemprop='description']").text
        end
end

def parse()
    file_handle_input = File.open('data/fat-angel.html', 'r')
    html_doc = Nokogiri::HTML(file_handle_input.read)

    first_rev = html_doc.css('ul.reviews').css('li')[0]

    review = Review.new first_rev.to_html
end

def crawl()
    # get the HTML for Fat Angel
    domain = 'http://www.yelp.com'
    response = RestClient.get(domain + '/biz/fat-angel-san-francisco',
                              :user_agent => 'Chrome')

    file_handle_write = File.open('data/fat-angel.html', 'w')
    file_handle_write.puts response.body

    # perform Breadth First Search
    bfs = BFS.new('/biz/fat-angel-san-francisco', domain)
    healthy_rest = bfs.search

    puts "I want to eat at #{healthy_rest}"
end

class BFS
    def initialize(initial_state, host)
        @queue = [initial_state]
        @host = host
    end

    def search
        until @queue.empty?
            current_url = @queue.shift

            puts "Current url is #{current_url}"
            current_state = url_to_nokogiri(@host + current_url)

            if perfect_health? current_state
                return current_url
            else
                expand current_state
            end
        end
        return nil
    end

private
    def expand(state)
      name = state.css('h1.biz-page-title').text.strip
      p "Expanding #{name}"
        similar_states = similar_businesses(state)
        @queue.concat(similar_states)
    end

    def similar_businesses(state)
        state.css('div.related-businesses ul')
                                 .css('li')
                                 .css('a.biz-name')
                                 .map { |a| a['href'] }
    end

    def url_to_nokogiri(url)
        response = RestClient.get(url, :user_agent => 'Chrome')
        Nokogiri::HTML(response.body)
    end

    def perfect_health?(state)
        score = state.css('li.health-score')
                    .css('div.health-score-info')
                    .css('dd')
                    .text.strip.split('out of')[0].to_i
        score == 100
    end
end

parse()
crawl()
