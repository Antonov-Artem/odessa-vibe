-- CreateTable
CREATE TABLE "Organizer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Participant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "source" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_EventToOrganizer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_EventToOrganizer_A_fkey" FOREIGN KEY ("A") REFERENCES "Event" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_EventToOrganizer_B_fkey" FOREIGN KEY ("B") REFERENCES "Organizer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_EventToParticipant" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_EventToParticipant_A_fkey" FOREIGN KEY ("A") REFERENCES "Event" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_EventToParticipant_B_fkey" FOREIGN KEY ("B") REFERENCES "Participant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Participant_email_key" ON "Participant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_EventToOrganizer_AB_unique" ON "_EventToOrganizer"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToOrganizer_B_index" ON "_EventToOrganizer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventToParticipant_AB_unique" ON "_EventToParticipant"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToParticipant_B_index" ON "_EventToParticipant"("B");
