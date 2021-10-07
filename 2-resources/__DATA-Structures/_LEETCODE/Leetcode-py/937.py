class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        digit_log, letter_log = [], []
        for log in logs:
            if log.split()[1].isdigit():
                digit_log.append(log)
            else:
                letter_log.append(log)
        return (
            sorted(letter_log, key=lambda x: (x.split()[1:], x.split()[0])) + digit_log
        )
