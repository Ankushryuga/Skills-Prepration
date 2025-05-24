# More Resources:
    => https://www.eduonix.com/courses/Web-Development/Learn-Apache-Cassandra-from-Scratch

#  Architecture overview:
    => Cassandra is distributed NoSQL database designed for scalability and high availability.
       its architecture include:
        1. Nodes: Individual Servers in the cluster.
        2. Data centers: Logging grouping of nodes.
        3. Keyspaces: Containers for tables, similar to databases in RDBMS.
        4. Tables:  Store data in rows and column.


# Data Model:
      => 
      1. Primary Key: Uniquely identifies rows: composed of:
          1.1. Partition key: Determines data distribution across nodes.
          1.2. Clustering Columns: Define the order of rows within a partition.
      2. Tables: Defined by a primary key and optional Secondry indexes.

# CQL: 
      => Similar to SQL but tailored for its distributed nature
        Example:
          => CREATE TABLE users (user_id UUID PRIMARY KEY, name TEXT, email TEXT);


# Basic Operations in CQLSH:
      => 1. CREATE A KEYSPACE(KEYSPACE in cassandra is a namespace that defines data replication on nodes. It is similar to a database in RDBMS and 
            contains column families (tables), user-defined types, indexes, replication factors, and strategies.

            SYNTAX:
              CREATE KEYSPACE IF NOT EXISTS my_keyspace
              WITH replication  = {'class': 'SimpleStrategy', 'replication_factor': 1};

          2. Use the keyspace:

            Syntax:
              USE my_keyspace

          3. Create a table:
              
              Syntax:
                => CREATE TABLE users (
                    user_id UUID PRIMARY KEY,
                    name TEXT,
                    email TEXT
                );
          
          4. Insert Data:
              
              Syntax:
                => INSERT INTO users (user_id, name, email) VALUES (uuid(), 'Alice', 'alice@example.com');

          5. Update Data:

              Syntax:
                => UPDATE users SET email = "alice@newdomain.com" WHERE user_id = <specific_id>

          6. Delete Data:

              Syntax:
                => DELETE FROM users WHERE user_id = <specific_id>


# Data Modeling Bes Practices:
    => 
    1. Denormalization: Cassandra encourages denormalization for performance. Design your schema based on query patterns.
    2. Avoid Joins: Cassnadra doesn't support joins; model your data accordingly.
    3. Use Collections: Utilize Sets, lists, & map for complext data types.
    4. Secondry Indexes: Use them judiciously, as they can impact perfomance.


# Experiment with real-world use cases.
    =>
    1. Time-Series Data: Cassandra excels at handling time-series data, such as logs or sensor data. Design your schema to store
       data with timestamps and partition by time intervals.
    2. User Activity Tracking: Store user interactions, such as clicks or page views, with appropriate partitioning to ensure efficient reads and writes.
    3. IOT Data storage: Cassandra's Scalability makes it suitable for storing large volumes of IOT data, ensuring high availbility and fault tolerance.


