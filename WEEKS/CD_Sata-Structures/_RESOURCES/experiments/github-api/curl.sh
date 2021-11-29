GHUSER=bgoonz; curl "https://api.github.com/users/bgoonz/repos?per_page=100" | grep -o 'git@[^"]*'





GHUSER=bgoonz; curl -s "https://api.github.com/users/bgoonz/repos?per_page=400&page=2" | grep -w clone_url | grep -o '[^"]\+://.\+.git' >out.md
