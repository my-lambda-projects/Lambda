import fnmatch
import os

# constants
PATH = "./"
PATTERN = "*.md"


def get_file_names(filepath, pattern):
    matches = []
    if os.path.exists(filepath):
        for root, dirnames, filenames in os.walk(filepath):
            for filename in fnmatch.filter(filenames, pattern):
                # matches.append(os.path.join(root, filename))  # full path
                matches.append(os.path.join(filename))  # just file name
        if matches:
            print("Found {} files:".format(len(matches)))
            output_files(matches)
        else:
            print("No files found.")
    else:
        print("Sorry that path does not exist. Try again.")


def output_files(list_of_files):
    for filename in list_of_files:
        print(filename)


if __name__ == "__main__":
    get_file_names("./", "*.py")


# 05:09:47|bryan@LAPTOP-9LGJ3JGS:[scripts] scripts_exitstatus:1[╗__________________________________________________________o>
#
# python3 10_find_files_recursively.py
# Found 31 files:
# 02_find_all_links.py
# 03_simple_twitter_manager.py
# 04_rename_with_slice.py
# 05_load_json_without_dupes.py
# 06_execution_time.py
# 07_benchmark_permissions_loading_django.py
# 08_basic_email_web_crawler.py
# 09_basic_link_web_crawler.py
# 10_find_files_recursively.py
# 11_optimize_images_with_wand.py
# 12_csv_split.py
# 13_random_name_generator.py
# 15_check_my_environment.py
# 16_jinja_quick_load.py
# 18_zipper.py
# 19_tsv-to-csv.py
# 20_restore_file_from_git.py
# 21_twitter_bot.py
# 22_git_tag.py
# 23_flask_session_test.py
# 24_sql2csv.py
# 25_ip2geolocation.py
# 26_stock_scraper.py
# 27_send_sms.py
# 28_income_tax_calculator.py
# 29_json_to_yaml.py
# 30_fullcontact.py
# 31_youtube_sentiment.py
# 32_stock_scraper.py
# 33_country_code.py
# 34_git_all_repos.py
# |05:10:14|bryan@LAPTOP-9LGJ3JGS:[scripts] scripts_exitstatus:0[╗__________________________________________________________o>
