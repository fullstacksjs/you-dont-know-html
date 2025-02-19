"use server";

// import { allQuestions } from "@/questions/all-questions";
// import { supabase } from "@/supabase";

export async function saveAnswers(answers: number[]) {
  console.log("save answers");

  // const answersPromise = allQuestions.map((question, index) =>
  //   supabase.from("answers").insert({
  //     questionId: question.id,
  //     optionId: answers[index],
  //   })
  // );

  // const response = await Promise.all(answersPromise);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return true;
}
