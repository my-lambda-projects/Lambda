# -home
# 	-src
# 	-A.JS (lines:4)
# 	-B.JS(lines:3)
# 	-test
# 		-C.js (lines:2)
# 	-temp
# 	-test.html(lines:10)
# -images
#
# create a func displayDirectory("home")
# // Name of file/directory | File or Dir | Total # of lines inside the node
#
# src | dir | 4
# temp | dir | 0
# test.html | file | 10
#
# you will be given an API getNodes("home") which will return you an array of dict
#
# [{name: "src"}, {name: "temp"}, {name:"test.html", lines: 10}]
# [{name: "A.JS", lines:4}]


class Solution:
    def displayDir(self, dirName):
        res = []
        arr = self.getNodes(dirName)

        for element in arr:
            if "lines" in element.keys():
                out = (
                    [element["name"]]
                    + [" | "]
                    + ["file"]
                    + [" | "]
                    + [str(element["lines"])]
                )

            else:
                out = (
                    [element["name"]]
                    + [" | "]
                    + ["dir"]
                    + [" | "]
                    + [str(self.getLines(element["name"]))]
                )
            res.append("".join(out))
        return res

    def getLines(self, dirName):
        arr = self.getNodes(dirName)
        numLines = 0

        for element in arr:
            if "lines" in element.keys():
                numLines += element["lines"]
            else:
                numLines += self.getLines(element["name"])

        return numLines

    def getNodes(self, strs):

        dict = {
            "home": [
                {"name": "src"},
                {"name": "abc"},
                {"name": "test.html", "lines": 10},
            ],
            "src": [{"name": "abc"}, {"name": "A.js", "lines": 4}],
            "abc": [{"name": "abc.js", "lines": 5}],
        }
        return dict[strs]
