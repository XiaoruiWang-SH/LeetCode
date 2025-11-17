class Solution:
    def reverse(self, x: int) -> int:
        negative: bool = x < 0
        if negative:
            x = -x
        reversed = []
        while x % 10 != 0 or x // 10 != 0:
            r = x % 10
            x = x // 10
            if r == 0 and len(reversed) == 0:
                continue
            reversed.append(r)
        exponential = 0
        result = 0
        while len(reversed) != 0:
            result += reversed.pop() * (10 ** exponential)
            if result > 2**31 - 1 or result <= -2**31:
                return 0
            exponential += 1

        result = -result if negative else result
        
        return result

s = Solution()
print( s.reverse(90100))
