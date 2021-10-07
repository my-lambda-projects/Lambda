# O(nm) where m is the total "number of recursive calls" or "nodes in the search tree".
# Then you need to relate m to n in the worst case


class Solution:
    def removeInvalidParentheses(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
        if not s:
            return [""]
        result = []
        self.remove(s, 0, 0, result, "(", ")")
        return result

    def remove(self, s, last_i, last_j, result, openP, closeP):
        count = 0
        for i in range(last_i, len(s)):
            if s[i] == openP:
                count += 1
            if s[i] == closeP:
                count -= 1
            if count >= 0:
                continue
            # If it gets here, it means count < 0. Obviously.
            # That means from start_to_count to count_i (inclusive), there is an extra
            # pair[1].
            # e.g. if sub_str = ()), then we can remove the middle )
            # e.g. if sub_str = ()()), the we could remove sub_str[1], it becomes (())
            #  or we could remove sub_str[3], it becomes ()()
            # In the second example, for the last two )), we want to make sure we only
            # consider remove the first ), not the second ). In this way, we can avoid
            # duplicates in the results.
            for j in range(last_j, i + 1):
                if s[j] == closeP and (j == last_j or s[j - 1] != closeP):
                    # why here we start with i
                    # So for start_to_count value
                    # we know in str_to_check, we have scanned up to i, right?
                    # The next char in the str_to_check we want to look at is of index (i + 1) in str_to_check
                    # We have remove one char bewteen last_i and i inclusive to get the new_str_to_check
                    # So the char we wanted to look at is of index (i + 1 - 1) in the new_str_to_check. (-1 because we removed one char)
                    # That's i. BOOM!!
                    self.remove(s[:j] + s[j + 1 :], i, j, result, openP, closeP)
            # So after the above inner loop finishes, we shouldn't allow the outer loop continue to next round because self.remove in the
            # inner loop has taken care of the rest chars after count_i
            return
        rs = s[::-1]

        # Because in the above count calculation, we only consider count < 0 case to remove stuff.
        # The default pair is ['(', ')']. So we only consider the case where there are more ')'  than '('
        # e.g "(()" can pass the above loop
        # So we need to reverse it to ")((" and call it with pair [')', '(']
        if openP == "(":
            self.remove(rs, 0, 0, result, ")", "(")
        else:
            result.append(rs)
