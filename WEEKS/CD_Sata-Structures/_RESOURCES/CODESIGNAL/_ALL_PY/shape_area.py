# https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ
# Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
# A 1-interesting polygon is just a square with a side of length 1.
# An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim,
# side by side.


def shape_area(n: int = None) -> int:
    if n is not None and isinstance(n, int) and 1 <= n <= 10000:
        return (n - 1) ** 2 + n ** 2
    return 0
