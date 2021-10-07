class Solution:
    def isRectangleCover(self, rectangles: List[List[int]]) -> bool:
        s, area = set(), 0
        x1, y1, x2, y2 = float("inf"), float("inf"), float("-inf"), float("-inf")

        for rectangle in rectangles:
            s1, s2, s3, s4 = rectangle[0], rectangle[1], rectangle[2], rectangle[3]
            x1, y1 = min(x1, s1), min(y1, s2)
            x2, y2 = max(x2, s3), max(y2, s4)

            area += (s3 - s1) * (s4 - s2)

            if (s1, s2) in s:
                s -= {(s1, s2)}
            else:
                s.add((s1, s2))

            if (s1, s4) in s:
                s -= {(s1, s4)}
            else:
                s.add((s1, s4))

            if (s3, s4) in s:
                s -= {(s3, s4)}
            else:
                s.add((s3, s4))

            if (s3, s2) in s:
                s -= {(s3, s2)}
            else:
                s.add((s3, s2))

        if (
            (x1, y1) not in s
            or (x1, y2) not in s
            or (x2, y2) not in s
            or (x2, y1) not in s
            or len(s) != 4
        ):
            return False
        return area == (x2 - x1) * (y2 - y1)
