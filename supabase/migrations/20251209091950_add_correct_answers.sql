alter table "public"."game" add column "correct_answers" smallint;

update game
set correct_answers = coalesce(a.correct_answers_count, 0)
from (
  select game_id, count(*) as correct_answers_count
  from answer
  where answer.is_correct = true
  group by game_id
) a
where game.id = a.game_id;

