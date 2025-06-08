## YAML:  it's not a markup language, it is used to serialize the data for human understanding, used by docker-compose and kubernetes.


## Some impotant concept for YAML:

# **#** is used for comments.

# key-value pair space is important: example: a_number_value: 100
# Nesting uses identation: 2 space indent is preferred (but not required).
      a_nested_map:
         key: value
         another_key: Another_value
         another_nested_map:
           hello: hello

# Sequences (equivalent to lists or arrays) look like this
# '-' counts as identation:
# List example:
    a_sequence:
        -  Item 1
        -  Item 2

# Since YAML is a superset of JSON, you can also write JSON-style maps and sequences:
    json_map: {"key": "value"}
    json_seq: [3,2,1, "takeoff"]

    
