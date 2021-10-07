class Solution:
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        roots, names = {}, {}
        for account in accounts:
            for i in account[1:]:
                roots[i] = i
                names[i] = account[0]

        for account in accounts:
            r = self.find(account[1], roots)
            for i in account[2:]:
                roots[self.find(i, roots)] = r

        unions = defaultdict(set)
        for account in accounts:
            for i in account[1:]:
                unions[self.find(i, roots)].add(i)

        result = []
        for k, v in unions.items():
            result.append([names[k]] + sorted(list(v)))
        return result

    def find(self, node, roots):
        root = node
        while roots[root] != root:
            root = roots[root]
        while node != root:
            roots[node], node = root, roots[node]
        return root
