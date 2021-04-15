FROM amazonlinux

# Create deploy directory
WORKDIR /deploy

# Install system dependencies
RUN yum -y install gcc-c++
RUN curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
RUN yum -y install nodejs

# Install serverless
RUN npm install -g serverless

# HERE'S WHERE YOU SHOULD
# REPLACE `XYZ` WITH YOUR KEYS
# Find your keys in the file we created in Video 1.2
RUN sls config credentials --provider aws --key AKIAI5ADR6I47R7KNQNA --secret hgViBkg/hU0atYQVPivFnKhRAKu2ltd/dpUWNmjm

# Copy over the package.json to the container
COPY package.json /deploy

# Install app dependencies
RUN npm install

# Copy source
COPY . /deploy