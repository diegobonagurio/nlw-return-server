import express from "express";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { PrismaFeedbcksRepository } from "./repositories/prisma/prisma-feedback-repository";
import { NodemailerMaiAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbcksRepository();
  const nodamilerMaiAdapter = new NodemailerMaiAdapter();

  const submitFeedbackUseCases = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodamilerMaiAdapter
  );

  await submitFeedbackUseCases.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
