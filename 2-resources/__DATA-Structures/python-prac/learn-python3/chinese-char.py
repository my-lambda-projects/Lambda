# -*- coding: utf-8 -*-
# @ description:
# @ author:
# @ created: 2018/7/21

from imp import reload
import re
import sys
import os

reload(sys)
sys.setdefaultencoding("utf8")


def translate(str):
    out = set()
    # correlating pretreatment process, including converted to Unicode, etc.
    line = str.strip(). decode('utf-8', 'ignore')
         # Chinese encoding range is: \ u4e00 to \ u9fa5
    p2 = re.compile(ur '[^ \ u4e00- \ u9fa5]')
    zh = " ".join(p2.split(line)).strip()
         # Zh = "\ n" .join (zh.split ()) #dsds obtained after correlation processing of Chinese text
    for s in zh.split():
                 # after correlation processing to obtain the Chinese text
                 out.add(s)
    return out


def extract_file(path):
    result = set()
    try:
                 f = open(path)  # open file
        lines = f.readlines()
        for line in lines:
            string = translate(line)
            if string:
                result.update(string)
    except Exception as e:
        pass
    return result
 
 
def extract(path):
    result = set()
    files = os.listdir(path)
    for file in files:
        if not file.startswith("."):
                         if not os.path.isdir (path + "/" + file): # judge whether it is a folder, not the folder only open ssgsg determine whether it is a folder, not the folder only open
                sub_file = extract_file(path + "/" + file)
                if sub_file:
                    result.update(sub_file)
            else:
                print file
                child = extract(path + "/" + file)
                if child:
                    result.update(child)
    return result
 
 
if __name__ == '__main__':
    path = "/Users/common"
    result = extract(path)
    res_file = open("result.txt", "w")
    for s in result:
        res_file.write(s + "\n")
 

