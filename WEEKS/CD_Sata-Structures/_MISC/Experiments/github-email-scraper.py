from github import Github
import os
import sys


def email_pls(g, commit):
    users = g.search_users(commit)
    for u in users:
        if (
            u.email is not None
            and u.company is not None
            and u.company.lower() == commit.lower()
        ):
            # 2 ez
            print(u.email, u.name)
        else:
            # thx u git
            user_hist = {}
            events = u.get_public_events()
            for i, e in enumerate(events):
                if i == 15:
                    # look at three items max
                    break
                commits = e.payload.get("commits")
                if commits is None:
                    continue
                else:
                    for j, c in enumerate(commits):
                        if j == 15:
                            break
                        author = c.get("author")
                        if "noreply" in author["email"]:
                            continue
                        if user_hist.get("%s %s" % (author["email"], author["name"])):
                            user_hist["%s %s" % (author["email"], author["name"])] += 1
                        else:
                            user_hist["%s %s" % (author["email"], author["name"])] = 1
            if user_hist:
                # otherwise... u are a ghost
                print(max(user_hist, key=user_hist.get))
    print(g, commit)


if __name__ == "__main__":
    at = os.getenv("GITHUB_TOKEN")
    if at is None:
        u = os.getenv("GITHUB_USERNAME")
        p = os.getenv("GITHUB_PASSWORD")
        if None in [u, p]:
            print("set up access token or username/pw env vars")
            exit(1)
        g = Github(u, p)
    else:
        g = Github(at)
    email_pls(g, sys.argv[1])
