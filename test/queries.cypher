// name: one
MATCH (o) RETURN o;

// name: two
MATCH (t)
WHERE t.name = "John"
RETURN t
LIMIT 1;
