require 'nokogiri'

class Review
  attr_reader :raw, :date, :stars, :user, :body

  def initialize(html='')
    @data = html
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
    @data.css('div.review-content')
  end

  def extract_review
    extract_content.css("meta[itemprop='reviewRating']")
    .attr('content').value
  end

  def extract_meta(property)
    extract_content.css("meta[itemprop='#{property}']")
    .attr('content').value
  end

  def extract_user()
    @data.css('ul.user-passport-info')
      .css('li.user-name')
      .text.strip
  end

  def extract_body()
    extract_content.css("p[itemprop='description']").text
  end
end

file = File.open('data/fat-angel.html', 'r')
html_doc = Nokogiri::HTML(file.read)

all_reviews = []

scores = {
  "1.0" => 0,
  "2.0" => 0,
  "3.0" => 0,
  "4.0" => 0,
  "5.0" => 0,
}

html_doc.css('ul.reviews > li').each do |li|
  review = Review.new(li)
  all_reviews.push(review)
  scores[review.stars] += 1
end

p scores
