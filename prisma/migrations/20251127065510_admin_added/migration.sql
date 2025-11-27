/*
  Warnings:

  - You are about to drop the `Accountant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Accountant`;

-- CreateTable
CREATE TABLE `Admin_Accountant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `role` ENUM('ADMIN', 'ACCOUNTANT') NOT NULL,

    UNIQUE INDEX `Admin_Accountant_username_key`(`username`),
    UNIQUE INDEX `Admin_Accountant_phone_key`(`phone`),
    INDEX `Admin_Accountant_role_idx`(`role`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
