-- CreateTable
CREATE TABLE "public"."documento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "titular" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoE" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "documento_pkey" PRIMARY KEY ("id")
);
