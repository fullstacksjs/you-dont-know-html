import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface AnswerDto {
  questionId: number;
  answerId: number;
  correct: boolean;
}

export const createGame = async (answers: AnswerDto[]) => {
  return prisma.game.create({ data: { answers: { create: answers } } });
};

export const getAnswersCount = (questionId: number, optionId: number) =>
  prisma.answer.count({ where: { questionId, answerId: optionId } });

export const getGamesCount = (questionId: number) =>
  prisma.answer.count({ where: { questionId } });
