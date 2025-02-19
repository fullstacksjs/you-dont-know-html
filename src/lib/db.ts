import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const db = prisma;

interface Answer {
  questionId: number;
  answerId: number;
  correct: boolean;
}

export const createPlay = async (answers: Answer[]) => {
  const newPlay = await prisma.play.create({
    data: {
      answers: {
        create: answers,
      },
    },
  });

  console.log({ newPlay });

  return newPlay;
};
