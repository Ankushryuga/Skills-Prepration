# Mac specific.

# Install Homebrew:
    => using brew:
      1. /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install JDK:
    => 
    1. brew install openjdk@17
    2. echo 'export JAVA_HOME="/usr/local/opt/openjdk@17"' >> ~/.zshrc
       source ~/.zshrc

# Install Apache Cassandra:
    => 
    brew install cassandra

# Start Cassandra Service:
    => 
    brew services start cassandra

# Verify installation:
    => cqlsh



