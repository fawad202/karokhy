/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropTable
DROP TABLE `Post`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `Accountant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `role` VARCHAR(191) NOT NULL DEFAULT 'accountant',

    UNIQUE INDEX `Accountant_username_key`(`username`),
    UNIQUE INDEX `Accountant_phone_key`(`phone`),
    INDEX `Accountant_role_idx`(`role`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
