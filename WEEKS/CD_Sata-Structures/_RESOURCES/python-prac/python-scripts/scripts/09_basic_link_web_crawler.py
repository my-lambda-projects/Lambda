import requests
import re

try:
    from urllib.parse import urljoin
except ImportError:
    from urlparse import urljoin

# regex
link_re = re.compile(r'href="(.*?)"')


def crawl(url):

    req = requests.get(url)

    # Check if successful
    if req.status_code != 200:
        return []

    # Find links
    links = link_re.findall(req.text)

    print("\nFound {} links".format(len(links)))

    # Search links for emails
    for link in links:

        # Get an absolute URL for a link
        link = urljoin(url, link)

        print(link)


if __name__ == "__main__":
    crawl("https://lambda-static-server.netlify.app/")


#
# python3 09_basic_link_web_crawler.py
#
# Found 11 links
# https://lambda-static-server.netlify.app/assets/prism.css
# https://lambda-static-server.netlify.app/assets/style.css
# https://lambda-static-server.netlify.app/directory.html
# https://lambda-static-server.netlify.app/1-projects/directory.html
# https://lambda-static-server.netlify.app/2-content/directory.html
# https://lambda-static-server.netlify.app/1-projects/directory.html
# https://lambda-static-server.netlify.app/3-misc/directory.html
# https://lambda-static-server.netlify.app/4-assets/directory.html
# https://lambda-static-server.netlify.app/5-websites/directory.html
# https://lambda-static-server.netlify.app/13-web-tools/directory.html
# https://lambda-static-server.netlify.app/Interview/directory.html
# |05:08:38|bryan@LAPTOP-9LGJ3JGS:[scripts] scripts_exitstatus:0[╗__________________________________________________________o>
