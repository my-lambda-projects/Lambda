from typing import List


class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        result = []
        for asteroid in asteroids:
            if not result or asteroid > 0:
                result.append(asteroid)
            else:
                while result and result[-1] > 0:
                    if result[-1] > -asteroid:
                        break
                    elif result[-1] < -asteroid:
                        result.pop()
                    else:
                        result.pop()
                        break
                else:
                    result.append(asteroid)
        return result
