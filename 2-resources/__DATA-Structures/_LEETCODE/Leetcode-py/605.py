class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        count, next = 0, True
        for i in range(len(flowerbed) - 1):
            if flowerbed[i]:
                next = False
            elif flowerbed[i] == 0 and next and not flowerbed[i + 1]:
                count += 1
                next = False
            elif flowerbed[i] == 0 and not next:
                next = True

        if flowerbed[-1] == 0 and next:
            count += 1
        return count >= n
