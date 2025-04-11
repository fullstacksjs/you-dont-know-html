CREATE OR REPLACE FUNCTION get_games_with_correct_answers(min_correct_answers integer)
RETURNS TABLE (game_id bigint, correct_answers_count bigint)
LANGUAGE sql
AS $$
  SELECT
    g.id as game_id,
    COUNT(a.id) as correct_answers_count
  FROM game g
  JOIN answer a ON a.game_id = g.id
  WHERE a.is_correct = true
  GROUP BY g.id
  HAVING COUNT(a.id) <= min_correct_answers;
$$;
