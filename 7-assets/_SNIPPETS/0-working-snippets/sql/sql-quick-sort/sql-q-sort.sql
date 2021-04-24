 CREATE TABLE sort_test (x numeric);
 INSERT INTO sort_test SELECT random()
FROM generate_series(1, 5000000);
SET work_mem TO '1 GB';
EXPLAIN ANALYZE  SELECT * FROM sort_test ORDER BY x;
explain analyze SELECT * FROM sort_test ORDER BY x LIMIT 10;
