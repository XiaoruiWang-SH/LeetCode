class Solution:
    def reverse(self, x: int) -> int:
        negative = x < 0
        if negative:
            x = -x
        reversed = []
        while x % 10 != 0 or x // 10 != 0:
            if x % 10 != 0 or len(reversed) > 0:
                reversed.append(x % 10)
            x = x // 10
        exponential = 0
        result = 0
        while len(reversed) != 0:
            result += reversed.pop() * (10 ** exponential)
            exponential += 1

        result = -result if negative else result
        if result > 2**31 - 1 or result <= -2**31:
            return 0

        return result

s = Solution()
print( s.reverse(90100))
