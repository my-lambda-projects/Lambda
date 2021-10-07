class Solution:
    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:
        d = {}
        for cpdomain in cpdomains:
            count, domain = int(cpdomain.split()[0]), cpdomain.split()[1]
            domains = domain.split(".")
            for i in range(len(domains)):
                subdomain = ".".join(domains[i:])
                d[subdomain] = d.get(subdomain, 0) + count
        return [str(v) + " " + k for k, v in d.items()]
