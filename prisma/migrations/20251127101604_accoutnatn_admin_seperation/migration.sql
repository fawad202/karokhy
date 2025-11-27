/*
  Warnings:

  - The values [ACCOUNTANT] on the enum `Shareholder_role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `Admin_Accountant` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `Shareholder` MODIFY `role` ENUM('ADMIN', 'SHAREHOLDER') NOT NULL;

-- DropTable
DROP TABLE `Admin_Accountant`;

-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `role` ENUM('ADMIN', 'SHAREHOLDER') NOT NULL,

    UNIQUE INDEX `Admin_username_key`(`username`),
    UNIQUE INDEX `Admin_phone_key`(`phone`),
    INDEX `Admin_username_idx`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Accountant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `role` ENUM('ADMIN', 'SHAREHOLDER') NOT NULL,

    UNIQUE INDEX `Accountant_username_key`(`username`),
    UNIQUE INDEX `Accountant_phone_key`(`phone`),
    INDEX `Accountant_username_idx`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
