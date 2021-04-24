cd /etc/postgresql/9.x/main/
open file named postgresql.conf

sudo vi postgresql.conf
add this line to that file

listen_addresses = '*'
then open file named pg_hba.conf

sudo vi pg_hba.conf
and add this line to that file

host  all  all 0.0.0.0/0 md5
It allows access to all databases for all users with an encrypted password

restart your server
sudo /etc/init.d/postgresql restart
