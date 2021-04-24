# Remove python2
sudo apt purge -y python2.7-minimal

# You already have Python3 but 
# don't care about the version 
sudo ln -s /usr/bin/python3 /usr/bin/python

# Same for pip
sudo apt install -y python3-pip
sudo ln -s /usr/bin/pip3 /usr/bin/pip

# Confirm the new version of Python: 3
python --version